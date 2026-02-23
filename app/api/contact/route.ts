import { NextResponse } from 'next/server';
import { leadSchema } from '@/lib/validations';
import { getSupabaseServerClient } from '@/lib/supabase';
import { sendLeadEmails } from '@/lib/email';

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const input = leadSchema.parse(json);
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from('leads').insert({
      name: input.name,
      email: input.email,
      company: input.company,
      phone: input.phone,
      message: input.message,
      service_interest: input.serviceInterest
    });

    if (error) {
      return NextResponse.json({ error: 'Failed to store lead' }, { status: 500 });
    }

    await sendLeadEmails(input);

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Unexpected error' }, { status: 400 });
  }
}
