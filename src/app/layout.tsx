import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BTOSTUDIO — Contracting & Logistics",
  description:
    "BTOSTUDIO is a Canadian contracting company. We bid on commercial and government contracts and work with trusted subcontractors to deliver.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
