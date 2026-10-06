import { Helmet } from "react-helmet-async";

// Confirmed real domain: https://www.pfoertsch.com — the new site should
// live at the ROOT of this domain. (The old WordPress site currently
// occupies /wordpress/ as a subpath — see deployment notes on that.)
const SITE_URL = "https://www.pfoertsch.com";
const SITE_NAME = "Prof. Waldemar Pfoertsch";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

/**
 * SEO — drop this at the top of every page component to set a unique,
 * page-specific title, meta description, canonical URL, and social
 * sharing (Open Graph / Twitter Card) tags.
 *
 * Usage:
 *   <SEO
 *     title="Publications"
 *     description="Browse the complete, always-current library of books..."
 *     path="/publications"
 *   />
 */
function SEO({ title, description, path = "/", image = DEFAULT_IMAGE, noindex = false }) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph (Facebook, LinkedIn, WhatsApp link previews, etc.) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
export { SITE_URL, SITE_NAME };
