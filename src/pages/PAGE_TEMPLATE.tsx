/**
 * SEO-Optimized Page Template
 * 
 * Copy this template when creating new pages to ensure SEO compliance
 */

import Layout from "@/components/layout/Layout";
import SEOHead from "@/components/common/SEOHead";

const PageName = () => {
  return (
    <Layout>
      {/* SEO Meta Tags - REQUIRED */}
      <SEOHead
        title="Page Title Here (Max 70 Characters)" // Include focus keyword
        description="Page description with focus keywords here. Make it compelling and under 170 characters to encourage clicks." // Include focus keyword
        keywords="keyword1, keyword2, keyword3, focus keyword" // Comma-separated keywords
        canonical={typeof window !== "undefined" ? `${window.location.origin}/page-url/` : undefined} // Must end with /
        image="/image.png" // Optional: custom image for social sharing
      />

      {/* Hero Section with H1 - REQUIRED: Only ONE H1 per page */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Main Page Heading (H1) - Include Focus Keyword
          </h1>
          <p className="text-lg text-muted-foreground">
            Introductory paragraph with relevant keywords naturally included.
          </p>
        </div>
      </section>

      {/* Content Sections - Use H2, H3, etc. (NOT H1) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Section Heading (H2)</h2>
          <p className="text-muted-foreground mb-6">
            Content goes here...
          </p>

          {/* Images with Alt Tags - REQUIRED */}
          <img
            src="https://example.com/image.jpg"
            alt="Descriptive alt text that explains what's in the image - include keywords naturally"
            className="w-full h-auto rounded-lg"
          />

          <h3 className="text-2xl font-bold mt-8 mb-4">Subsection (H3)</h3>
          <p className="text-muted-foreground">
            More content...
          </p>
        </div>
      </section>

      {/* Additional sections as needed */}
    </Layout>
  );
};

export default PageName;

/**
 * CHECKLIST BEFORE PUBLISHING:
 * 
 * ✅ SEOHead component added with all required props
 * ✅ Title is max 70 characters and includes focus keyword
 * ✅ Description is max 170 characters and includes focus keyword
 * ✅ Keywords are relevant and naturally used in content
 * ✅ Canonical URL ends with trailing slash (/)
 * ✅ Route in App.tsx ends with trailing slash (/)
 * ✅ Exactly ONE H1 tag on the page
 * ✅ All images have descriptive alt attributes
 * ✅ Page added to ROUTES array in src/utils/seo.ts
 * ✅ Run: npm run generate:sitemap
 * ✅ Test page in browser
 * ✅ Verify meta tags in browser DevTools
 */
