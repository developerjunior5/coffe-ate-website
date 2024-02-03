import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderTop from "./components/HeaderTop";
import HeaderMain from "./components/Header Main";
import FooterTop from "./components/FooterTop";
import FooterMain from "./components/Footer Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Qauffe | CCoffee Store",
  description: "A Coffee Shop Located In Pretoria South Africa ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderTop/>
        <HeaderMain/>
        {children}
        <FooterTop/>
        <FooterMain/>
        </body>
    </html>
  );
}
