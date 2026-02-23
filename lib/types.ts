export type LeadInput = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message: string;
  serviceInterest: 'Paid Ads' | 'AI Receptionist' | 'Automated Follow-Ups' | 'Revenue Optimization';
};

export type LeadRecord = LeadInput & {
  id: string;
  created_at: string;
};
