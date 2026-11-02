import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@ds/primitives";
import { Logo } from "./Logo";
import { cn } from "@ds/cn";
import { NAV_LINKS, SIGNIN_URL } from "@/config/site";

const links = NAV_LINKS;

/**
 * Nav - sticky top navigation. Mobile uses a full-screen takeover menu
 * (not a drawer) per the wireframe rule. Desktop is a single horizontal
 * row with the CTA on the right.
 */
export function Nav({
  current,
  ctaHref = SIGNIN_URL,
}: {
  /** The current page's path, e.g. "/pricing". Used to underline the active link. */
  current?: string;
  ctaHref?: string;
}) {
  const [open, setOpen] = useState(false);

  // Lock scroll while the mobile menu is open.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <nav
        aria-label="Primary"
        className={cn(
          "sticky top-0 z-40",
          "bg-[color:var(--color-canvas)]/85 backdrop-blur-md",
          "border-b border-[var(--color-neutral-100)]"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10">
          <div className="flex h-[68px] items-center justify-between md:h-[76px]">
            <a href="/" className="no-underline hover:no-underline">
              <Logo />
            </a>

            <ul className="hidden items-center gap-8 md:flex">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className={cn(
                      "relative py-2 text-[15px] font-medium",
                      "no-underline hover:no-underline",
                      current === href
                        ? "text-[var(--color-ink)]"
                        : "text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
                    )}
                  >
                    {label}
                    {current === href && (
                      <span
                        aria-hidden
                        className="absolute -bottom-px left-0 right-0 h-[2px] rounded-full bg-[var(--color-primary-700)]"
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2">
              <div className="hidden md:block">
                <Button
                  href={ctaHref}
                  variant="primary"
                  size="sm"
                  trailing={<ArrowRight className="h-4 w-4" aria-hidden />}
                >
                  Log In / Sign Up
                </Button>
              </div>
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen(true)}
                className="grid h-11 w-11 place-items-center rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-neutral-50)] md:hidden"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu - full screen takeover */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-50 md:hidden",
          "bg-[var(--color-canvas)]",
          "transition-opacity duration-[var(--duration-base)]",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col px-6 pb-6 pt-5">
          <div className="flex items-center justify-between">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-11 w-11 place-items-center rounded-lg text-[var(--color-ink)] hover:bg-[var(--color-neutral-50)]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-6 flex flex-col">
            {links.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between border-b border-[var(--color-neutral-100)]",
                    "py-5 text-2xl font-bold tracking-[-0.025em]",
                    "text-[var(--color-ink)] no-underline hover:no-underline",
                    "hover:text-[var(--color-primary-700)]"
                  )}
                >
                  {label}
                  <ArrowRight className="h-5 w-5 text-[var(--color-neutral-400)]" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6">
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              block
              trailing={<ArrowRight className="h-5 w-5" aria-hidden />}
            >
              Log In / Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
