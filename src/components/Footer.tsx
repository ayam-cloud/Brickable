import Link from "next/link";
import { StarBadge, Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-brand-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <Wordmark className="text-lg" />
          <div className="mt-3 flex items-center gap-2 text-white/60">
            <StarBadge className="h-6 w-6 text-brand-gold" />
            <p className="text-sm">Custom LEGO&reg; Judaica, built by hand.</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Shop</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/shop" className="hover:text-white">All Mezuzahs</Link></li>
            <li><Link href="/request" className="hover:text-white">Request a Custom Brickable</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/about#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-gold">Get in touch</h3>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li>
              <a href="mailto:brickablemezuzah@gmail.com" className="hover:text-white">
                brickablemezuzah@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/Brickable_mezuzah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                @Brickable_mezuzah
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-white/40 sm:px-6">
        &copy; {new Date().getFullYear()} Brickable. Built with genuine LEGO&reg; bricks. Brickable
        is not affiliated with or endorsed by the LEGO Group.
      </div>
    </footer>
  );
}
