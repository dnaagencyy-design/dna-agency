import dynamic from 'next/dynamic';

const HomePage = dynamic(() => import('@/components/home-page').then((m) => m.HomePage), { ssr: false });

export default function Page() {
  return <HomePage />;
}
