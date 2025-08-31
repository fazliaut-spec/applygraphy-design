// app/api/payment/create-intent/route.ts
export const dynamic = 'force-dynamic';

// از Response استاندارد استفاده می‌کنیم تا تداخل پیش نیاد
function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

export async function POST() {
  // TODO: اینجا بعداً Stripe/زرین‌پال/نکست‌پی اضافه می‌کنیم
  return json({ ok: true, intentId: 'stub' });
}

export async function GET() {
  return json({ ok: true });
}

