
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dason Buildcom | Construction & Infrastructure",
  description:
    "Dason Buildcom — Construction, infrastructure, civil engineering, road works and turnkey project solutions.",
  keywords: [
    "Dason Buildcom",
    "Construction Company Maharashtra",
    "Road Construction",
    "Civil Engineering",
    "Infrastructure Development",
  ],
  authors: [{ name: "Dason Buildcom" }],
  openGraph: {
    title: "Dason Buildcom | Construction & Infrastructure",
    description:
      "Building strong foundations for tomorrow through construction, infrastructure and engineering.",
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