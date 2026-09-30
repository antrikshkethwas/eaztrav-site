"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ============================================================
// ✏️ FILL IN YOUR CAR DETAILS HERE — everything marked TODO
// ============================================================
const car = {
  name: "Maruti Suzuki Dzire",
  seats: 5, // TODO: number of seats
  ac: true, // TODO: true if AC, false if not
  fuel: "Petrol", // TODO: Petrol / Diesel / CNG / EV
  img: "/images/desire.png",
  // TODO: edit prices — add, remove or rename rows as you like
  prices: [
    { amount: "₹0000", label: "per day (self drive)" },
    { amount: "₹0000", label: "per day (with driver)" },
  ],
  // TODO: keep only the options you offer
  modes: ["Self drive", "With driver"],
};
// ============================================================

const WHATSAPP_NUMBER = "919752087904"; // WhatsApp number, country code + number, no + or spaces
const CALL_NUMBER = "+919752087904"; // Call number, with + and country code

const popularTrips = [
  { name: "Mahakaleshwar darshan", detail: "City pickup & drop, wait while you visit" },
  { name: "Omkareshwar", detail: "Day trip, around 140 km from Ujjain" },
  { name: "Indore airport / railway station", detail: "Pickup and drop transfers" },
  { name: "Ujjain local sightseeing", detail: "Kal Bhairav, Harsiddhi, Ram Ghat and more" },
];

const faqs = [
  {
    q: "How do I book a car in Ujjain with EazTrav?",
    a: "Pick your date and time above and tap 'Book on WhatsApp', or call us directly. We'll confirm availability and share the details.",
  },
  {
    q: "How much does it cost to rent a car in Ujjain?",
    a: `Our ${car.name} starts at ${car.prices[0].amount} ${car.prices[0].label}. Message us on WhatsApp for outstation trips or multi-day rentals.`,
  },
  {
    q: "Can I rent the car for an Omkareshwar or Indore trip?",
    a: "Yes. Outstation trips to Omkareshwar, Indore and nearby places are available — just mention your plan when booking.",
  },
];

// Generate next 14 days as readable date strings
function getDateOptions() {
  const options: string[] = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const label = d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    options.push(label);
  }
  return options;
}

// Generate time slots every 30 minutes, 7 AM to 9 PM
function getTimeOptions() {
  const options: string[] = [];
  for (let h = 7; h <= 21; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? "AM" : "PM";
      const minute = m === 0 ? "00" : m;
      options.push(`${hour12}:${minute} ${ampm}`);
    }
  }
  return options;
}

const dateOptions = getDateOptions();
const timeOptions = getTimeOptions();

function CarCard() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [mode, setMode] = useState(car.modes[0]);

  const handleBook = () => {
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to book the ${car.name} (${mode}) ${dateText} ${timeText}`
      .replace(/\s+/g, " ")
      .trim();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300">
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        {car.img ? (
          <Image
            src={car.img}
            alt={`${car.name} for rent in Ujjain`}
            width={320}
            height={220}
            className="mx-auto object-contain"
          />
        ) : (
          <div className="h-44 flex items-center justify-center text-6xl">🚗</div>
        )}
      </div>

      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        Car
      </span>

      <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>

      {/* Quick specs */}
      <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">👥 {car.seats} seats</span>
        {car.ac && <span className="bg-gray-100 px-3 py-1 rounded-full">❄️ AC</span>}
        <span className="bg-gray-100 px-3 py-1 rounded-full">⛽ {car.fuel}</span>
      </div>

      <div className="flex justify-center gap-6 mt-4 mb-6">
        {car.prices.map((price, i) => (
          <div key={price.label} className="flex gap-6">
            {i > 0 && <div className="w-px bg-gray-200" />}
            <div>
              <p className="text-lg font-bold text-gray-900">{price.amount}</p>
              <p className="text-xs text-gray-500">{price.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Self drive / with driver choice (hidden if only one option) */}
      {car.modes.length > 1 && (
        <div className="flex justify-center gap-2 mb-4">
          {car.modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                mode === m
                  ? "bg-[#173F73] text-white border-[#173F73]"
                  : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      )}

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

export default function CarRentalContent() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
        {/* Left: Clickable Logo redirecting to Home */}
        <Link href="/" className="group flex flex-col min-w-max">
          <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
        </Link>

        {/* Right: Clickable Call Button */}
        <a
          href={`tel:${CALL_NUMBER}`}
          className="flex items-center gap-1.5 bg-[#173F73] hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm whitespace-nowrap"
        >
          <span>📞</span> <span>book on call</span>
        </a>
      </nav>

      <div className="text-center mb-2 px-6 py-1">
        <h1 className="text-xl font-bold text-gray-900">📍Car Rental in Ujjain</h1>
        <p className="text-xs text-gray-600 max-w-md mx-auto">
          Clean, well-maintained car for city rides and outstation trips.
        </p>
        <Link href="/Ujjain" className="text-xs text-[#173F73] font-semibold hover:underline">
          Looking for a scooter instead? →
        </Link>
      </div>

      <div className="max-w-md mx-auto px-4 mt-4">
        <CarCard />
      </div>

      {/* Popular trips */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Popular trips from Ujjain</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {popularTrips.map((trip) => (
            <div key={trip.name} className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm">
              <p className="font-semibold text-gray-900">{trip.name}</p>
              <p className="text-xs text-gray-500 mt-1">{trip.detail}</p>
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
          Looking for a car on rent in Ujjain? EazTrav offers car rental near Freeganj and Mahakaleshwar Temple for temple visits, family trips, Omkareshwar day trips and Indore airport transfers. Whether you&apos;re visiting for Simhastha or travelling with family, book a clean, comfortable car in minutes on WhatsApp or call.
        </p>
      </div>
    </main>
  );
}
