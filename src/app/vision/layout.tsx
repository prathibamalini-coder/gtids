import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Vision & Mission",
  description:
    "The vision and mission of GTIDS — to eradicate financial exclusion and create sustainable livelihoods in every rural and tribal corner of India.",
  keywords: ["GTIDS vision", "Gram Tarang mission", "financial inclusion vision", "rural development goals India"],
  alternates: { canonical: `${SITE_URL}/vision` },
  openGraph: {
    title: "Our Vision & Mission | GTIDS — Gram Tarang",
    description:
      "GTIDS envisions a financially inclusive India — empowering rural communities through banking, insurance, and livelihood services.",
    url: `${SITE_URL}/vision`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Vision & Mission" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision & Mission | GTIDS",
    description: "Discover the vision and mission driving GTIDS to empower rural India.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
