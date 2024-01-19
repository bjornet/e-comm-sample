import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "$styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nordiska Galleriet - Frontend Test",
  description: "E-commerce test site for Nordiska Galleriet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
