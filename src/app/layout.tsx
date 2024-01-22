import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';

import { Header } from '$components/Header/Header';
import { ProductsProvider } from '$context/products/productsContext';
import { CartProvider } from '$context/cart/cartContext';

import '$styles/globals.css';

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
      className={`${inter.className} text-emerald-50 bg-emerald-900 font-sans font-normal text-base min-h-screen grid grid-rows-[auto,1fr,auto]`}
    >
      <ProductsProvider>
        <CartProvider>
          <Header />
          <main className="p-4 bg-emerald-900">{children}</main>
        </CartProvider>
      </ProductsProvider>
      <footer className="p-4 bg-emerald-950">
        <Link href="/">🏠</Link>
      </footer>
    </body>
  </html>
);

export default RootLayout;
