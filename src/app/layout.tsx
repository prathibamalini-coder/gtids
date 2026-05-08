import type { Metadata } from 'next';
import Script from 'next/script';
import "@/styles.css";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const SITE_URL = "https://www.gramtarang.org";
const OG_IMAGE = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "GTIDS — Gram Tarang Inclusive Development Services",
    template: "%s | GTIDS — Gram Tarang",
  },
  description:
    "GTIDS (Gram Tarang Inclusive Development Services) drives last-mile financial inclusion, DBT services, and sustainable livelihoods across rural and tribal India. Operational in 15 states, 25,000+ villages.",

  keywords: [
    "GTIDS",
    "Gram Tarang",
    "financial inclusion",
    "rural India",
    "bank mitras",
    "DBT services",
    "livelihood",
    "tribal development",
    "Visakhapatnam",
    "inclusive development",
    "banking services rural",
    "CSP banking",
    "SHG",
    "microfinance India",
    "gram tarang inclusive development",
  ],

  authors: [{ name: "GTIDS", url: SITE_URL }],
  creator: "GTIDS",
  publisher: "Gram Tarang Inclusive Development Services",

  /* ── Open Graph (Facebook, WhatsApp, LinkedIn) ── */
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "GTIDS — Gram Tarang Inclusive Development Services",
    title: "GTIDS — Financial Inclusion & Livelihoods for Rural India",
    description:
      "Empowering 25,000+ villages across 15 states with banking, DBT, insurance, and livelihood services. GTIDS bridges the financial gap for rural and tribal India.",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "GTIDS — Gram Tarang Inclusive Development Services",
        type: "image/png",
      },
    ],
  },

  /* ── Twitter / X Card ── */
  twitter: {
    card: "summary_large_image",
    site: "@GramTarang",
    creator: "@GramTarang",
    title: "GTIDS — Financial Inclusion & Livelihoods for Rural India",
    description:
      "Empowering 25,000+ villages across 15 states with banking, DBT, insurance, and livelihood services.",
    images: [
      {
        url: OG_IMAGE,
        alt: "GTIDS — Gram Tarang Inclusive Development Services",
      },
    ],
  },

  /* ── Robots ── */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  /* ── Verification placeholders (fill once you have codes) ── */
  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_CODE",
    // yandex: "YOUR_YANDEX_CODE",
  },

  /* ── Alternate languages ── */
  alternates: {
    canonical: SITE_URL,
  },

  /* ── App / PWA ── */
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/assets/logo.png", type: "image/png" },
    ],
    apple: "/assets/logo.png",
    shortcut: "/assets/logo.png",
  },

  /* ── App metadata ── */
  applicationName: "GTIDS",
  category: "nonprofit",
};

/* ── Organisation JSON-LD structured data ── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NonprofitOrganization",
  name: "Gram Tarang Inclusive Development Services",
  alternateName: "GTIDS",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/logo.png`,
  image: OG_IMAGE,
  description:
    "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India. Operating across 15 states with 25,000+ villages.",
  foundingLocation: {
    "@type": "Place",
    name: "Visakhapatnam, Andhra Pradesh, India",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Visakhapatnam",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "info@gramtarang.org",
    contactType: "customer support",
    areaServed: "IN",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/gram-tarang",
    "https://www.facebook.com/gramtarang",
  ],
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  numberOfEmployees: { "@type": "QuantitativeValue", value: 500 },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "GTIDS — Gram Tarang Inclusive Development Services",
  description:
    "Financial inclusion, DBT, and livelihood services for rural and tribal India.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/services`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* WhatsApp uses og:image — ensuring explicit og:image:secure_url helps */}
        <meta property="og:image:secure_url" content={OG_IMAGE} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="GTIDS — Gram Tarang Inclusive Development Services" />

        {/* WhatsApp & iMessage specific */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:locale:alternate" content="hi_IN" />
        <meta property="og:locale:alternate" content="te_IN" />

        {/* LinkedIn specific */}
        <meta name="linkedin:owner" content="GTIDS" />

        {/* Mobile web-app */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GTIDS" />

        {/* Theme colors */}
        <meta name="theme-color" content="#1a4a3a" />
        <meta name="msapplication-TileColor" content="#1a4a3a" />

        {/* Structured data */}
        <Script
          id="schema-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="schema-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col" suppressHydrationWarning>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
