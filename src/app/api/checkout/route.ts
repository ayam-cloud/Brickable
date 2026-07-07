import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { stripe } from "@/lib/stripe";
import { prisma } from "@/lib/prisma";
import { getProductBySlug } from "@/lib/products";

const bodySchema = z.object({ slug: z.string() });

function siteUrl(req: NextRequest): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? req.nextUrl.origin;
}

export async function POST(req: NextRequest) {
  const parsed = bodySchema.safeParse(await req.json().catch(() => null));
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const product = getProductBySlug(parsed.data.slug);
  if (!product) {
    return NextResponse.json({ error: "Product not found." }, { status: 404 });
  }

  const origin = siteUrl(req);

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "usd",
            unit_amount: product.priceCents,
            product_data: {
              name: product.name,
              description: product.tagline,
            },
          },
        },
      ],
      success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout/canceled`,
      metadata: { productSlug: product.slug },
    });
  } catch (err) {
    console.error("Stripe checkout session creation failed:", err);
    return NextResponse.json(
      { error: "Checkout isn't set up yet. Please add real Stripe API keys." },
      { status: 502 },
    );
  }

  await prisma.order.create({
    data: {
      productSlug: product.slug,
      productName: product.name,
      amountTotal: product.priceCents,
      stripeSessionId: session.id,
      customerEmail: null,
    },
  });

  return NextResponse.json({ url: session.url });
}
