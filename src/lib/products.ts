export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  priceCents: number;
  weightGrams: number;
  pieceCount: number;
  minAge: number;
  accent: string;
  gradient: string;
};

export const products: Product[] = [
  {
    slug: "beach",
    name: "Beach Mezuzah",
    tagline: "Waves, sand, and sunshine at your doorway",
    description:
      "Bring the calm of the coast to your doorway with the Beach Mezuzah. Built from real LEGO® bricks, this design features soft ocean colors and a playful seaside vibe that captures the feeling of waves, sand, and sunshine. It's the perfect way to blend creativity with tradition, adding a touch of coastal charm to any home. Holds a kosher scroll securely inside and mounts easily to your doorframe — a reminder that peace and faith can always be found by the sea.",
    priceCents: 2500,
    weightGrams: 115,
    pieceCount: 97,
    minAge: 3,
    accent: "#2AA9C2",
    gradient: "from-sky-400 to-amber-200",
  },
  {
    slug: "rocket",
    name: "Rocket Mezuzah",
    tagline: "Blast off with tradition",
    description:
      "Blast off with tradition! The Rocket Mezuzah combines faith and creativity in one fun design. Built from real LEGO® bricks, this colorful mezuzah adds a playful touch to any doorway while holding a kosher scroll inside. Perfect for kids, space lovers, or anyone who wants to bring a little imagination to their home. Easy to mount and made to last — it's a mezuzah that truly takes your mitzvahs to new heights.",
    priceCents: 2500,
    weightGrams: 115,
    pieceCount: 97,
    minAge: 3,
    accent: "#7C4DFF",
    gradient: "from-indigo-900 to-fuchsia-700",
  },
  {
    slug: "penguin",
    name: "Penguin Mezuzah",
    tagline: "A cool, playful twist on tradition",
    description:
      "Add a touch of charm to your doorway with the Penguin Mezuzah! Built from genuine LEGO® bricks, this adorable design features a black-and-white penguin standing tall to guard your home with warmth and personality. Perfect for kids' rooms, animal lovers, or anyone who enjoys a playful twist on tradition. It securely holds a kosher scroll and mounts easily to any doorframe — a fun way to keep faith cool and creative all year round.",
    priceCents: 2500,
    weightGrams: 115,
    pieceCount: 97,
    minAge: 3,
    accent: "#1E3A5F",
    gradient: "from-slate-700 to-sky-300",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
