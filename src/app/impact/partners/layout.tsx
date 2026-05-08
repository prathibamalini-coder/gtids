import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Partners",
  description: "Meet the trusted banking, government, and institutional partners that help GTIDS deliver inclusive development across India.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
