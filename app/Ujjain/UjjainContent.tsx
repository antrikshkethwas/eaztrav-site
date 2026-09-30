"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Scooter = {
  name: string;
  type: string;
  price: { daily: string; hourly: string };
  img: string;
};

const scooters: Scooter[] = [
  {
    name: "Suzuki Access 125",
    type: "Scooter",
    price: { daily: "₹400", hourly: "₹150" },
    img: "/images/access_compressed.png",
  },
  {
    name: "Honda Activa 125",
    type: "Scooter",
    price: { daily: "₹400", hourly: "₹150" },
    img: "/images/activa_compressed.png",
  },
  {
    name: "RE classic 350",
    type: "Bike(coming soon)",
    price: { daily: "₹1000", hourly: "350" },
    img: "/images/classic350_compressed.png",
  }
];

const WHATSAPP_NUMBER = "919752087904"; // WhatsApp number, country code + number, no + or spaces
const CALL_NUMBER = "+919752087904"; // Call number, with + and country code

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

function ScooterCard({ scooter }: { scooter: Scooter }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to book ${scooter.name} ${dateText} ${timeText}`
      .replace(/\s+/g, " ")
      .trim();
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="group bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300">
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        <Image
          src={scooter.img}
          alt={scooter.name}
          width={220}
          height={220}
          className="mx-auto object-contain group-hover:scale-105 transition duration-300"
        />
      </div>

      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        {scooter.type}
      </span>

      <h3 className="text-xl font-bold text-gray-900">{scooter.name}</h3>

      <div className="flex justify-center gap-6 mt-4 mb-6">
        <div>
          <p className="text-lg font-bold text-gray-900">{scooter.price.daily}</p>
          <p className="text-xs text-gray-500">per day</p>
        </div>
        <div className="w-px bg-gray-200" />
        <div>
          <p className="text-lg font-bold text-gray-900">{scooter.price.hourly}</p>
          <p className="text-xs text-gray-500">per hour</p>
        </div>
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

export default function UjjainContent() {
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
                href="tel:+919752087904"
                className="flex items-center gap-1.5 bg-[#173F73] hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm whitespace-nowrap"
              >
                <span>📞</span> <span>book on call</span>
              </a>
          </nav>       

      <div className="text-center mb-2  px-6 py-1">
        <h1 className="text-xl font-bold text-gray-900">📍Ujjain</h1>
        <p className="text-xs text-gray-600 max-w-md mx-auto">
          Well-maintained 2 wheelers available for rent.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {scooters.map((scooter) => (
          <ScooterCard key={scooter.name} scooter={scooter} />
        ))}
      </div>

      {/* Link to car rental page */}
      <Link
        href="/Ujjain/car-rental"
        className="flex items-center justify-between gap-4 max-w-3xl mx-4 sm:mx-auto mt-6 bg-[#173F73] text-white rounded-3xl px-6 py-5 shadow-sm hover:opacity-90 transition"
      >
        <div>
          <p className="font-bold">🚗 Travelling with family? Rent a car</p>
          <p className="text-xs text-white/80">For Omkareshwar trips, Indore airport transfers and more</p>
        </div>
        <span className="text-xl">→</span>
      </Link>

      {/* SEO content */}
      <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-gray-600 leading-relaxed text-center">
        <p>
          Looking for a scooter or bike on rent in Ujjain? EazTrav offers affordable two-wheeler rentals near Freeganj and Mahakaleshwar Temple, with hourly and daily options. Whether you&apos;re visiting for Simhastha, exploring the city, or need a quick ride around town, book a well-maintained Activa or Access 125 in minutes — no advance deposit hassle.
        </p>
      </div>
    </main>
  );
}