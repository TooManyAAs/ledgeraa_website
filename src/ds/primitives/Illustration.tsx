import { cn } from "@ds/cn";

/** Decorative spot art from /public/illustrations; hidden from screen readers unless given an `alt`. */
export function Illustration({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    <img
      src={src}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      loading="lazy"
      className={cn(
        "reveal-fade w-full max-w-full select-none object-contain",
        className
      )}
    />
  );
}
