"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-zinc-100">
        <Image
          src={images[active]}
          alt={alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
          priority
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative h-16 w-16 overflow-hidden rounded-lg border-2 ${
                i === active ? "border-brand-gold" : "border-transparent"
              }`}
            >
              <Image src={src} alt={`${alt} angle ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
