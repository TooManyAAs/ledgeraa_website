/**
 * Post-build: writes one HTML file per route in src/config/seo-pages.json
 * (dist/pricing/index.html etc., each with its own head tags and JSON-LD) and
 * sitemap.xml, and adds the Content-Security-Policy meta tag to every page.
 * Build-time only: the CSP would block Vite's inline dev-server scripts.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const seo = JSON.parse(
  readFileSync(join(root, "src/config/seo-pages.json"), "utf8")
);
const template = readFileSync(join(dist, "index.html"), "utf8");

// Our static host can't send response headers, so this is the CSP. A meta CSP
// can't express frame-ancestors; see CLAUDE.md for the headers still missing.
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  "upgrade-insecure-requests",
].join("; ");

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const image = `${seo.siteUrl}${seo.shareImage}`;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: seo.siteName,
  url: `${seo.siteUrl}/`,
  logo: image,
  email: "hello@ledgeraa.com",
};

const software = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: seo.siteName,
  url: `${seo.siteUrl}/`,
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web browser",
  description:
    "Plain-English bookkeeping app for UK sole traders. Making Tax Digital submissions coming soon.",
  offers: seo.offers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    price: o.price,
    priceCurrency: "GBP",
  })),
};

function headFor({ title, description, url, schema = [] }) {
  const tags = [
    `<title data-static-head>${esc(title)}</title>`,
    `<meta data-static-head name="description" content="${esc(description)}" />`,
    `<link data-static-head rel="canonical" href="${esc(url)}" />`,
    `<meta data-static-head property="og:site_name" content="${esc(seo.siteName)}" />`,
    `<meta data-static-head property="og:type" content="website" />`,
    `<meta data-static-head property="og:title" content="${esc(title)}" />`,
    `<meta data-static-head property="og:description" content="${esc(description)}" />`,
    `<meta data-static-head property="og:url" content="${esc(url)}" />`,
    `<meta data-static-head property="og:image" content="${esc(image)}" />`,
    `<meta data-static-head name="twitter:card" content="summary_large_image" />`,
  ];
  for (const s of schema) {
    const data = s === "organization" ? organization : s === "software" ? software : null;
    if (data)
      tags.push(
        `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`
      );
  }
  return tags.map((t) => `    ${t}`).join("\n");
}

function render(head) {
  const charset = '<meta charset="UTF-8" />';
  if (!template.includes(charset) || !template.includes("</head>"))
    throw new Error("dist/index.html is missing <meta charset> or </head>");
  // The CSP goes before the module script Vite puts in <head>, so it governs it.
  return template
    .replace(charset, `${charset}\n    <meta http-equiv="Content-Security-Policy" content="${CSP}" />`)
    .replace("</head>", `${head}\n  </head>`);
}

// Directory-style output: the host serves /pricing from pricing/index.html.
function fileFor(path) {
  return join(dist, path.replace(/^\//, ""), "index.html");
}

for (const page of seo.pages) {
  const url = page.path === "/" ? `${seo.siteUrl}/` : `${seo.siteUrl}${page.path}`;
  const out = fileFor(page.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(headFor({ ...page, url })));
}

const sitemap = [
  `<?xml version="1.0" encoding="UTF-8"?>`,
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
  ...seo.pages.map((p) => {
    const loc = p.path === "/" ? `${seo.siteUrl}/` : `${seo.siteUrl}${p.path}`;
    return `  <url><loc>${loc}</loc><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`;
  }),
  `</urlset>`,
  ``,
].join("\n");
writeFileSync(join(dist, "sitemap.xml"), sitemap);

console.log(`build-pages: wrote ${seo.pages.length} pages and sitemap.xml`);
