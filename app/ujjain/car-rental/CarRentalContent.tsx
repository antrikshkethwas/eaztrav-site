"use client";

import { useState } from "react";
import Image from "next/image";
import { CALL_NUMBER, dateOptions, timeOptions, whatsappLink } from "../../lib/booking";

// ============================================================
// ✏️ YOUR CAR DETAILS — edit here
// ============================================================
const car = {
  name: "Maruti Suzuki Dzire",
  seats: 5,
  ac: true,
  fuel: "Petrol", // Petrol / Diesel / CNG / EV
  img: "/images/desire.png",
  // Add your prices here, e.g. { amount: "₹2000", label: "per day" }.
  // While this list is empty the page shows "Ask for today's price on WhatsApp".
  prices: [] as { amount: string; label: string }[],
};
// ============================================================

const faqs = [
  {
    q: "How do I rent a self-drive car in Ujjain with EazTrav?",
    a: "Pick your date and time above and tap 'Book on WhatsApp', or call us directly. We'll confirm availability and share the details.",
  },
  {
    q: "How much does self-drive car rental cost in Ujjain?",
    a: car.prices.length
      ? `Our ${car.name} is ${car.prices[0].amount} ${car.prices[0].label}. Message us on WhatsApp for multi-day rentals.`
      : `Message us on WhatsApp with your dates and we'll share the price for the ${car.name} right away.`,
  },
  {
    q: "What do I need to rent a self-drive car?",
    a: "A valid driving licence and a government photo ID. We'll confirm the details on WhatsApp when you book.",
  },
  {
    q: "Can I take the car to Omkareshwar or Indore?",
    a: "Yes. Tell us your plan when booking and we'll confirm.",
  },
  {
    q: "I don't want to drive. Can I get a car with a driver?",
    a: "Yes. See our cab service in Ujjain, where a driver takes you to the temples, Indore airport or Omkareshwar.",
  },
];

function CarCard() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBook = () => {
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to rent the self-drive ${car.name} ${dateText} ${timeText}`;
    window.open(whatsappLink(message), "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300">
      <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
        <Image
          src={car.img}
          alt={`${car.name} self-drive car for rent in Ujjain`}
          width={320}
          height={250}
          className="mx-auto object-contain"
        />
      </div>

      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        Self-drive car
      </span>

      <h3 className="text-xl font-bold text-gray-900">{car.name}</h3>

      {/* Quick specs */}
      <div className="flex flex-wrap justify-center gap-2 mt-3 text-xs text-gray-600">
        <span className="bg-gray-100 px-3 py-1 rounded-full">👥 {car.seats} seats</span>
        {car.ac && <span className="bg-gray-100 px-3 py-1 rounded-full">❄️ AC</span>}
        <span className="bg-gray-100 px-3 py-1 rounded-full">⛽ {car.fuel}</span>
      </div>

      {car.prices.length > 0 ? (
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
      ) : (
        <p className="text-sm text-gray-600 mt-4 mb-6">Ask for today&apos;s price on WhatsApp</p>
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
    <>
      <div className="text-center mb-2 px-6 py-1">
        <h1 className="text-xl font-bold text-gray-900">📍Self-Drive Car Rental in Ujjain</h1>
        <p className="text-xs text-gray-600 max-w-md mx-auto">
          Clean, well-maintained car you drive yourself.
        </p>
      </div>

      <div className="max-w-md mx-auto px-4 mt-4">
        <CarCard />
      </div>

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
          Looking for a self-drive car on rent in Ujjain? EazTrav rents a clean, comfortable {car.name} near Freeganj and Mahakaleshwar Temple that you drive yourself. It suits families visiting the temples, Simhastha visitors, and day trips to Omkareshwar or Indore. Book in minutes on WhatsApp or call.
        </p>
      </div>
    </>
  );
}
