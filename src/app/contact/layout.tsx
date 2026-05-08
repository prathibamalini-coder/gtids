import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with GTIDS. Whether you are a partner, beneficiary, or looking to collaborate, we'd love to hear from you.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
