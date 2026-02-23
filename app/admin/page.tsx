import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { getSupabaseServerClient } from '@/lib/supabase';

async function getLeads() {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false }).limit(200);
  if (error) throw error;
  return data;
}

export default async function AdminPage() {
  const cookieStore = cookies();
  if (cookieStore.get('dna_admin')?.value !== process.env.ADMIN_DASHBOARD_PASSWORD) {
    redirect('/admin/sign-in');
  }

  const leads = await getLeads();

  return (
    <section className="mx-auto w-[min(1120px,94%)] py-20">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-bold">Lead Dashboard</h1>
        <a href="/api/leads/export" className="rounded-full border px-4 py-2">Export CSV</a>
      </div>
      <p className="mb-5 text-white/70">Total leads: {leads.length}</p>
      <div className="overflow-x-auto rounded-2xl border border-white/15">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/5">
            <tr><th className="p-3">Name</th><th>Email</th><th>Company</th><th>Service</th><th>Date</th></tr>
          </thead>
          <tbody>
            {leads.map((lead) => (
              <tr key={lead.id} className="border-t border-white/10"><td className="p-3">{lead.name}</td><td>{lead.email}</td><td>{lead.company}</td><td>{lead.service_interest}</td><td>{new Date(lead.created_at).toLocaleDateString()}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
