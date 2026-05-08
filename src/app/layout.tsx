import type { Metadata } from 'next';
import "@/styles.css";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gramtarang.org"),
  title: {
    default: "GTIDS — Financial Inclusion & Livelihoods for Rural India",
    template: "%s | GTIDS",
  },
  description:
    "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India. Operating across 15 states with 25,000+ villages.",
  openGraph: {
    title: "GTIDS — Financial Inclusion & Livelihoods",
    description:
      "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India.",
    url: "https://www.gramtarang.org",
    siteName: "GTIDS",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 600,
        alt: "GTIDS Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GTIDS — Financial Inclusion & Livelihoods",
    description:
      "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India.",
    images: ["/assets/logo.png"],
  },
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
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
