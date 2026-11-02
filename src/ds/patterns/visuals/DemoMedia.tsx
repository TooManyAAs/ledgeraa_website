import { cn } from "@ds/cn";

/**
 * DemoMedia - a real screen recording or screenshot of the app, in a clean
 * browser-style frame. Videos autoplay muted on loop; images are plain <img>.
 * The "for demonstrative purposes only" disclaimer lives once in the footer.
 *
 * Replaces the hand-built *Mock components where we have real footage.
 */
export function DemoMedia({
  src,
  alt,
  className,
  poster,
}: {
  /** Path under /public. .mp4/.webm render as video; anything else as image. */
  src: string;
  /** Required for images and as video fallback/label. */
  alt: string;
  className?: string;
  poster?: string;
}) {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  return (
    <div className={cn("w-full", className)}>
      {/* Browser-style frame: a thin chrome bar + the media. */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-[var(--color-neutral-200)]">
        <div className="flex items-center gap-1.5 border-b border-[var(--color-neutral-100)] bg-[var(--color-canvas-soft)] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neutral-300)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neutral-300)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-neutral-300)]" />
        </div>
        {isVideo ? (
          <video
            className="block w-full"
            src={src}
            poster={poster}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={alt}
          />
        ) : (
          <img className="block w-full" src={src} alt={alt} loading="lazy" />
        )}
      </div>
    </div>
  );
}
