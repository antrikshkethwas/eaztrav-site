import Script from 'next/script'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EazTrav — Rent Scooters & Cabs in Ujjain & Bangalore",
  description: "Book affordable scooters, bikes and cabs in Ujjain and Bangalore. Hourly and daily rentals, instant booking via WhatsApp or call.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3ZJXZHQ8HQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-3ZJXZHQ8HQ');
          `}
        </Script>
        {children}
        
        </body>
    </html>
  );
}
