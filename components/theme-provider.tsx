'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light', light);
  }, [light]);

  return (
    <>
      <button
        aria-label="Toggle theme"
        className="fixed right-4 top-20 z-50 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-xs backdrop-blur"
        onClick={() => setLight((v) => !v)}
      >
        {light ? 'Dark' : 'Light'}
      </button>
      {children}
    </>
  );
}
