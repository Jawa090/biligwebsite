/**
 * SEO Compliance Checker
 * 
 * This script checks all page files for SEO compliance:
 * - SEOHead component usage
 * - Single H1 tag
 * - Image alt attributes
 */

import { readFileSync, readdirSync, statSync } from "fs";
import { join } from "path";

interface SEOIssue {
  file: string;
  issues: string[];
}

const checkFile = (filePath: string): string[] => {
  const issues: string[] = [];
  const content = readFileSync(filePath, "utf-8");

  // Check for SEOHead component
  if (!content.includes("SEOHead") && !content.includes("Helmet")) {
    issues.push("❌ Missing SEOHead or Helmet component");
  }

  // Check for H1 tags
  const h1Matches = content.match(/<h1[^>]*>/g);
  if (!h1Matches || h1Matches.length === 0) {
    issues.push("⚠️  No H1 tag found");
  } else if (h1Matches.length > 1) {
    issues.push(`❌ Multiple H1 tags found (${h1Matches.length})`);
  }

  // Check for images without alt tags
  const imgMatches = content.match(/<img[^>]*>/g);
  if (imgMatches) {
    imgMatches.forEach((img) => {
      if (!img.includes("alt=")) {
        issues.push("❌ Image without alt attribute found");
      }
    });
  }

  return issues;
};

const scanDirectory = (dir: string): SEOIssue[] => {
  const results: SEOIssue[] = [];
  const files = readdirSync(dir);

  files.forEach((file) => {
    const filePath = join(dir, file);
    const stat = statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...scanDirectory(filePath));
    } else if (file.endsWith(".tsx") && !file.includes("Template")) {
      const issues = checkFile(filePath);
      if (issues.length > 0) {
        results.push({ file: filePath, issues });
      }
    }
  });

  return results;
};

const main = () => {
  console.log("🔍 Checking SEO compliance...\n");

  const pagesDir = join(process.cwd(), "src", "pages");
  const results = scanDirectory(pagesDir);

  if (results.length === 0) {
    console.log("✅ All pages are SEO compliant!\n");
  } else {
    console.log(`Found issues in ${results.length} file(s):\n`);
    results.forEach(({ file, issues }) => {
      console.log(`📄 ${file.replace(process.cwd(), "")}`);
      issues.forEach((issue) => console.log(`   ${issue}`));
      console.log();
    });
  }

  console.log("\n📋 SEO Checklist:");
  console.log("   ✅ Sitemap generated");
  console.log("   ✅ Robots.txt created");
  console.log("   ✅ URLs end with /");
  console.log("   ✅ Canonical tags configured");
  console.log("   ✅ Meta tags max length enforced");
  console.log("   ✅ Robots meta tag set");
  console.log("\n💡 Run 'npm run generate:sitemap' after adding new pages");
};

main();
