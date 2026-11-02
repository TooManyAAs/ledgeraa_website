import seo from "@/config/seo-pages.json";

/**
 * Seo - per-page <title>, description, canonical and social tags.
 *
 * React 19 hoists these elements into <head> on the client. The same values
 * are written into each route's static HTML at build time by
 * scripts/build-pages.mjs, so crawlers that don't run JavaScript still see
 * them. Edit titles and descriptions in src/config/seo-pages.json only.
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
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
