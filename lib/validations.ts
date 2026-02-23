import { z } from 'zod';

export const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Enter a valid email'),
  company: z.string().min(2, 'Company is required'),
  phone: z.string().optional(),
  message: z.string().min(20, 'Please provide at least 20 characters'),
  serviceInterest: z.enum(['Paid Ads', 'AI Receptionist', 'Automated Follow-Ups', 'Revenue Optimization'])
});

export type LeadFormValues = z.infer<typeof leadSchema>;
