import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import FooterWrapper from "@/components/layout/FooterWrapper";

export const metadata: Metadata = {
  title: "Ycb demo exam portal",
  description: "Msplyoga Exam Portal",
  other: {
    "google-adsense-account": "ca-pub-7565474923776604",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7565474923776604"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {children}

        <Analytics />
        <Toaster position="top-center" />
        <FooterWrapper />
      </body>
    </html>
  );
}
