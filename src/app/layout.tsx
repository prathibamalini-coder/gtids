import type { Metadata } from 'next';
import "@/styles.css";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: "GTIDS — Financial Inclusion & Livelihoods for Rural India",
  description: "GTIDS drives last-mile financial inclusion and sustainable livelihoods across rural and tribal India. Operating across 15 states with 25,000+ villages.",
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
