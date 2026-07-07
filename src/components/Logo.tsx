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
