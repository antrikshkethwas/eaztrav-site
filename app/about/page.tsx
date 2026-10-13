import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { ADVANCE_AMOUNT, CALL_NUMBER, SITE_URL, whatsappLink } from "../lib/booking";
import { services } from "../ujjain/services";

// About page: who EazTrav is, what we offer and how to reach us.
// Business details (address, phones, email, hours) are written below and in
// the structured data for Google, so keep both in sync if they change.

const business = {
  address: "Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh 456010",
  phones: ["9752087904", "8305587779"],
  email: "eazz.trav@gmail.com",
  hours: "7:00 AM – 9:00 PM, all days",
};

export const metadata: Metadata = {
  title: "About EazTrav | Local Travel Service in Ujjain",
  description:
    "EazTrav is a local travel service in Freeganj, Ujjain. Tour packages to Omkareshwar, Maheshwar and Mandu, scooter rental, self-drive car and cabs with driver. Open 7 AM to 9 PM, all days.",
  alternates: { canonical: `${SITE_URL}/about` },
};

const reasons = [
  {
    icon: "💰",
    title: "Clear prices up front",
    text: "Every trip page lists the fare for each vehicle, so you know the exact price before you book.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "A vehicle for every group",
    text: "From a scooter for one or two, to a sedan for four, up to a Tempo Traveller or mini bus for 25.",
  },
  {
    icon: "📱",
    title: "Easy booking",
    text: `Pay a ${ADVANCE_AMOUNT} advance online to confirm, or message us on WhatsApp or call. No app to download.`,
  },
  {
    icon: "📍",
    title: "Local to Ujjain",
    text: "We are based at Freeganj, close to Ujjain railway station and Mahakaleshwar Temple.",
  },
];

// Tells Google who the business is, where it is and when it is open
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "EazTrav",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  email: business.email,
  telephone: CALL_NUMBER,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Parshvnath Tower, Freeganj",
    addressLocality: "Ujjain",
    addressRegion: "Madhya Pradesh",
    postalCode: "456010",
    addressCountry: "IN",
  },
  openingHours: "Mo-Su 07:00-21:00",
  areaServed: ["Ujjain", "Indore", "Omkareshwar", "Maheshwar", "Mandu"],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />

      {/* Intro */}
      <section className="max-w-2xl mx-auto px-6 pt-12 pb-8 text-center">
        <p className="text-sm font-semibold text-[#3FA3D1] uppercase tracking-wide">Eazy Travel</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">About EazTrav</h1>
        <p className="text-gray-600 mt-4 leading-relaxed">
          EazTrav is a local travel service in Ujjain. We help pilgrims, families and travellers get around Ujjain and
          the places around it, whether that&apos;s a day trip to Omkareshwar, a scooter for Mahakal darshan, or a
          cab to Indore airport.
        </p>
        <p className="text-gray-600 mt-3 leading-relaxed">
          Our aim is simple: make travel <span className="font-semibold text-gray-900">easy</span>. Clear prices, the
          right vehicle for your group, and booking in a few taps.
        </p>
      </section>

      {/* What we offer */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">What we offer in Ujjain</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="font-bold text-gray-900">{s.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{s.blurb}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why travel with us */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">Why travel with EazTrav</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <div className="text-3xl">{r.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{r.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where we go */}
      <section className="max-w-2xl mx-auto px-6 py-8 text-center">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Where we go</h2>
        <p className="text-gray-600 leading-relaxed">
          Ujjain local temples, Omkareshwar, Maheshwar, Mandu, Dewas Tekri, Indore and Indore airport, and longer
          trips to Pachmarhi. Bangalore is coming soon.
        </p>
        <Link
          href="/ujjain/trips"
          className="inline-block mt-5 bg-[#173F73] text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition"
        >
          See all trips &amp; prices
        </Link>
      </section>

      {/* Contact details */}
      <section className="max-w-lg mx-auto px-6 py-12">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm space-y-5">
          <h2 className="text-xl font-bold text-gray-900 text-center">Visit or contact us</h2>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Address</p>
            <p className="text-gray-900">{business.address}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Phone</p>
            <p className="text-gray-900">
              {business.phones.map((p, i) => (
                <span key={p}>
                  {i > 0 && " · "}
                  <a href={`tel:+91${p}`} className="hover:text-[#173F73] hover:underline">{p}</a>
                </span>
              ))}
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
            <p className="text-gray-900">{business.email}</p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Hours</p>
            <p className="text-gray-900">{business.hours}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={whatsappLink("Hi EazTrav, I have a question")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition text-center"
            >
              WhatsApp us
            </a>
            <Link
              href="/contact"
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-full hover:bg-gray-50 transition text-center"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
