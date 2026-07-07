import Link from "next/link";
import { Product, formatPrice } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div
        className={`flex h-48 items-center justify-center bg-gradient-to-br ${product.gradient}`}
      >
        <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {product.pieceCount} pieces
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold text-brand-black">{product.name}</h3>
        <p className="flex-1 text-sm text-black/60">{product.tagline}</p>
        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-black text-brand-black">
            {formatPrice(product.priceCents)}
          </span>
          <span className="rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-brand-black transition-transform group-hover:scale-105">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
