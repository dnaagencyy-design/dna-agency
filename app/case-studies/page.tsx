import Image from 'next/image';

export default function CaseStudiesPage() {
  return (
    <section className="mx-auto w-[min(1120px,94%)] py-20">
      <h1 className="text-4xl font-bold">Case Studies</h1>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {['Roofing group scaled from 27 to 94 qualified leads/month.', 'HVAC brand lifted booked calls by 186% in 120 days.', 'Remodeling company added $840k in recovered pipeline.'].map((text, idx) => (
          <article className="glass rounded-2xl overflow-hidden" key={idx}>
            <Image src={`https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop`} alt="Case study" width={800} height={450} className="h-40 w-full object-cover" />
            <p className="p-5 text-white/85">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
