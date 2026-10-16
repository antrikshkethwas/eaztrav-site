"use client";

import { useEffect } from "react";
import Link from "next/link";
import { CALL_NUMBER, saveReferral, trackConversion, whatsappLink, withReferral } from "../../lib/booking";
import { fromPrice, getTrip, rupees, type Trip } from "../../ujjain/trips/trips";

// The trips listed for hotel guests (trip addresses from trips.ts)
const guestTrips = [
  "ujjain-local-sightseeing",
  "ujjain-to-omkareshwar",
  "ujjain-to-indore-airport",
  "ujjain-omkareshwar-maheshwar",
  "ujjain-to-dewas-tekri",
]
  .map(getTrip)
  .filter((t): t is Trip => Boolean(t));

// The interactive part of a hotel's welcome page: remembers the hotel's code
// in this browser (so any booking in the next 30 days carries it), and shows
// the WhatsApp and call buttons.
export default function HotelWelcome({ code, hotelName }: { code: string; hotelName: string }) {
  useEffect(() => {
    saveReferral(code);
  }, [code]);

  const handleWhatsApp = () => {
    trackConversion("whatsapp");
    const message = `Hi, I am staying at ${hotelName} and want to book a cab.`;
    window.open(whatsappLink(withReferral(message)), "_blank");
  };

  return (
    <div className="max-w-md mx-auto px-4 mt-6">
      <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm text-center">
        <button
          onClick={handleWhatsApp}
          className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-full hover:bg-[#1EBE5A] transition"
        >
          Book a cab on WhatsApp
        </button>
        <a
          href={`tel:${CALL_NUMBER}`}
          className="block w-full mt-3 border-2 border-[#173F73] text-[#173F73] font-semibold py-2.5 rounded-full hover:bg-[#173F73] hover:text-white transition"
        >
          📞 Call to book
        </a>
        <p className="text-xs text-gray-500 mt-3">
          Calling? Please mention hotel code <span className="font-bold text-gray-900">{code.toUpperCase()}</span>
        </p>
      </div>

      <h2 className="text-lg font-bold text-gray-900 text-center mt-8 mb-3">Popular trips</h2>
      <div className="space-y-3">
        {guestTrips.map((trip) => (
          <Link
            key={trip.slug}
            href={`/ujjain/trips/${trip.slug}`}
            className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
          >
            <div>
              <p className="font-semibold text-gray-900">{trip.name}</p>
              <p className="text-xs text-gray-500 mt-1">{trip.stops.join(" → ")}</p>
            </div>
            <div className="text-right whitespace-nowrap">
              <p className="text-sm font-bold text-gray-900">{rupees(fromPrice(trip))}</p>
              <p className="text-[11px] text-gray-500">Sedan</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-4">
        <Link href="/ujjain/trips" className="text-sm text-[#173F73] font-semibold hover:underline">
          See all trips &amp; vehicles →
        </Link>
      </div>
    </div>
  );
}
