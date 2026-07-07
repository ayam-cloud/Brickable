import Image from "next/image";
import { assetExists } from "@/lib/publicAssets";

const LOGO_WORDMARK_PATH = "/images/brand/logo-wordmark.png";
const LOGO_ICON_PATH = "/images/brand/logo-icon.png";

const LETTER_COLORS = [
  "text-brand-red",
  "text-brand-gold",
  "text-brand-teal",
  "text-brand-blue",
  "text-brand-purple",
  "text-brand-green",
  "text-brand-orange",
  "text-brand-pink",
  "text-brand-teal",
];

export function Wordmark({ className = "" }: { className?: string }) {
  const letters = "BRICKABLE".split("");
  return (
    <span
      className={`inline-flex font-black tracking-tight italic ${className}`}
      aria-label="Brickable"
    >
      {letters.map((letter, i) => (
        <span key={i} className={LETTER_COLORS[i % LETTER_COLORS.length]}>
          {letter}
        </span>
      ))}
    </span>
  );
}

export function StarBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      aria-hidden="true"
    >
      <polygon points="50,5 88.97,72.5 11.03,72.5" />
      <polygon points="50,95 11.03,27.5 88.97,27.5" />
    </svg>
  );
}

type LogoSize = "sm" | "lg";

const WORDMARK_SIZE_CLASSES: Record<LogoSize, string> = {
  sm: "h-6",
  lg: "h-8 sm:h-9",
};

const WORDMARK_TEXT_CLASSES: Record<LogoSize, string> = {
  sm: "text-lg",
  lg: "text-xl sm:text-2xl",
};

/**
 * Renders the real logo file at public/images/brand/logo-wordmark.png once it exists,
 * falling back to the CSS-built colored text in the meantime.
 */
export function BrandWordmark({ size = "lg" }: { size?: LogoSize }) {
  if (assetExists(LOGO_WORDMARK_PATH)) {
    return (
      <Image
        src={LOGO_WORDMARK_PATH}
        alt="Brickable"
        width={480}
        height={120}
        className={`w-auto ${WORDMARK_SIZE_CLASSES[size]}`}
        priority={size === "lg"}
      />
    );
  }
  return <Wordmark className={WORDMARK_TEXT_CLASSES[size]} />;
}

/**
 * Renders the real icon file at public/images/brand/logo-icon.png once it exists,
 * falling back to the line-art Star of David badge in the meantime.
 */
export function BrandIcon({ className = "h-6 w-6" }: { className?: string }) {
  if (assetExists(LOGO_ICON_PATH)) {
    return (
      <Image
        src={LOGO_ICON_PATH}
        alt="Brickable"
        width={64}
        height={64}
        className={`${className} object-contain`}
      />
    );
  }
  return <StarBadge className={`${className} text-brand-gold`} />;
}
