import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Organogram — Organizational Structure",
  description:
    "Explore the clear organizational hierarchy of GTIDS — from Managing Director to field-level Bank Mitras — structured for accountability and last-mile delivery.",
  keywords: ["GTIDS organogram", "Gram Tarang structure", "organizational chart India", "GTIDS hierarchy"],
  alternates: { canonical: `${SITE_URL}/organization/organogram` },
  openGraph: {
    title: "Organogram | GTIDS — Gram Tarang Structure",
    description:
      "A transparent organizational structure from Managing Director to field-level Bank Mitras across 15 states.",
    url: `${SITE_URL}/organization/organogram`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Organogram" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Organogram | GTIDS",
    description: "Explore the clear organizational structure of GTIDS.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
