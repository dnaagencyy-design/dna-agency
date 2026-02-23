'use client';

import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / (document.body.scrollHeight - window.innerHeight);
      setProgress(Math.max(0, Math.min(1, pct)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return <div className="fixed left-0 top-0 z-50 h-1 bg-brand-500" style={{ width: `${progress * 100}%` }} />;
}
