import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatPrice, getProductBySlug, products, resolveProductImages } from "@/lib/products";
import { BuyButton } from "./BuyButton";
import { ProductGallery } from "./ProductGallery";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Brickable`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const images = resolveProductImages(product);

  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="grid gap-10 md:grid-cols-2">
        {images.length > 0 ? (
          <ProductGallery images={images} alt={product.name} />
        ) : (
          <div
            className={`flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br ${product.gradient}`}
          >
            <span className="rounded-full bg-black/20 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              Product photo coming soon
            </span>
          </div>
        )}
        <div>
          <h1 className="text-3xl font-black text-brand-black sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-lg text-black/60">{product.tagline}</p>
          <p className="mt-6 text-2xl font-black text-brand-black">
            {formatPrice(product.priceCents)}
          </p>
          <p className="mt-6 leading-relaxed text-black/70">{product.description}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-black/10 py-6 text-sm">
            <div>
              <dt className="text-black/50">Pieces</dt>
              <dd className="font-bold text-brand-black">{product.pieceCount}</dd>
            </div>
            <div>
              <dt className="text-black/50">Weight</dt>
              <dd className="font-bold text-brand-black">{product.weightGrams}g</dd>
            </div>
            <div>
              <dt className="text-black/50">Ages</dt>
              <dd className="font-bold text-brand-black">{product.minAge}+</dd>
            </div>
          </dl>
          <p className="mt-4 text-xs text-black/40">
            Choking hazard — small parts. Not intended for children under {product.minAge}.
          </p>

          <div className="mt-8">
            <BuyButton slug={product.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
