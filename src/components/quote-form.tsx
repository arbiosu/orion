'use client';

import { useState, useCallback } from 'react';

import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Button } from './ui/button';
import { Card, CardContent, CardTitle, CardHeader } from './ui/card';

interface QuoteFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  isLoading: boolean;
  error: string | null;
  success: string | null;
}

const INITIAL_FORM_DATA: QuoteFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const INITIAL_FORM_STATUS: FormStatus = {
  isLoading: false,
  error: null,
  success: null,
};

export default function QuoteForm() {
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_FORM_DATA);
  const [formStatus, setFormStatus] = useState<FormStatus>(INITIAL_FORM_STATUS);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const resetStatus = useCallback(() => {
    if (formStatus.error || formStatus.success) {
      setFormStatus(INITIAL_FORM_STATUS);
    }
  }, [formStatus.error, formStatus.success]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
      resetStatus();
    },
    [resetStatus]
  );

  const resetForm = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
  }, []);

  const validateForm = (): boolean => {
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      message: formData.message.trim(),
    };

    if (!trimmedData.name) {
      setFormStatus({
        isLoading: false,
        error: 'Name is required.',
        success: null,
      });
      return false;
    }
    if (!trimmedData.email) {
      setFormStatus({
        isLoading: false,
        error: 'Email is required.',
        success: null,
      });
      return false;
    }

    if (!trimmedData.subject) {
      setFormStatus({
        isLoading: false,
        error: 'Subject is required.',
        success: null,
      });
      return false;
    }

    if (!trimmedData.message) {
      setFormStatus({
        isLoading: false,
        error: 'Message is required.',
        success: null,
      });
      return false;
    }

    if (!validateEmail(trimmedData.email)) {
      setFormStatus({
        isLoading: false,
        error: 'Invalid Email Address Format!',
        success: null,
      });
      return false;
    }

    resetStatus();
    setFormData(() => ({
      ...trimmedData,
    }));

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;
    setFormStatus({ isLoading: true, error: null, success: null });

    try {
      const res = await fetch('/api/email/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (!res.ok) {
        if (res.status === 429) {
          setFormStatus({
            isLoading: false,
            error: `Too many request attempts. Please try again in ${data.resetInMinutes} minutes`,
            success: null,
          });
        }
        setFormStatus({
          isLoading: false,
          error: data.error,
          success: null,
        });
        console.log(data);
        return;
      }
      setFormStatus({
        isLoading: false,
        error: null,
        success:
          'We got your message. Thanks for reaching out! Expect an answer in ~72 hours',
      });
      resetForm();
    } catch (e) {
      console.error('Failed to send contact form:', e);
      setFormStatus({
        isLoading: false,
        error: 'An unexpected error occurred. Please try again later.',
        success: null,
      });
      return;
    }
  };
  return (
    <Card
      id='quoteForm'
      className='mx-auto w-full max-w-sm overflow-hidden border-0 shadow-2xl md:max-w-md'
    >
      {/* Accent bar */}

      <CardHeader className='px-6 pt-6 pb-5'>
        <div className='mb-3 flex items-center gap-2'>
          {/* Hard hat icon */}
          <svg
            className='h-5 w-5 text-amber-500'
            viewBox='0 0 24 24'
            fill='currentColor'
          >
            <path d='M12 2a1 1 0 0 1 1 1v1.07A8.001 8.001 0 0 1 20 12v1h1a1 1 0 1 1 0 2H3a1 1 0 1 1 0-2h1v-1a8.001 8.001 0 0 1 7-7.93V3a1 1 0 0 1 1-1ZM5 13h14v-.5A6 6 0 0 0 6 12.5V13Zm-1 4a1 1 0 0 1 1-1h14a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1Z' />
          </svg>
          <span className='text-xs font-semibold tracking-widest text-amber-500 uppercase'>
            Free Estimate
          </span>
        </div>
        <CardTitle className='text-2xl leading-tight font-bold'>
          Request a Quote
        </CardTitle>
        <p className='mt-1.5 text-sm leading-relaxed text-zinc-500'>
          {
            "Tell us about your project and we'll get back to you within one business day."
          }
        </p>
      </CardHeader>

      <CardContent className='px-6 py-6'>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='space-y-1.5'>
              <Label
                htmlFor='name'
                className='text-xs font-semibold tracking-wider text-zinc-500 uppercase'
              >
                Full Name
              </Label>
              <Input
                id='name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='John Smith'
                disabled={formStatus.isLoading}
                required
                className='border-zinc-300 bg-white focus-visible:border-amber-500 focus-visible:ring-amber-500/20'
              />
            </div>

            <div className='space-y-1.5'>
              <Label
                htmlFor='email'
                className='text-xs font-semibold tracking-wider text-zinc-500 uppercase'
              >
                Email Address
              </Label>
              <Input
                id='email'
                type='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='john@company.com'
                disabled={formStatus.isLoading}
                required
                className='border-zinc-300 bg-white focus-visible:border-amber-500 focus-visible:ring-amber-500/20'
              />
            </div>

            <div className='space-y-1.5'>
              <Label
                htmlFor='subject'
                className='text-xs font-semibold tracking-wider text-zinc-500 uppercase'
              >
                Project Type
              </Label>
              <Input
                id='subject'
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder='e.g. Kitchen Renovation'
                disabled={formStatus.isLoading}
                required
                className='border-zinc-300 bg-white focus-visible:border-amber-500 focus-visible:ring-amber-500/20'
              />
            </div>

            <div className='space-y-1.5'>
              <Label
                htmlFor='message'
                className='text-xs font-semibold tracking-wider text-zinc-500 uppercase'
              >
                Project Details
              </Label>
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='Describe the scope, timeline, and location of your project...'
                disabled={formStatus.isLoading}
                required
                className='min-h-[110px] resize-none border-zinc-300 bg-white focus-visible:border-amber-500 focus-visible:ring-amber-500/20'
              />
            </div>

            <div className='min-h-5'>
              {formStatus.error && (
                <p className='flex items-center gap-1.5 text-sm text-red-600'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-red-600' />
                  {formStatus.error}
                </p>
              )}
              {formStatus.success && (
                <p className='flex items-center gap-1.5 text-sm text-green-700'>
                  <span className='inline-block h-1.5 w-1.5 rounded-full bg-green-700' />
                  {formStatus.success}
                </p>
              )}
            </div>

            <Button
              type='submit'
              size='lg'
              disabled={formStatus.isLoading}
              className='cursor-pointer font-bold tracking-widest uppercase shadow-none'
            >
              {formStatus.isLoading ? (
                <span className='flex items-center gap-2'>
                  <svg
                    className='h-4 w-4 animate-spin'
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    />
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z'
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Request Free Quote'
              )}
            </Button>

            <p className='text-center text-xs text-zinc-400'>
              No commitment required · Responds within 24 hours
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
