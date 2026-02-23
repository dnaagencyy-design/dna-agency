'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return <div className="pointer-events-none fixed z-50 hidden h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-400/70 bg-brand-500/20 md:block" style={{ left: pos.x, top: pos.y }} />;
}
