import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Our Partners",
  description:
    "Meet the banks, government agencies, and institutions partnering with GTIDS to deliver financial inclusion and development services across rural India.",
  keywords: [
    "GTIDS partners",
    "Gram Tarang banking partners",
    "financial inclusion partners India",
    "bank mitra partnerships",
    "rural banking partners",
  ],
  alternates: { canonical: `${SITE_URL}/impact/partners` },
  openGraph: {
    title: "Our Partners | GTIDS — Gram Tarang",
    description:
      "Trusted banks, government agencies, and institutions working with GTIDS to bring financial services to rural India.",
    url: `${SITE_URL}/impact/partners`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Partners" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Partners | GTIDS",
    description: "Banks and institutions partnering with GTIDS for rural financial inclusion.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
