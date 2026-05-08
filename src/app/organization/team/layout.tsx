import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Get to know the dedicated team behind GTIDS, working tirelessly on the ground to empower rural communities.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
