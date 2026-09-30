import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

// Shared layout for the Ujjain travel guide pages.
// Each guide page passes in its title, content and FAQs; this file adds the
// navbar, the "rent a scooter" boxes, links to the other guides and the
// structured data (JSON-LD) that tells Google what the page is.

const SITE_URL = "https://www.eaztrav.com";
const WHATSAPP_NUMBER = "919752087904"; // country code + number, no + or spaces
const CALL_NUMBER = "+919752087904";

export const guides = [
  {
    href: "/Ujjain/guide/mahakaleshwar-temple",
    title: "Mahakaleshwar Temple Guide",
    blurb: "Darshan timings, Bhasma Aarti booking, dress code and parking.",
  },
  {
    href: "/Ujjain/guide/itinerary",
    title: "Ujjain 1-Day & 2-Day Itinerary",
    blurb: "A temple-by-temple plan you can do on a scooter.",
  },
  {
    href: "/Ujjain/guide/getting-around",
    title: "Getting Around Ujjain",
    blurb: "Railway station to Mahakal, auto fares vs renting a scooter.",
  },
];

export type Faq = { q: string; a: string };

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function ScooterCta({ message = "Hi, I want to rent a scooter in Ujjain" }: { message?: string }) {
  return (
    <div className="my-8 rounded-3xl bg-[#173F73] text-white p-6 shadow-sm">
      <p className="text-lg font-bold">🛵 Explore Ujjain on your own scooter</p>
      <p className="text-sm text-white/80 mt-1">
        Activa 125 or Access 125 from ₹400/day or ₹150/hour. Book in a minute on WhatsApp.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a
          href={whatsappLink(message)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition text-center"
        >
          Book on WhatsApp
        </a>
        <Link
          href="/Ujjain"
          className="flex-1 bg-white text-[#173F73] font-semibold py-3 rounded-full hover:opacity-90 transition text-center"
        >
          See scooters &amp; prices
        </Link>
      </div>
    </div>
  );
}

type GuidePageProps = {
  slug: string; // e.g. "mahakaleshwar-temple"
  title: string; // the H1 on the page
  intro: string; // short summary under the H1
  updated: string; // e.g. "2026-09-30", shown to readers and to Google
  faqs: Faq[];
  children: ReactNode;
};

export default function GuidePage({ slug, title, intro, updated, faqs, children }: GuidePageProps) {
  const url = `${SITE_URL}/Ujjain/guide/${slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: intro,
      dateModified: updated,
      mainEntityOfPage: url,
      author: { "@type": "Organization", name: "EazTrav", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "EazTrav",
        logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Ujjain", item: `${SITE_URL}/Ujjain` },
        { "@type": "ListItem", position: 3, name: title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  const updatedLabel = new Date(updated).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />

      {/* Navbar (same as the Ujjain page) */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        <Link href="/" className="group flex flex-col min-w-max">
          <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
        </Link>
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex items-center gap-1.5 bg-[#173F73] hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm whitespace-nowrap"
        >
          <span>📞</span> <span>book on call</span>
        </a>
      </nav>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8 text-gray-700 leading-relaxed">
        {/* Breadcrumb */}
        <p className="text-xs text-gray-500 mb-4">
          <Link href="/" className="hover:underline">Home</Link>
          {" › "}
          <Link href="/Ujjain" className="hover:underline">Ujjain</Link>
          {" › "}
          <span>Travel guide</span>
        </p>

        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">{title}</h1>
        <p className="mt-3 text-gray-600">{intro}</p>
        <p className="mt-2 text-xs text-gray-400">Last updated {updatedLabel}</p>

        <div className="mt-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-10 [&>h2]:mb-3 [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&_li]:mb-1 [&>p_a]:text-[#173F73] [&>p_a]:underline [&>ul_a]:text-[#173F73] [&>ul_a]:underline [&>ol_a]:text-[#173F73] [&>ol_a]:underline [&_table]:w-full [&_table]:text-sm [&_table]:mb-4 [&_th]:text-left [&_th]:bg-gray-100 [&_th]:p-2 [&_td]:p-2 [&_td]:border-t [&_td]:border-gray-100">
          {children}
        </div>

        {/* FAQ */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="group bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
                <summary className="font-semibold text-gray-900 cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <ScooterCta />

        {/* Other guides */}
        <section className="mt-10">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">More Ujjain travel guides</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {guides
              .filter((g) => !g.href.endsWith(`/${slug}`))
              .map((g) => (
                <Link
                  key={g.href}
                  href={g.href}
                  className="block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <p className="font-semibold text-gray-900">{g.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{g.blurb}</p>
                </Link>
              ))}
            <Link
              href="/Ujjain"
              className="block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold text-gray-900">Scooter rental in Ujjain</p>
              <p className="text-xs text-gray-500 mt-1">Activa and Access 125 on hourly or daily rent.</p>
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
