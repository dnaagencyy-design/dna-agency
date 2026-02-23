import Link from 'next/link';

export function FloatingCta() {
  return (
    <Link href="/contact" className="fixed bottom-4 left-1/2 z-40 w-[92%] -translate-x-1/2 rounded-full bg-brand-500 px-5 py-3 text-center font-semibold text-white shadow-glow md:hidden">
      Book Strategy Call
    </Link>
  );
}
