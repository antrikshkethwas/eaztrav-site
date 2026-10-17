import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import TrustStrip from "../../components/TrustStrip";
import { Breadcrumb, BreadcrumbJsonLd, FaqJsonLd } from "../../ujjain/services";
import { AIRPORT_NAME, airportCars, INCLUDED_KM, lowestFare, rupees } from "../airport";
import AirportTaxiContent from "./AirportTaxiContent";

// Bangalore airport pickup and drop. Fares come from ../airport.ts.

const city = { name: "Bangalore", path: "/bangalore" };
const path = "/bangalore/airport-taxi";
const sedan = airportCars[0];
const ev = airportCars[airportCars.length - 1];

export const metadata: Metadata = {
  title: `Bangalore Airport Taxi from ${rupees(lowestFare)} | Fixed Fare Pickup & Drop | EazTrav`,
  description: `Bangalore airport cab at a fixed fare: ${sedan.category} ${rupees(sedan.fare)}, ${ev.category} ${rupees(ev.fare)} for trips up to ${INCLUDED_KM} km. Pickup and drop at ${AIRPORT_NAME}. Book on WhatsApp or call.`,
  alternates: { canonical: `https://www.eaztrav.com${path}` },
};

const faqs = [
  {
    q: "How much is a taxi to or from Bangalore airport?",
    a: `EazTrav's fixed fare is ${airportCars.map((c) => `${rupees(c.fare)} for a ${c.category.toLowerCase()} (${c.name})`).join(" and ")}, for airport pickups and drops up to ${INCLUDED_KM} km.`,
  },
  {
    q: `What if my trip is longer than ${INCLUDED_KM} km?`,
    a: `Each extra kilometre beyond ${INCLUDED_KM} km is ${airportCars.map((c) => `₹${c.extraPerKm} in the ${c.name}`).join(" and ")}.`,
  },
  {
    q: "Is the fare the same for airport pickup and drop?",
    a: "Yes. The same fixed fare applies whether we drop you at the airport or pick you up from it.",
  },
  {
    q: "How do I book a Bangalore airport cab?",
    a: "Choose your car, enter your area, date, time and flight number above and tap \"Book on WhatsApp\": your trip details are typed in for you and we confirm on WhatsApp. You can also call us.",
  },
  {
    q: "Which cars are available?",
    a: `${airportCars.map((c) => `${c.category}: ${c.name} (${c.seats})`).join("; ")}. "4+1" means 4 passengers plus the driver.`,
  },
];

export default function BangaloreAirportTaxiPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">
      <BreadcrumbJsonLd name="Airport taxi" path={path} city={city} />
      <FaqJsonLd faqs={faqs} />
      <Navbar />
      <Breadcrumb current="Airport taxi" city={city} />

      <div className="text-center px-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-900">✈️ Bangalore Airport Taxi</h1>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Fixed-fare pickup and drop at {AIRPORT_NAME}. No surge pricing.
        </p>
        <TrustStrip
          points={[
            { icon: "✅", text: `Fixed fare up to ${INCLUDED_KM} km` },
            { icon: "⚡", text: "Electric car option" },
            { icon: "💬", text: "Book in a minute on WhatsApp" },
          ]}
        />
      </div>

      <AirportTaxiContent />

      {/* Fare table */}
      <section className="max-w-md mx-auto px-4 mt-10">
        <h2 className="text-lg font-bold text-gray-900 text-center">Bangalore airport taxi fares</h2>
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden mt-3">
          <div className="grid grid-cols-3 bg-gray-50 px-4 py-2 text-xs font-semibold text-gray-600">
            <span>Car</span>
            <span className="text-right">Up to {INCLUDED_KM} km</span>
            <span className="text-right">Extra km</span>
          </div>
          {airportCars.map((c) => (
            <div key={c.name} className="grid grid-cols-3 items-center px-4 py-3 border-t border-gray-100 text-sm">
              <span>
                <span className="block font-medium text-gray-900">{c.name}</span>
                <span className="block text-xs text-gray-500">{c.category} · 👥 {c.seats}</span>
              </span>
              <span className="text-right font-bold text-gray-900">{rupees(c.fare)}</span>
              <span className="text-right text-gray-700">₹{c.extraPerKm}/km</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-2">Same fare for pickup from and drop to the airport.</p>
      </section>

      {/* How it works */}
      <section className="max-w-md mx-auto px-6 mt-10">
        <h2 className="text-lg font-bold text-gray-900 text-center mb-3">How it works</h2>
        <ol className="space-y-2 text-sm text-gray-700">
          <li><span className="font-semibold">1.</span> Choose your car and enter your area, date, time and flight.</li>
          <li><span className="font-semibold">2.</span> Tap &quot;Book on WhatsApp&quot;. Your details are sent to us in one message.</li>
          <li><span className="font-semibold">3.</span> We confirm your booking on WhatsApp.</li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 mt-10">
        <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Frequently asked questions</h2>
        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <summary className="font-semibold text-gray-900 cursor-pointer">{faq.q}</summary>
              <p className="text-sm text-gray-600 mt-2">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <div className="max-w-2xl mx-auto px-6 pt-10 text-sm text-gray-600 leading-relaxed text-center">
        <p>
          Looking for a taxi to or from Bangalore airport? EazTrav offers fixed-fare airport pickup and drop at{" "}
          {AIRPORT_NAME} in a {sedan.name} sedan or an {ev.name} electric SUV. Book on WhatsApp or call, and travel
          without surge pricing.
        </p>
        <p className="mt-4">
          Travelling to Ujjain? See our <Link href="/ujjain" className="text-[#173F73] underline">Ujjain cabs and trips</Link>.
        </p>
      </div>
    </main>
  );
}
