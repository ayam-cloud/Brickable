import Link from "next/link";

export default function CheckoutSuccessPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-black text-brand-black">Thank you!</h1>
      <p className="mt-4 text-black/60">
        Your order is confirmed. We&apos;ll email you a receipt and get your Brickable built and
        shipped soon.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105"
      >
        Keep browsing
      </Link>
    </div>
  );
}
