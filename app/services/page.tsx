const services = [
  ['Paid Ads', 'Multi-channel paid acquisition engineered for measurable ROI.'],
  ['AI Receptionists', 'Human-like lead qualification and appointment booking around the clock.'],
  ['Automated Follow-Ups', 'Behavioral drip campaigns that recover lost deals automatically.'],
  ['Revenue Optimization', 'Offer architecture, pricing diagnostics, and funnel conversion improvements.']
];

export default function ServicesPage() {
  return (
    <section className="mx-auto w-[min(1120px,94%)] py-20">
      <h1 className="text-4xl font-bold">Services</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {services.map(([title, text]) => (
          <article key={title} className="glass rounded-2xl p-6">
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p className="mt-3 text-white/80">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
