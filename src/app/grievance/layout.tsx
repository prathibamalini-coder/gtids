import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Raise a Grievance",
  description: "Your feedback helps us serve communities better. Raise a grievance with GTIDS securely and confidentially.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
