'use client';

import { motion, useInView } from 'framer-motion';
import { ArrowRight, Bot, ChartNoAxesCombined, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { ContactForm } from './contact-form';
import { CalendlyEmbed } from './calendly-embed';

gsap.registerPlugin(ScrollTrigger);

const services = [
  { icon: Megaphone, title: 'Paid Ads Command Center', text: 'Scale profitable contractor leads with channel-level attribution and AI bid optimization.' },
  { icon: Bot, title: 'AI Receptionist', text: 'Capture and qualify inbound leads 24/7 with human-sounding voice and text automation.' },
  { icon: ChartNoAxesCombined, title: 'Revenue Optimization', text: 'Recover dead deals with behavior-based follow-up sequences and reactivation loops.' }
];

export function HomePage() {
  const ref = useRef<HTMLDivElement>(null);
  const kpiRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(kpiRef, { once: true });

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if (ref.current) {
      gsap.utils.toArray('.gsap-reveal').forEach((el) => {
        gsap.fromTo(el as Element, { y: 42, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: el as Element,
            start: 'top 82%'
          }
        });
      });
    }

    return () => lenis.destroy();
  }, []);

  return (
    <div ref={ref} className="space-y-24 pb-24">
      <section className="relative overflow-hidden pt-14">
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="relative mx-auto w-[min(1120px,94%)] rounded-[2rem] border border-white/20 bg-white/5 p-8 backdrop-blur-2xl sm:p-14">
          <p className="mb-4 inline-flex rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-2 text-xs">Trusted by scaling home service brands</p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight sm:text-6xl">Book More High-Ticket Jobs with AI-Powered Growth Systems.</h1>
          <p className="mt-6 max-w-2xl text-white/80">DNA Agency fuses paid acquisition, AI receptionists, and follow-up automation to help contractors dominate local markets.</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="glow-btn">Book Your Strategy Call</Link>
            <Link href="/case-studies" className="rounded-full border border-white/25 px-6 py-3">View Client Results</Link>
          </div>
        </motion.div>
      </section>

      <section ref={kpiRef} className="gsap-reveal mx-auto grid w-[min(1120px,94%)] gap-5 sm:grid-cols-3">
        {[
          ['+238%', 'Average lead volume growth'],
          ['41%', 'Cost per acquisition reduction'],
          ['$3.4M', 'Tracked new annualized pipeline']
        ].map(([value, label]) => (
          <div key={label} className="glass rounded-2xl p-6">
            <p className="text-3xl font-bold text-brand-400">{isInView ? value : '0'}</p>
            <p className="text-sm text-white/75">{label}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto w-[min(1120px,94%)]">
        <h2 className="gsap-reveal mb-8 text-3xl font-bold">Revenue Engine Services</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} whileHover={{ rotateX: -4, rotateY: 4 }} className="gsap-reveal glass rounded-3xl p-6">
              <service.icon className="mb-4 text-brand-400" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-white/75">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-[min(1120px,94%)] gap-8 lg:grid-cols-2">
        <div className="gsap-reveal">
          <h2 className="text-3xl font-bold">Book your growth strategy call</h2>
          <p className="mb-6 mt-3 text-white/75">Limited onboarding slots this month. Lock your implementation roadmap now.</p>
          <ContactForm />
        </div>
        <div className="gsap-reveal">
          <div className="mb-3 rounded-xl border border-yellow-400/40 bg-yellow-500/10 px-4 py-2 text-sm text-yellow-200">⚡ Urgency: 3 onboarding spots left this month.</div>
          <CalendlyEmbed />
        </div>
      </section>

      <section className="mx-auto w-[min(1120px,94%)] rounded-3xl border border-white/15 bg-gradient-to-r from-brand-500/20 to-cyan-500/20 p-8 text-center">
        <h2 className="text-3xl font-bold">Ready to make your competitors irrelevant?</h2>
        <p className="mt-2 text-white/80">We guarantee strategic clarity in 14 days or your implementation fee is waived.</p>
        <Link href="/contact" className="glow-btn mt-6 inline-flex items-center gap-2">Start Now <ArrowRight size={16} /></Link>
      </section>
    </div>
  );
}
