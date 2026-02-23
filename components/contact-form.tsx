'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { leadSchema, LeadFormValues } from '@/lib/validations';

const services = ['Paid Ads', 'AI Receptionist', 'Automated Follow-Ups', 'Revenue Optimization'] as const;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LeadFormValues>({
    resolver: zodResolver(leadSchema),
    defaultValues: { serviceInterest: 'Paid Ads' }
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus('loading');
    const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    if (res.ok) {
      setStatus('success');
      reset();
      return;
    }
    setStatus('error');
  });

  return (
    <form onSubmit={onSubmit} className="glass space-y-4 rounded-3xl p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <input aria-label="Name" placeholder="Full name" {...register('name')} className="rounded-xl border bg-black/40 p-3" />
        <input aria-label="Email" placeholder="Business email" {...register('email')} className="rounded-xl border bg-black/40 p-3" />
        <input aria-label="Company" placeholder="Company" {...register('company')} className="rounded-xl border bg-black/40 p-3" />
        <input aria-label="Phone" placeholder="Phone" {...register('phone')} className="rounded-xl border bg-black/40 p-3" />
      </div>
      <select aria-label="Service interest" {...register('serviceInterest')} className="w-full rounded-xl border bg-black/40 p-3">
        {services.map((service) => <option key={service}>{service}</option>)}
      </select>
      <textarea aria-label="Message" placeholder="What growth target do you need to hit in the next 90 days?" {...register('message')} className="min-h-32 w-full rounded-xl border bg-black/40 p-3" />
      {Object.values(errors)[0] && <p className="text-sm text-red-400">{Object.values(errors)[0]?.message as string}</p>}
      <button type="submit" disabled={status === 'loading'} className="glow-btn disabled:opacity-50">{status === 'loading' ? 'Sending...' : 'Submit & Book Call'}</button>
      {status === 'success' && <p className="text-green-400">Lead received. Check your inbox for confirmation.</p>}
      {status === 'error' && <p className="text-red-400">Submission failed. Please retry in a moment.</p>}
    </form>
  );
}
