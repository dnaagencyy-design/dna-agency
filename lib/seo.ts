import { Metadata } from 'next';

export const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000';

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'DNA Agency | Premium AI Automation for Contractors',
    template: '%s | DNA Agency'
  },
  description:
    'DNA Agency helps contractors close more high-ticket jobs with paid ads, AI receptionists, follow-up automation, and revenue optimization systems.',
  openGraph: {
    type: 'website',
    siteName: 'DNA Agency',
    title: 'DNA Agency',
    description:
      'Scale high-ticket job bookings with AI-powered growth systems for contractors.',
    url: siteUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DNA Agency',
    description: 'Enterprise AI automation and lead generation for contractors.'
  }
};
