import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import '$styles/globals.css';

import { MiniCart } from '$components/Minicart';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nordiska Galleriet - Frontend Test',
  description: 'E-commerce test site for Nordiska Galleriet',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body
      className={`text-emerald-50 bg-emerald-900 font-sans font-normal text-base ${inter.className} min-h-screen grid grid-rows-[auto,1fr,auto]`}
    >
      <header className="p-4 bg-emerald-950 flex justify-between">
        <h1>Nordiska Galleriet - Frontend Test</h1> <MiniCart />
      </header>
      <main className="p-4 bg-emerald-900">{children}</main>
      <footer className="p-4 bg-emerald-950">
        <Link href="/">🏠</Link>
      </footer>
    </body>
  </html>
);

export default RootLayout;
