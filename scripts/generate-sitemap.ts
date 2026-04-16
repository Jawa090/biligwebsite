import { writeFileSync } from "fs";
import { ROUTES } from "../src/utils/seo";

const SITE_URL = "https://optimumsolution.com";

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${ROUTES.map(
  (route) => `  <url>
    <loc>${SITE_URL}${route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
).join("\n")}
</urlset>`;

  writeFileSync("public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated successfully at public/sitemap.xml");
};

generateSitemap();
