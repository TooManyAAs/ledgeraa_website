import seo from "@/config/seo-pages.json";

/**
 * Per-page head tags (React 19 hoists them into <head>). build-pages.mjs writes
 * the same values into each static HTML file. Edit them in seo-pages.json.
 */
export function Seo({ path }: { path?: string }) {
  const page = seo.pages.find((p) => p.path === path);
  const title = page?.title ?? seo.notFound.title;
  const description = page?.description ?? seo.notFound.description;
  const url = page ? `${seo.siteUrl}${page.path}` : undefined;
  const image = `${seo.siteUrl}${seo.shareImage}`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      {url ? (
        <link rel="canonical" href={url} />
      ) : (
        <meta name="robots" content="noindex" />
      )}
      <meta property="og:site_name" content={seo.siteName} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={image} />
    </>
  );
}
