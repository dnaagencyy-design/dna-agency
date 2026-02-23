import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: [{
      quantity: 1,
      price_data: {
        currency: 'usd',
        product_data: { name: 'DNA Agency Implementation Deposit' },
        unit_amount: 50000
      }
    }],
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/contact?payment=success`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/contact?payment=cancelled`
  });

  return NextResponse.json({ url: session.url });
}
