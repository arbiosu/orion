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
      className='mx-auto w-full max-w-sm border-2 border-zinc-300'
    >
      <CardHeader>
        <CardTitle className='text-center text-2xl'>
          Get A Free Quote!
        </CardTitle>
        <p className='text-muted-foreground text-center text-sm'>
          Get in touch with us about your desired project. Orion will do it!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='space-y-1'>
              <Label htmlFor='name'>Name</Label>
              <Input
                id='name'
                type='text'
                name='name'
                value={formData.name}
                onChange={handleInputChange}
                placeholder='Your name'
                disabled={formStatus.isLoading}
                required
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='text'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Your email'
                disabled={formStatus.isLoading}
                required
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='subject'>Subject</Label>
              <Input
                id='subject'
                type='text'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                placeholder='Subject'
                disabled={formStatus.isLoading}
                required
              />
            </div>
            <div className='space-y-1'>
              <Label htmlFor='message'>Message</Label>
              <Textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                placeholder='Describe the project'
                disabled={formStatus.isLoading}
                required
              />
            </div>
            <div className='mt-4 min-h-5'>
              {formStatus.error && (
                <p className='text-red-600'>{formStatus.error}</p>
              )}
              {formStatus.success && (
                <p className='text-green-600'>{formStatus.success}</p>
              )}
            </div>
            <Button
              type='submit'
              size={'lg'}
              disabled={formStatus.isLoading}
              className='cursor-pointer'
            >
              {formStatus.isLoading ? 'Processing...' : 'Get a Job Done'}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
