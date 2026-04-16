// SEO utility functions and configurations

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  type?: string;
  noindex?: boolean;
}

export const SITE_CONFIG = {
  name: "Optimum Solution",
  url: typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com",
  defaultImage: "/1.png",
  twitterHandle: "@optimumsolution",
};

// Ensure title is max 70 characters
export const formatTitle = (title: string, maxLength = 70): string => {
  if (title.length <= maxLength) return title;
  return title.substring(0, maxLength - 3) + "...";
};

// Ensure description is max 170 characters
export const formatDescription = (description: string, maxLength = 170): string => {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + "...";
};

// Generate canonical URL with trailing slash
export const getCanonicalUrl = (path: string): string => {
  const baseUrl = SITE_CONFIG.url;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const pathWithSlash = cleanPath.endsWith("/") ? cleanPath : `${cleanPath}/`;
  return `${baseUrl}${pathWithSlash}`;
};

// Get full image URL
export const getImageUrl = (imagePath: string): string => {
  if (imagePath.startsWith("http")) return imagePath;
  return `${SITE_CONFIG.url}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;
};

// All routes for sitemap generation
export const ROUTES = [
  { path: "/", priority: 1.0, changefreq: "daily" },
  { path: "/about/", priority: 0.8, changefreq: "monthly" },
  { path: "/services/", priority: 0.9, changefreq: "weekly" },
  { path: "/specialities/", priority: 0.9, changefreq: "weekly" },
  { path: "/contact/", priority: 0.8, changefreq: "monthly" },
  { path: "/blog/", priority: 0.7, changefreq: "daily" },
  
  // Services
  { path: "/services/medical-billing/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/medical-coding/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/revenue-cycle-management/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/medical-credentialing/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/denial-management/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/medical-audit/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/virtual-assistant/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/analytics-reporting/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/dental-services/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/business-development/", priority: 0.8, changefreq: "weekly" },
  { path: "/services/digital-marketing/", priority: 0.8, changefreq: "weekly" },
  
  // Specialities
  { path: "/specialities/cardiology/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/neurology/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/internal-medicine/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/pediatrics/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/orthopedics/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/dermatology/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/laboratory/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/physical-therapy/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/family-medicine/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/wound-care/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/home-health/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/geriatrics-medicine/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/rheumatology/", priority: 0.7, changefreq: "weekly" },
  { path: "/specialities/mental-health/", priority: 0.7, changefreq: "weekly" },
];
