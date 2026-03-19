import type { Metadata } from "next";
import { Oswald, Barlow } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import LightningEffects from "@/components/lightning-effects";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Rian Corcino",
  description: "Personal portfolio website of Rian Corcino",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${barlow.variable} antialiased`}>
        <div className="min-h-screen bg-[#06060a]">
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
          <LightningEffects />
        </div>
      </body>
    </html>
  );
}
