'use client';

import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSignInPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) });
    if (!res.ok) {
      setError('Invalid password');
      return;
    }
    router.push('/admin');
  };

  return (
    <section className="mx-auto w-[min(480px,94%)] py-24">
      <form onSubmit={onSubmit} className="glass rounded-2xl p-6">
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mt-4 w-full rounded-lg border bg-black/40 p-3" placeholder="Dashboard password" />
        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
        <button className="glow-btn mt-4">Sign In</button>
      </form>
    </section>
  );
}
