import { Helmet } from "react-helmet-async";
import { SEOConfig, SITE_CONFIG, formatTitle, formatDescription, getCanonicalUrl, getImageUrl } from "@/utils/seo";

interface SEOHeadProps extends SEOConfig {
  children?: React.ReactNode;
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  image,
  type = "website",
  noindex = false,
  children,
}: SEOHeadProps) => {
  const formattedTitle = formatTitle(title);
  const formattedDescription = formatDescription(description);
  const canonicalUrl = canonical || getCanonicalUrl(window.location.pathname);
  const imageUrl = getImageUrl(image || SITE_CONFIG.defaultImage);
  const robotsContent = noindex ? "noindex,nofollow" : "index,follow,max-image-preview:large";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{formattedTitle}</title>
      <meta name="description" content={formattedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robotsContent} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={formattedDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={formattedDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {SITE_CONFIG.twitterHandle && (
        <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      )}

      {/* Additional custom tags */}
      {children}
    </Helmet>
  );
};

export default SEOHead;
