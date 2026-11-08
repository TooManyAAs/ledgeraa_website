import { cn } from "@ds/cn";

/** App logo mark (/public/logo-mark.png) + text wordmark. */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-sans font-bold tracking-[-0.02em] text-[18px] text-[var(--color-ink)]",
        className
      )}
    >
      <img
        src="/logo-mark.png"
        alt=""
        aria-hidden
        className="h-8 w-8 shrink-0 rounded-[22%] object-contain"
        width={40}
        height={40}
      />
      <span>Ledgeraa</span>
    </span>
  );
}
