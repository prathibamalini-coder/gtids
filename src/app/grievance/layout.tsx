import { Metadata } from "next";

const SITE_URL = "https://www.gramtarang.org";
const OG = `${SITE_URL}/assets/og-banner.png`;

export const metadata: Metadata = {
  title: "Raise a Grievance",
  description:
    "Submit a grievance to GTIDS confidentially. Your feedback helps us improve our financial inclusion and livelihood services across rural India.",
  keywords: ["GTIDS grievance", "Gram Tarang complaint", "raise grievance India", "feedback GTIDS"],
  alternates: { canonical: `${SITE_URL}/grievance` },
  openGraph: {
    title: "Raise a Grievance | GTIDS — Gram Tarang",
    description:
      "Your feedback helps us serve communities better. Raise a grievance with GTIDS securely and confidentially.",
    url: `${SITE_URL}/grievance`,
    images: [{ url: OG, width: 1200, height: 630, alt: "GTIDS Grievance" }],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grievance | GTIDS — Gram Tarang",
    description: "Submit a grievance to GTIDS confidentially and securely.",
    images: [OG],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
