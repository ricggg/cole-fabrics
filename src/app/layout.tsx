import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cole Fabrics & Co. | Premium Tailoring Materials — Worldwide",
  description:
    "Premium tailoring fabrics, threads, tools & accessories. Worldwide sales & distribution from Chicago, Illinois. Trusted by tailors, designers & fashion houses globally.",
  keywords: [
    "tailoring materials",
    "fabrics wholesale",
    "sewing supplies",
    "tailoring fabrics",
    "fashion fabrics",
    "worldwide fabric distribution",
    "Cole Fabrics",
  ],
  openGraph: {
    title: "Cole Fabrics & Co. | Premium Tailoring Materials — Worldwide",
    description:
      "Premium tailoring fabrics, threads, tools & accessories. Worldwide sales & distribution from Chicago, Illinois.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}