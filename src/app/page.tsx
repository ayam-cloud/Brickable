import Link from "next/link";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { StarBadge } from "@/components/Logo";

const VALUE_PROPS = [
  {
    title: "Handbuilt, real LEGO® bricks",
    body: "Every Brickable is designed by hand and assembled with genuine LEGO® pieces — not knockoffs.",
  },
  {
    title: "Holds a kosher scroll",
    body: "Each mezuzah securely holds a kosher scroll and mounts easily to any doorframe.",
  },
  {
    title: "Custom builds available",
    body: "Don't see your vibe? Request a one-of-a-kind Brickable tailored to you or your business.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-black via-brand-black to-slate-900 text-white">
        <StarBadge className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-white/5" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-gold">
              Custom LEGO&reg; Judaica
            </p>
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              Mezuzahs built brick by brick.
            </h1>
            <p className="mt-4 max-w-md text-white/70">
              Handcrafted LEGO&reg; mezuzah kits for your home, your simcha, or your storefront.
              Pick a design or request one built just for you.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105"
              >
                Shop the collection
              </Link>
              <Link
                href="/request"
                className="rounded-full border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                Request a Brickable
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {products.map((product) => (
              <div
                key={product.slug}
                className={`flex aspect-[3/4] items-end rounded-xl bg-gradient-to-br ${product.gradient} p-3`}
              >
                <span className="text-xs font-bold text-white drop-shadow">{product.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/5 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
          {VALUE_PROPS.map((item) => (
            <div key={item.title}>
              <h2 className="text-lg font-bold text-brand-black">{item.title}</h2>
              <p className="mt-2 text-sm text-black/60">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="mb-8 flex items-end justify-between">
            <h2 className="text-2xl font-black text-brand-black sm:text-3xl">
              Find the perfect mezuzah
            </h2>
            <Link href="/shop" className="text-sm font-bold text-brand-blue hover:underline">
              Shop all &rarr;
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-black text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <h2 className="text-2xl font-black sm:text-3xl">
              Want a Brickable made for your business?
            </h2>
            <p className="mt-3 text-white/70">
              We&apos;ve already designed custom models for local Jewish businesses like Smash
              House and Holy Schnitzel. See the showcase and tell us about your brand.
            </p>
          </div>
          <Link
            href="/request"
            className="shrink-0 rounded-full bg-brand-gold px-6 py-3 font-bold text-brand-black transition-transform hover:scale-105"
          >
            Request a Custom Brickable
          </Link>
        </div>
      </section>
    </div>
  );
}
