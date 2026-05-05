const DEFAULT_SITE_URL = "https://ansalagunawardana.com";

function normalizeSiteUrl(url: string): string {
  return url.replace(/\/$/, "");
}

/**
 * Canonical site URL (no trailing slash). Used for sitemap, robots, and metadataBase.
 * Override with SITE_URL in `.env.local` or the host (e.g. Vercel) when needed; otherwise the default is used.
 */
export const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL?.trim() || DEFAULT_SITE_URL
);
