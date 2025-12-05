import { resend } from '@/lib/resend/resend';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { z } from 'zod';

const EMAIL_SUBJECT_PREFIX = 'New Quote Request:';
const FROM_EMAIL = process.env.FROM_EMAIL;
const TO_EMAIL = process.env.TO_EMAIL;

const RATE_LIMIT = 3;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour in milliseconds
const COOKIE_NAME = 'quote_submissions';

const QuoteFormSchema = z.object({
  name: z.string().trim().min(1, { message: 'Name is required ' }).max(100),
  email: z.email({ message: 'Invalid Email Address' }),
  subject: z.string().trim().min(1, { message: 'Subject is required' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at between 10-5000 characters long' })
    .max(5000),
});

type QuoteMessage = z.infer<typeof QuoteFormSchema>;

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: Request) {
  if (!TO_EMAIL || !FROM_EMAIL || !process.env.RESEND_SECRET_KEY) {
    console.error('Missing environment variables for quote form');
    return NextResponse.json(
      { error: 'Internal server configuration error' },
      { status: 500 }
    );
  }

  const cookieStore = cookies();
  const submissionsCookie = (await cookieStore).get(COOKIE_NAME);
  let submissions: { timestamp: number; count: number };
  try {
    const now = Date.now();
    if (submissionsCookie?.value) {
      submissions = JSON.parse(submissionsCookie.value);
      // reset
      if (now - submissions.timestamp > RATE_LIMIT_WINDOW_MS) {
        submissions = { timestamp: now, count: 0 };
      }
    } else {
      submissions = { timestamp: now, count: 0 };
    }
    if (submissions.count >= RATE_LIMIT) {
      const resetTime = submissions.timestamp + RATE_LIMIT_WINDOW_MS;
      const timeRemaining = Math.ceil((resetTime - now) / 60000);
      return NextResponse.json(
        {
          error: 'Too many requests. Please try again later.',
          resetInMinutes: timeRemaining,
        },
        { status: 429 }
      );
    }
  } catch (e) {
    console.error('Error processing rate limit cookie: ', e);
    return NextResponse.json(
      { error: 'Could not process request due to internal error.' },
      { status: 500 }
    );
  }

  let body: QuoteMessage;
  try {
    const rawBody = await req.json();
    body = QuoteFormSchema.parse(rawBody);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.message || 'invalid input' },
        { status: 400 }
      );
    }
    console.error('Error parsing request body:', error);
    return NextResponse.json(
      { error: 'Invalid request format.' },
      { status: 400 }
    );
  }

  try {
    const safeName = escapeHtml(body.name);
    const safeEmail = escapeHtml(body.email);
    const safeSubject = escapeHtml(body.subject);
    const safeMessage = escapeHtml(body.message).replace(/\n/g, '<br>');

    const { error } = await resend.emails.send({
      from: `Orion Handyman and Remodeling <${FROM_EMAIL}>`,
      to: TO_EMAIL,
      subject: `${EMAIL_SUBJECT_PREFIX}: ${safeSubject}`,
      html: `<p><strong>From:</strong> ${safeName} (${safeEmail})</p>
        <p><strong>Subject:</strong> ${safeSubject}</p>
        <p><strong>Message:</strong> ${safeMessage}</p>
        <hr>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>`,
    });
    if (error) {
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email.' },
        { status: 500 }
      );
    }

    submissions.count += 1;
    const remaining = RATE_LIMIT - submissions.count;
    const response = NextResponse.json(
      {
        message: 'Email sent successfully.',
        remainingRequests: remaining,
      },
      { status: 200 }
    );
    response.cookies.set({
      name: COOKIE_NAME,
      value: JSON.stringify(submissions),
      expires: new Date(Date.now() + RATE_LIMIT_WINDOW_MS),
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
    });
    return response;
  } catch (error) {
    console.error('Unexpected error in contact form API:', error);
    return NextResponse.json(
      { error: 'An unexpected internal server error occurred.' },
      { status: 500 }
    );
  }
}
