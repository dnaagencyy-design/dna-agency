import { ContactForm } from '@/components/contact-form';
import { CalendlyEmbed } from '@/components/calendly-embed';

export default function ContactPage() {
  return (
    <section className="mx-auto grid w-[min(1120px,94%)] gap-8 py-20 lg:grid-cols-2">
      <div>
        <h1 className="text-4xl font-bold">Let’s Build Your Growth System</h1>
        <p className="mt-3 text-white/80">Tell us your target and we’ll map the fastest path to high-ticket bookings.</p>
        <div className="mt-6"><ContactForm /></div>
      </div>
      <CalendlyEmbed />
    </section>
  );
}
