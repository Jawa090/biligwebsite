import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesSection from "@/components/home/ServicesSection";
import SpecialitiesSection from "@/components/home/SpecialitiesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ProcessTabs from "@/components/home/ProcessTabs";
import USACoverage from "@/components/home/USACoverage";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Blog from "@/components/home/Blog";
import TechPartners from "@/components/home/TechPartners";
import CTABanner from "@/components/home/CTABanner";
import SEOHead from "@/components/common/SEOHead";

const Index = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Optimum Solution",
    url: origin,
    logo: `${origin}/1.png`,
    sameAs: []
  };
  
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Optimum Solution",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  
  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${origin}/`
      }
    ]
  };

  return (
    <Layout>
      <SEOHead
        title="Medical Billing & RCM Services | Optimum Solution"
        description="HIPAA-certified medical billing with 97%+ clean claim rate. Full RCM, coding, credentialing, denials & analytics for 100+ practices across all 50 states."
        keywords="medical billing, revenue cycle management, RCM, medical coding, denial management, credentialing, healthcare billing services, HIPAA"
        canonical={`${origin}/`}
        image="/1.png"
      >
        <script type="application/ld+json">{JSON.stringify(organizationLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsLd)}</script>
      </SEOHead>

      <Hero />
      <StatsBar />
      <AboutIntro />
      <ServicesSection />
      <SpecialitiesSection />
      <WhyChooseUs />
      <ProcessTabs />
      <HowItWorks />
      <USACoverage />
      <Testimonials />
      <FAQ />
      <Blog />
      <TechPartners />
      <CTABanner />
    </Layout>
  );
};

export default Index;
