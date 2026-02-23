const required = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'RESEND_API_KEY',
  'ADMIN_EMAIL',
  'STRIPE_SECRET_KEY',
  'NEXT_PUBLIC_APP_URL',
  'ADMIN_DASHBOARD_PASSWORD'
] as const;

export function getEnv() {
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error(`Missing environment variable: ${key}`);
    }
  }
  return process.env as Record<(typeof required)[number], string>;
}
