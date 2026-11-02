/**
 * Post-build step for GitHub Pages.
 *
 * GitHub Pages only knows about files, so without this every route except "/"
 * was served through 404.html with an HTTP 404 status, and every page shared
 * one <title>. This writes one HTML file per route (e.g. dist/pricing.html,
 * which Pages serves at /pricing with a 200), each with its own title,
 * description, canonical, social tags and structured data, plus a noindexed
 * 404.html and a sitemap.xml generated from the same list.
 *
 * Source of truth: src/config/seo-pages.json. Runs after `vite build`.
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
    "Plain-English bookkeeping and Making Tax Digital app for UK sole traders.",
  offers: seo.offers.map((o) => ({
    "@type": "Offer",
    name: o.name,
    price: o.price,
    priceCurrency: "GBP",
  })),
};

function headFor({ title, description, url, schema = [], noindex = false }) {
  const tags = [
    `<title data-static-head>${esc(title)}</title>`,
    `<meta data-static-head name="description" content="${esc(description)}" />`,
    noindex
      ? `<meta data-static-head name="robots" content="noindex" />`
      : `<link data-static-head rel="canonical" href="${esc(url)}" />`,
    `<meta data-static-head property="og:site_name" content="${esc(seo.siteName)}" />`,
    `<meta data-static-head property="og:type" content="website" />`,
    `<meta data-static-head property="og:title" content="${esc(title)}" />`,
    `<meta data-static-head property="og:description" content="${esc(description)}" />`,
    url ? `<meta data-static-head property="og:url" content="${esc(url)}" />` : "",
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
  return tags.filter(Boolean).map((t) => `    ${t}`).join("\n");
}

function render(head) {
  if (!template.includes("</head>")) throw new Error("dist/index.html has no </head>");
  return template.replace("</head>", `${head}\n  </head>`);
}

function fileFor(path) {
  if (path === "/") return join(dist, "index.html");
  return join(dist, `${path.replace(/^\//, "")}.html`);
}

for (const page of seo.pages) {
  const url = page.path === "/" ? `${seo.siteUrl}/` : `${seo.siteUrl}${page.path}`;
  const out = fileFor(page.path);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(headFor({ ...page, url })));
}

writeFileSync(
  join(dist, "404.html"),
  render(headFor({ ...seo.notFound, noindex: true }))
);

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
if (process.argv.includes("--write-public-sitemap"))
  writeFileSync(join(root, "public/sitemap.xml"), sitemap);

console.log(`build-pages: wrote ${seo.pages.length} pages, 404.html and sitemap.xml`);
