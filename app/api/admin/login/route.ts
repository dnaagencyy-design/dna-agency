import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { password } = await req.json();
  if (password !== process.env.ADMIN_DASHBOARD_PASSWORD) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const response = NextResponse.json({ ok: true });
  response.cookies.set('dna_admin', password, { httpOnly: true, sameSite: 'strict', secure: true, path: '/' });
  return response;
}
