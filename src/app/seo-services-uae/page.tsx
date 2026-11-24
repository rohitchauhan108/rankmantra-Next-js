import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import Footer from "@/components/ui/Footer";
import NavBar from "@/components/ui/NavBar";
import SeoOffer from "./SeoOffer";
import "./seo-offer.css";

/* RankMantra – UAE SEO offer page (AED 599). Prepared by SEO Team */

const sora = Sora({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-sora", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "700", "800"], variable: "--font-jakarta", display: "swap" });

const TITLE = "SEO Packages Dubai & UAE from AED 599/Month | RankMantra";
const DESCRIPTION =
  "AI-powered SEO in Dubai & UAE now AED 599/month (was AED 799). 15 target keywords, e-commerce SEO and dedicated support. Claim your free audit today.";
const URL = "https://rankmantra.com/seo-services-uae/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: "AI-powered SEO for UAE businesses, now AED 599/month (was AED 799). Limited offer. Claim your free audit.",
    url: URL,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "SEO Services Dubai & UAE",
      "serviceType": "Search engine optimisation",
      "areaServed": {
        "@type": "Country",
        "name": "United Arab Emirates"
      },
      "provider": {
        "@type": "Organization",
        "name": "RankMantra",
        "url": "https://rankmantra.com/",
        "email": "info@rankmantra.com",
        "telephone": "+91 8979249912"
      },
      "offers": {
        "@type": "Offer",
        "name": "AI SEO Starter",
        "price": "599",
        "priceCurrency": "AED",
        "url": URL
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What does the AED 599 SEO package include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Starter plan covers 15 target keywords with AI-assisted SEO: keyword research, on-page optimisation, technical fixes and a monthly ranking report."
          }
        },
        {
          "@type": "Question",
          "name": "How fast will my website rank in the UAE?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most sites see early movement on lower-competition keywords within 6–8 weeks. Competitive Dubai keywords usually take 3–6 months. We report progress every month."
          }
        },
        {
          "@type": "Question",
          "name": "What is AI SEO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use AI tools to find keyword gaps, cluster search intent and draft optimised content faster, then our SEO team reviews every change so your pages read well for people, Google and AI answer engines."
          }
        },
        {
          "@type": "Question",
          "name": "Do you work with e-commerce stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Growth plan is built for online stores on Shopify, WooCommerce and other platforms, with product and category page optimisation and a dedicated support contact."
          }
        }
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <NavBar />
      <main className={`rm-page ${sora.variable} ${jakarta.variable}`}>
        <SeoOffer />
      </main>
      <Footer />
    </>
  );
}
