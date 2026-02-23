import { Resend } from 'resend';
import { LeadInput } from './types';

export async function sendLeadEmails(lead: LeadInput) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  const adminEmail = process.env.ADMIN_EMAIL!;

  await resend.emails.send({
    from: 'DNA Agency <leads@updates.dna-agency.com>',
    to: adminEmail,
    subject: `New strategy call lead from ${lead.name}`,
    html: `<h2>New lead submitted</h2><p><strong>Name:</strong> ${lead.name}</p><p><strong>Email:</strong> ${lead.email}</p><p><strong>Company:</strong> ${lead.company}</p><p><strong>Phone:</strong> ${lead.phone ?? 'N/A'}</p><p><strong>Service:</strong> ${lead.serviceInterest}</p><p><strong>Message:</strong><br/>${lead.message}</p>`
  });

  await resend.emails.send({
    from: 'DNA Agency <hello@dna-agency.com>',
    to: lead.email,
    subject: 'Your strategy call request has been received',
    html: `<h2>Thanks ${lead.name}, you're in.</h2><p>Our team will review your details and reach out within 1 business day.</p><p>Want to skip the queue? Book immediately: <a href="https://calendly.com">Calendly</a>.</p>`
  });
}
