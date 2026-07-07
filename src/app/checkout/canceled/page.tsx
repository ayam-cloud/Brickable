import Link from "next/link";

export default function CheckoutCanceledPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="text-3xl font-black text-brand-black">Checkout canceled</h1>
      <p className="mt-4 text-black/60">
        No charge was made. Your Brickable is still waiting whenever you&apos;re ready.
      </p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105"
      >
        Back to shop
      </Link>
    </div>
  );
}
