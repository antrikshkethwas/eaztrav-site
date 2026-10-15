import Script from 'next/script'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ADS_CONVERSIONS, GOOGLE_ADS_ID, SITE_URL } from "./lib/booking";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Default title and description, used by any page that doesn't set its own.
// metadataBase turns relative image paths into full links, and openGraph
// controls the preview card when a page link is shared on WhatsApp or Facebook.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "EazTrav — Cabs, Trips & Scooter Rental in Ujjain",
  description: "Book a cab with driver, a trip to Omkareshwar, Maheshwar or Mandu, or rent a scooter in Ujjain. Fixed fares, instant booking via WhatsApp or call.",
  openGraph: {
    siteName: "EazTrav",
    type: "website",
    locale: "en_IN",
    images: [{ url: "/web-app-manifest-512x512.png", width: 512, height: 512, alt: "EazTrav" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head> 
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
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
            gtag('config', '${GOOGLE_ADS_ID}');

            // Report every call link and WhatsApp link tap to Google Ads
            document.addEventListener('click', function (e) {
              var link = e.target.closest && e.target.closest('a[href]');
              if (!link) return;
              var href = link.getAttribute('href') || '';
              if (href.indexOf('tel:') === 0) {
                gtag('event', 'conversion', { send_to: '${ADS_CONVERSIONS.call}' });
              } else if (href.indexOf('wa.me/') !== -1) {
                gtag('event', 'conversion', { send_to: '${ADS_CONVERSIONS.whatsapp}' });
              }
            }, true);
          `}
        </Script>
        {children}
        
        </body>
    </html>
  );
}
