import type { Metadata } from "next";
import { RequestForm } from "./RequestForm";

export const metadata: Metadata = {
  title: "Request a Custom Brickable | Brickable",
  description:
    "Request a custom LEGO mezuzah tailored to you or your business — see examples built for local Jewish businesses.",
};

const SHOWCASE = [
  {
    name: "Smash House",
    blurb:
      "A pixel-brick take on Smash House's neon graffiti gorilla mascot, matching their New York streetwear-burger aesthetic.",
    gradient: "from-fuchsia-600 to-amber-400",
  },
  {
    name: "Holy Schnitzel",
    blurb:
      "An orange, black, and green build echoing Holy Schnitzel's storefront sign and logo colors.",
    gradient: "from-orange-500 to-emerald-600",
  },
];

export default function RequestPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6">
      <div className="max-w-2xl">
        <p className="text-sm font-bold uppercase tracking-widest text-brand-gold">
          Custom Brickables
        </p>
        <h1 className="mt-2 text-3xl font-black text-brand-black sm:text-4xl">
          Request a Brickable made for you
        </h1>
        <p className="mt-3 text-black/60">
          Want a mezuzah that doesn&apos;t exist yet? We design custom builds for families,
          simchas, schools, synagogues — and local Jewish businesses who want a piece that matches
          their brand. Tell us your idea below and we&apos;ll follow up with a quote.
        </p>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold text-brand-black">
          Built for local businesses
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-black/60">
          Here are two examples we&apos;ve already designed for local Jewish businesses — a
          preview of what&apos;s possible for yours.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {SHOWCASE.map((item) => (
            <div
              key={item.name}
              className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm"
            >
              <div
                className={`flex h-40 items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >
                <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  Custom build photo coming soon
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-brand-black">{item.name}</h3>
                <p className="mt-2 text-sm text-black/60">{item.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-2xl border border-black/10 bg-zinc-50 p-6 sm:p-10">
        <h2 className="text-xl font-bold text-brand-black">Tell us about your Brickable</h2>
        <p className="mt-2 text-sm text-black/60">
          Custom builds are quoted individually based on complexity. We&apos;ll reply by email
          with pricing and timeline.
        </p>
        <div className="mt-6">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
