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
    type: "Bike",
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
          className="flex-1 bg-gray-900 text-white font-semibold py-3 rounded-full hover:bg-gray-800 transition text-center"
        >
          Book on call
        </a>
      </div>
    </div>
  );
}

export default function Ujjain() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Contact Bar */}
        <div className="bg-gray-900 text-gray-300 text-xs px-6 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <span>📍 Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh (pin:456010)</span>
          <span>✉️ easy.stay.ujjain@gmail.com</span>
          <a href="tel:+919752087904" className="hover:text-white transition">📞 9752087904</a>
          <a href="tel:+918305587779" className="hover:text-white transition">📞 8305587779</a>
        </div>

        {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
         <div>
          <div className="text-2xl font-bold text-gray-900">
          Eaz<span className="text-yellow-500">Tay</span>
          </div>
          <p className="text-xs text-gray-500 tracking-wide">Travel with Eaze</p>
         </div>

         <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#services" className="hover:text-gray-900">Services</a>
          <a href="#about" className="hover:text-gray-900">About</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </div>
        {/*
        <button className="bg-gray-900 text-white px-5 py-2 rounded-full font-medium hover:bg-gray-800 transition">
          Book Now
        </button>
        */}
      </nav>
       

      <div className="text-center mb-14  px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Rent a scooter in Ujjain</h1>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Well-maintained scooters available on hourly or daily rental.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {scooters.map((scooter) => (
          <ScooterCard key={scooter.name} scooter={scooter} />
        ))}
      </div>
    </main>
  );
}