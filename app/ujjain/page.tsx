import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { guides } from "./guide/GuidePage";
import { services } from "./services";

// The Ujjain city page: a simple menu of every service we offer in Ujjain.
// The service cards come from the list in services.tsx.

export const metadata: Metadata = {
  title: "Scooter Rental, Self-Drive Car & Cab Service in Ujjain | EazTrav",
  description: "Rent a scooter, hire a self-drive car or book a cab with driver in Ujjain. Near Freeganj and Mahakaleshwar Temple. Book instantly via WhatsApp or call.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain" },
};

export default function UjjainPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />

      <div className="text-center px-6 pt-8 pb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">📍Ujjain</h1>
        <p className="text-sm text-gray-600 max-w-md mx-auto mt-2">
          Scooters, a self-drive car and a cab with driver. Pick what you need.
        </p>
      </div>

      {/* Service cards */}
      <div className="grid sm:grid-cols-3 gap-4 max-w-4xl mx-auto px-4 sm:px-6">
        {services.map((s) => (
          <Link
            key={s.href}
            href={s.href}
            className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >
            <div className="text-5xl mb-4">{s.icon}</div>
            <h2 className="text-xl font-bold text-gray-900">{s.title}</h2>
            <p className="text-sm text-gray-600 mt-2">{s.blurb}</p>
            <span className="inline-block mt-5 bg-[#173F73] text-white text-sm font-semibold px-6 py-2.5 rounded-full group-hover:opacity-90 transition">
              View &amp; book →
            </span>
          </Link>
        ))}
      </div>

      {/* SEO content */}
      <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-gray-600 leading-relaxed text-center">
        <p>
          EazTrav helps you get around Ujjain your way. Rent an Activa or Access 125 scooter by the hour or day, take a self-drive car for the family, or book a cab with driver for Mahakaleshwar darshan, Indore airport and Omkareshwar. We are based at Freeganj, close to the railway station and Mahakaleshwar Temple, and you can book in minutes on WhatsApp or call.
        </p>
      </div>

      {/* Links to the Ujjain travel guide pages */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-lg font-bold text-gray-900 mb-3 text-center">Planning your Ujjain trip?</h2>
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
    </main>
  );
}
