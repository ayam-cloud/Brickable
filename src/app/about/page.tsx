import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Brickable",
  description: "The story behind Brickable's custom LEGO mezuzahs.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-black text-brand-black sm:text-4xl">About Us</h1>
      <p className="mt-6 leading-relaxed text-black/70">
        What began as a passion project designing buildable mezuzah kits has grown into a
        business dedicated to creating unique, kid friendly Judaica that families, businesses,
        schools, synagogues, and other organizations can enjoy. Every Brickable creation is
        designed to transform an everyday mitzvah into an interactive experience that people of
        all ages can build together.
      </p>

      <div id="contact" className="mt-14 rounded-2xl border border-black/10 bg-zinc-50 p-8">
        <h2 className="text-xl font-bold text-brand-black">Contact us</h2>
        <p className="mt-2 text-black/60">
          Questions about your Brickable Mezuzah? We&apos;d love to help!
        </p>
        <dl className="mt-6 space-y-3 text-sm">
          <div className="flex gap-2">
            <dt className="font-semibold text-brand-black">Instagram:</dt>
            <dd>
              <a
                href="https://instagram.com/Brickable_mezuzah"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline"
              >
                @Brickable_mezuzah
              </a>
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="font-semibold text-brand-black">Email:</dt>
            <dd>
              <a
                href="mailto:brickablemezuzah@gmail.com"
                className="text-brand-blue hover:underline"
              >
                brickablemezuzah@gmail.com
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
