import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

export async function GET() {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
  if (error || !data) return NextResponse.json({ error: 'Failed to load leads' }, { status: 500 });

  const header = 'name,email,company,phone,service_interest,message,created_at';
  const rows = data.map((lead) => [lead.name, lead.email, lead.company, lead.phone ?? '', lead.service_interest, lead.message.replace(/,/g, ';'), lead.created_at].join(','));
  const csv = [header, ...rows].join('\n');

  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv',
      'Content-Disposition': 'attachment; filename="dna-leads.csv"'
    }
  });
}
