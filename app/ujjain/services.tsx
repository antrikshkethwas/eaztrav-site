import Link from "next/link";
import { SITE_URL } from "../lib/booking";
import { guides } from "./guide/GuidePage";

// The services offered in Ujjain. The city page (/ujjain) and the
// "More in Ujjain" links on each service page are both built from this list,
// so adding a service here makes it show up everywhere.
export const services = [
  {
    href: "/ujjain/scooter-rental",
    icon: "🛵",
    title: "Scooter rental",
    blurb: "Activa 125 and Access 125. From ₹400 per day or ₹150 per hour.",
  },
  {
    href: "/ujjain/car-rental",
    icon: "🚗",
    title: "Self-drive car rental",
    blurb: "Drive it yourself. Good for families and out-of-town trips.",
  },
  {
    href: "/ujjain/cab-service",
    icon: "🚕",
    title: "Cab service",
    blurb: "Car with driver for temple visits, Indore airport and Omkareshwar.",
  },
];

// Small "Home › Ujjain › This page" trail at the top of a service page
export function Breadcrumb({ current }: { current: string }) {
  return (
    <p className="text-xs text-gray-500 px-4 sm:px-6 pt-3 max-w-3xl mx-auto">
      <Link href="/" className="hover:underline">Home</Link>
      {" › "}
      <Link href="/ujjain" className="hover:underline">Ujjain</Link>
      {" › "}
      <span>{current}</span>
    </p>
  );
}

// Tells Google where this page sits in the site (Home › Ujjain › This page)
export function BreadcrumbJsonLd({ name, path }: { name: string; path: string }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Ujjain", item: `${SITE_URL}/ujjain` },
      { "@type": "ListItem", position: 3, name, item: `${SITE_URL}${path}` },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
    />
  );
}

// Links to the other Ujjain services and the travel guides, shown at the
// bottom of each service page. Pass the page's own address as `current`
// so it doesn't link to itself.
export function MoreInUjjain({ current }: { current: string }) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
      <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">More from EazTrav in Ujjain</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {services
          .filter((s) => s.href !== current)
          .map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="flex items-center justify-between gap-4 bg-[#173F73] text-white rounded-3xl px-6 py-5 shadow-sm hover:opacity-90 transition"
            >
              <div>
                <p className="font-bold">{s.icon} {s.title}</p>
                <p className="text-xs text-white/80">{s.blurb}</p>
              </div>
              <span className="text-xl">→</span>
            </Link>
          ))}
      </div>

      <h2 className="text-lg font-bold text-gray-900 mt-10 mb-3 text-center">Planning your Ujjain trip?</h2>
      <div className="grid sm:grid-cols-3 gap-3">
        {guides.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className="block bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
          >
            <p className="font-semibold text-gray-900">{g.title}</p>
            <p className="text-xs text-gray-500 mt-1">{g.blurb}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
