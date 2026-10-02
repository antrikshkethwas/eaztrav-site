"use client";

import { useState } from "react";
import Image from "next/image";
import { CALL_NUMBER, dateOptions, timeOptions, whatsappLink } from "../../lib/booking";

// ============================================================
// ✏️ YOUR CAB DETAILS — edit here
// ============================================================
const cab = {
  name: "Maruti Suzuki Dzire", // the car used as the cab
  passengers: 4, // passengers, not counting the driver
  ac: true,
  img: "/images/desire.png",
};

// Trips shown on the page. Put a fare in `fare` (e.g. "₹1500") to show it;
// while it is empty the page shows "Ask for fare".
const routes = [
  { name: "Ujjain local sightseeing", detail: "Mahakal, Kal Bhairav, Harsiddhi, Ram Ghat and more", fare: "" },
  { name: "Ujjain ⇄ Indore airport", detail: "Pickup or drop, about 55 km", fare: "" },
  { name: "Ujjain ⇄ Omkareshwar", detail: "Day trip, about 140 km each way", fare: "" },
  { name: "Railway station pickup", detail: "Ujjain Junction to your hotel or the temple", fare: "" },
];
// ============================================================

const faqs = [
  {
    q: "How do I book a cab in Ujjain with EazTrav?",
    a: "Enter your pickup and drop above, pick a date and time, and tap 'Book on WhatsApp'. You can also call us directly. We'll confirm the fare and the booking.",
  },
  {
    q: "How much does a cab in Ujjain cost?",
    a: "The fare depends on the distance and how long you need the cab. Send us your trip on WhatsApp and we'll tell you the fare before you book.",
  },
  {
    q: "Can I book a cab from Ujjain to Indore airport or Omkareshwar?",
    a: "Yes. We do Indore airport pickups and drops, and day trips to Omkareshwar.",
  },
  {
    q: "Does the cab come with a driver?",
    a: "Yes, every cab booking includes a driver. If you'd rather drive yourself, see our self-drive car rental in Ujjain.",
  },
];

function CabBookingCard() {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    const fromText = pickup ? `from ${pickup}` : "";
    const toText = drop ? `to ${drop}` : "";
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to book a cab in Ujjain ${fromText} ${toText} ${dateText} ${timeText}`;
    window.open(whatsappLink(message), "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300">
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        <Image
          src={cab.img}
          alt={`${cab.name} cab with driver in Ujjain`}
          width={320}
          height={250}
          className="mx-auto object-contain"
        />
      </div>

      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        Cab with driver
      </span>

      <h3 className="text-xl font-bold text-gray-900">{cab.name}</h3>

      {/* Quick specs */}
      <div className="flex flex-wrap justify-center gap-2 mt-3 mb-6 text-xs text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">👥 {cab.passengers} passengers</span>
        {cab.ac && <span className="bg-gray-100 px-3 py-1 rounded-full">❄️ AC</span>}
        <span className="bg-gray-100 px-3 py-1 rounded-full">🧑‍✈️ Driver included</span>
      </div>

      {/* Pickup and drop */}
      <div className="flex flex-col gap-3 mb-3">
        <input
          type="text"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          placeholder="Pickup (e.g. Ujjain railway station)"
          aria-label="Pickup location"
          className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
        />
        <input
          type="text"
          value={drop}
          onChange={(e) => setDrop(e.target.value)}
          placeholder="Drop (e.g. Indore airport)"
          aria-label="Drop location"
          className="border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
        />
      </div>

      {/* Date and time dropdowns */}
      <div className="flex gap-3 mb-4">
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
        >
          <option value="">Select date</option>
          {dateOptions.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white"
        >
          <option value="">Select time</option>
          {timeOptions.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3">
        <button
          onClick={handleBook}
          className="flex-1 bg-green-600 text-white font-semibold py-3 rounded-full hover:bg-green-700 transition"
        >
          Book on WhatsApp
        </button>
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex-1 bg-[#173F73] text-white font-semibold py-3 rounded-full hover:opacity-90 transition text-center"
        >
          Book on call
        </a>
      </div>
    </div>
  );
}

export default function CabServiceContent() {
  return (
    <>
      <div className="text-center mb-2 px-6 py-1">
        <h1 className="text-xl font-bold text-gray-900">📍Cab Service in Ujjain</h1>
        <p className="text-xs text-gray-600 max-w-md mx-auto">
          AC cab with driver for temple visits, airport transfers and day trips.
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 mt-4">
        <CabBookingCard />
      </div>

      {/* Popular routes */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Popular cab trips from Ujjain</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {routes.map((route) => (
            <div key={route.name} className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <div>
                <p className="font-semibold text-gray-900">{route.name}</p>
                <p className="text-xs text-gray-500 mt-1">{route.detail}</p>
              </div>
              <p className="text-sm font-bold text-gray-900 whitespace-nowrap">{route.fare || "Ask for fare"}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 mt-12">
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

      {/* SEO content */}
      <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-gray-600 leading-relaxed text-center">
        <p>
          Need a cab or taxi in Ujjain? EazTrav offers an AC cab with driver from Freeganj for Mahakaleshwar darshan, Ujjain local sightseeing, Indore airport pickup and drop, and Omkareshwar day trips. Tell us your pickup, drop and time on WhatsApp and we&apos;ll confirm the fare before you book.
        </p>
      </div>
    </>
  );
}
