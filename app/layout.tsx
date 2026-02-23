import type { Metadata } from 'next';
import './globals.css';
import { baseMetadata } from '@/lib/seo';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { ScrollProgress } from '@/components/scroll-progress';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/custom-cursor';
import { FloatingCta } from '@/components/floating-cta';
import { ChatbotWidget } from '@/components/chatbot-widget';

export const metadata: Metadata = baseMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'DNA Agency',
    description: 'AI automation and paid ads agency for contractors',
    areaServed: 'United States'
  };

  return (
    <html lang="en">
      <body className="bg-noise">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ThemeProvider>
          <ScrollProgress />
          <CustomCursor />
          <SiteHeader />
          <main>{children}</main>
          <FloatingCta />
          <ChatbotWidget />
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
