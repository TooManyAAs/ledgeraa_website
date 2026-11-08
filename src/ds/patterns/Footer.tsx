import type { ReactNode } from "react";
import { ShieldCheck, ExternalLink } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@ds/cn";
import {
  SIGNUP_URL,
  SIGNIN_URL,
  HELLO_EMAIL,
  HMRC_SELF_ASSESSMENT_URL,
  FIND_ACCOUNTANT_URL,
} from "@/config/site";
import { LEGAL_PAGES } from "@/pages/legal/legalPages";

const PRODUCT_LINKS = [
  { href: "/#what-you-get", label: "Features" },
  { href: "/making-tax-digital", label: "Making Tax Digital" },
  { href: "/free-invoice-app", label: "Free invoice app" },
  { href: "/pricing", label: "Pricing" },
];

const HELP_LINKS = [
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Support" },
  { href: "/making-tax-digital/do-i-need-it", label: "Do I need MTD?" },
  { href: "/making-tax-digital/deadlines", label: "MTD deadlines" },
  { href: HMRC_SELF_ASSESSMENT_URL, label: "Understanding tax returns", ext: true },
  { href: FIND_ACCOUNTANT_URL, label: "Find a chartered accountant", ext: true },
];

const linkClass =
  "inline-flex items-center gap-1.5 text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]";

function FooterLink({
  href,
  label,
  ext,
}: {
  href: string;
  label: string;
  ext?: boolean;
}) {
  return (
    <a
      href={href}
      className={linkClass}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      {ext && <ExternalLink className="h-3.5 w-3.5" aria-hidden />}
    </a>
  );
}

function FooterColumn({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.06em] text-[var(--color-neutral-500)]">
        {heading}
      </h4>
      <ul className="mt-4 space-y-3 text-[15px]">{children}</ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer
      className={cn(
        "border-t border-[var(--color-neutral-200)]",
        "bg-[var(--color-canvas)]"
      )}
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-8 lg:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr_1fr_1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[26em] text-[15px] text-[var(--color-ink-muted)]">
              Plain-English bookkeeping for UK sole traders. Tax made as easy as
              it can be, so you can get on with your work. Free to start, paid
              plans from £4.99/mo.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-[13px] font-medium text-[var(--color-neutral-700)] ring-1 ring-[var(--color-neutral-200)]">
              <ShieldCheck
                className="h-4 w-4 text-[var(--color-accent)]"
                aria-hidden
              />
              Making Tax Digital: coming soon
            </div>
            <p className="mt-5 text-[13px] text-[var(--color-neutral-500)]">
              Built and run by two founders ·{" "}
              <a
                href={`mailto:${HELLO_EMAIL}`}
                className="text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
              >
                {HELLO_EMAIL}
              </a>
              <br />
              Your data stays in the EU.
            </p>
            <p className="mt-4 text-[12px] leading-relaxed text-[var(--color-neutral-500)]">
              Ledgeraa LTD is a private limited company registered in England and
              Wales (company number 17344886). Registered office: 167-169 Great
              Portland Street, 5th Floor, London, W1W 5PF.
            </p>
          </div>

          <FooterColumn heading="Product">
            {PRODUCT_LINKS.map((l) => (
              <li key={l.href}>
                <FooterLink {...l} />
              </li>
            ))}
            <li>
              <a href={SIGNIN_URL} className={linkClass}>
                Log in
              </a>
            </li>
            <li>
              <a
                href={SIGNUP_URL}
                className="font-medium text-[var(--color-primary-700)] hover:text-[var(--color-primary-800)]"
              >
                Start free
              </a>
            </li>
          </FooterColumn>

          <FooterColumn heading="Help & resources">
            {HELP_LINKS.map((l) => (
              <li key={l.href}>
                <FooterLink {...l} />
              </li>
            ))}
          </FooterColumn>

          <FooterColumn heading="Legal">
            {LEGAL_PAGES.map((l) => (
              <li key={l.href}>
                <FooterLink href={l.href} label={l.label} />
              </li>
            ))}
          </FooterColumn>
        </div>

        <p className="mt-12 max-w-[70em] text-[13px] leading-relaxed text-[var(--color-neutral-500)]">
          Ledgeraa is a bookkeeping app, and only that. It is not an accountancy
          or financial-advice service, and nothing here or in the app is
          financial, tax, or accountancy advice. The figures you enter and
          submit are your responsibility, and we cannot guarantee their
          accuracy. Any tax estimate in the app is a guide only, so always rely
          on the figure HMRC confirms after you submit. For advice about your
          own situation, speak to a qualified accountant. All images and videos
          on this site are for demonstrative purposes only, and your experience
          may differ.
        </p>

        <div className="mt-8 flex flex-col gap-3 border-t border-[var(--color-neutral-200)] pt-6 text-sm text-[var(--color-neutral-500)] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Ledgeraa Ltd</span>
          <a
            href="/sitemap.xml"
            className="text-[var(--color-neutral-500)] hover:text-[var(--color-ink-muted)]"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
}
