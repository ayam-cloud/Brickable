import Link from "next/link";
import { Wordmark } from "./Logo";

const NAV_LINKS = [
  { href: "/shop", label: "Shop" },
  { href: "/request", label: "Request a Brickable" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-black text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="shrink-0">
          <Wordmark className="text-xl sm:text-2xl" />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-semibold uppercase tracking-wide sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-brand-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/shop"
          className="rounded-full bg-brand-gold px-4 py-2 text-sm font-bold text-brand-black transition-transform hover:scale-105"
        >
          Shop Now
        </Link>
      </div>
      <nav className="flex items-center gap-4 overflow-x-auto border-t border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wide sm:hidden">
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} className="shrink-0 hover:text-brand-gold">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
