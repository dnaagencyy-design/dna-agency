'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/services'],
  ['Case Studies', '/case-studies'],
  ['Contact', '/contact']
] as const;

export function SiteHeader() {
  const [shrink, setShrink] = useState(false);
  useEffect(() => {
    const onScroll = () => setShrink(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-all ${shrink ? 'py-2' : 'py-4'}`}>
      <nav className="mx-auto flex w-[min(1120px,94%)] items-center justify-between rounded-full border border-white/15 bg-black/60 px-5 backdrop-blur-xl">
        <Link href="/" className="py-3 text-lg font-bold">DNA Agency</Link>
        <ul className="hidden gap-5 md:flex">
          {links.map(([label, href]) => (
            <li key={href}><Link className="text-sm text-white/80 hover:text-white" href={href}>{label}</Link></li>
          ))}
        </ul>
        <Link href="/contact" className="glow-btn text-sm">Book Strategy Call</Link>
      </nav>
    </header>
  );
}
