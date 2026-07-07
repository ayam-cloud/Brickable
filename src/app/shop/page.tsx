import type { Metadata } from "next";
import { products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Shop | Brickable",
  description: "Shop our in-stock LEGO mezuzah kits.",
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <h1 className="text-3xl font-black text-brand-black sm:text-4xl">Shop Mezuzahs</h1>
        <p className="mt-3 text-black/60">
          Every kit is handbuilt with genuine LEGO&reg; bricks and holds a kosher scroll. Don&apos;t
          see the design you&apos;re after? You can{" "}
          <a href="/request" className="font-semibold text-brand-blue hover:underline">
            request a custom Brickable
          </a>{" "}
          instead.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
