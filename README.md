# DNA Agency — Production-Ready Next.js Website

Premium, high-converting enterprise website for **DNA Agency** (AI automation + growth systems for contractors).

## Tech Stack
- Next.js 14 App Router + TypeScript
- Tailwind CSS
- Framer Motion + GSAP + Lenis
- React Hook Form + Zod
- Supabase lead storage
- Resend email sending
- Stripe checkout route (future-proof payments)
- Calendly embedding
- Vercel-ready

## Folder Structure

```txt
app/
  about/page.tsx
  services/page.tsx
  case-studies/page.tsx
  contact/page.tsx
  admin/page.tsx
  admin/sign-in/page.tsx
  api/
    contact/route.ts
    admin/login/route.ts
    leads/export/route.ts
    stripe/checkout/route.ts
  layout.tsx
  page.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  home-page.tsx
  site-header.tsx
  site-footer.tsx
  contact-form.tsx
  calendly-embed.tsx
  scroll-progress.tsx
  theme-provider.tsx
lib/
  email.ts
  seo.ts
  supabase.ts
  types.ts
  validations.ts
```

## Environment Variables
Create `.env.local` from this template:

```bash
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
RESEND_API_KEY=
ADMIN_EMAIL=you@company.com
STRIPE_SECRET_KEY=
ADMIN_DASHBOARD_PASSWORD=change_me
```

## Supabase Schema
Run SQL:

```sql
create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text not null,
  phone text,
  service_interest text not null,
  message text not null
);

alter table public.leads enable row level security;
```

## Local Setup
1. `npm install`
2. Add `.env.local`
3. `npm run dev`
4. Open `http://localhost:3000`

## Deploy to Vercel
1. Push repo to GitHub.
2. Import project in Vercel.
3. Add all environment variables in Vercel project settings.
4. Deploy.
5. Set custom domain and update `NEXT_PUBLIC_APP_URL`.

## Admin Dashboard
- URL: `/admin/sign-in`
- Password protected via `ADMIN_DASHBOARD_PASSWORD`
- View lead table + export CSV at `/api/leads/export`

## Notes
- Contact form writes to Supabase and sends both admin + confirmation emails through Resend.
- Stripe endpoint returns checkout URL for future payment flows.
- Calendly is embedded directly in contact and homepage booking sections.
