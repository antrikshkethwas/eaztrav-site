import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { airportCars, INCLUDED_KM, lowestFare, rupees } from "./airport";

// Bangalore city page. For now Bangalore has one service, the airport taxi;
// add more cards here as services launch (and add them to sitemap.ts).
export const metadata: Metadata = {
  title: `Cabs in Bangalore: Airport Taxi from ${rupees(lowestFare)} | EazTrav`,
  description: `Fixed-fare Bangalore airport taxi from ${rupees(lowestFare)} for trips up to ${INCLUDED_KM} km. Sedan or electric SUV. Book on WhatsApp or call.`,
  alternates: { canonical: "https://www.eaztrav.com/bangalore" },
};

export default function Bangalore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">
      <Navbar />

      <div className="text-center px-6 pt-8">
        <p className="text-sm font-semibold text-[#3FA3D1] uppercase tracking-wide">EazTrav Bangalore</p>
        <h1 className="text-3xl font-bold text-gray-900 mt-2">Cabs in Bangalore</h1>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Fixed-fare airport pickup and drop. Book in a minute on WhatsApp.
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 mt-8">
        <Link
          href="/bangalore/airport-taxi"
          className="block bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-md transition"
        >
          <p className="text-3xl">✈️</p>
          <p className="text-lg font-bold text-gray-900 mt-2">Airport taxi</p>
          <p className="text-sm text-gray-600 mt-1">Pickup and drop at Bangalore airport, up to {INCLUDED_KM} km.</p>
          <div className="flex gap-4 mt-4">
            {airportCars.map((c) => (
              <div key={c.name}>
                <p className="text-lg font-bold text-gray-900">{rupees(c.fare)}</p>
                <p className="text-xs text-gray-500">{c.category} · {c.name}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm font-semibold text-[#173F73]">See fares &amp; book →</p>
        </Link>

        <p className="text-xs text-gray-500 text-center mt-6">More Bangalore services coming soon.</p>
      </div>
    </main>
  );
}
