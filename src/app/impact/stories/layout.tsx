import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories",
  description: "Read the success stories of the individuals and communities whose lives have been transformed by GTIDS initiatives.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
