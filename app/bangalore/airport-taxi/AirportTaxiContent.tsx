"use client";

import { useState } from "react";
import Image from "next/image";
import { CALL_NUMBER, dateOptions, trackConversion, whatsappLink, withReferral } from "../../lib/booking";
import { airportCars, INCLUDED_KM, rupees } from "../airport";

// Every half hour, all day: flights land and leave at any time
const allDayTimes = Array.from({ length: 48 }, (_, i) => {
  const h = Math.floor(i / 2);
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${i % 2 ? "30" : "00"} ${h < 12 ? "AM" : "PM"}`;
});

// Booking card on the Bangalore airport taxi page: choose a car, direction,
// area, date, time and flight, then "Book on WhatsApp" opens a chat with all
// of it typed in. Call is the second option. (No online advance payment for
// Bangalore yet.)
export default function AirportTaxiContent() {
  const [carName, setCarName] = useState(airportCars[0].name);
  const [direction, setDirection] = useState<"to" | "from">("to");
  const [area, setArea] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [flight, setFlight] = useState("");

  const car = airportCars.find((c) => c.name === carName) ?? airportCars[0];

  const handleBook = () => {
    const route = direction === "to" ? `from ${area || "my area"} to Bangalore airport` : `from Bangalore airport to ${area || "my area"}`;
    const article = /^[aeiou]|^MG/i.test(car.name) ? "an" : "a";
    const parts = [
      `Hi, I want to book a Bangalore airport cab ${route}`,
      `in ${article} ${car.name} (${rupees(car.fare)})`,
      date && `on ${date}`,
      time && `at ${time}`,
      flight && `(flight ${flight})`,
    ].filter(Boolean);
    trackConversion("whatsapp");
    window.open(whatsappLink(withReferral(parts.join(" "))), "_blank");
  };

  const inputClass = "w-full border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white";

  return (
    <div className="max-w-md mx-auto px-4 mt-6">
      {/* Car choice */}
      <div className="grid grid-cols-2 gap-3">
        {airportCars.map((c) => {
          const selected = c.name === carName;
          return (
            <button
              key={c.name}
              onClick={() => setCarName(c.name)}
              className={`bg-white border rounded-2xl p-3 text-center shadow-sm transition ${
                selected ? "border-[#173F73] ring-2 ring-[#173F73]/20" : "border-gray-100"
              }`}
            >
              <span className="block text-[11px] font-semibold text-[#3FA3D1] uppercase tracking-wide">
                {c.icon} {c.category}
              </span>
              {c.img ? (
                <Image src={c.img} alt={`${c.name} airport taxi in Bangalore`} width={160} height={100} className="mx-auto h-16 w-auto object-contain my-1" />
              ) : (
                <span className="block text-5xl h-16 leading-[4rem] my-1">🚙</span>
              )}
              <span className="block font-semibold text-gray-900 text-sm">{c.name}</span>
              <span className="block text-xs text-gray-500">👥 {c.seats}</span>
              <span className="block text-xl font-bold text-gray-900 mt-1">{rupees(c.fare)}</span>
              <span className="block text-[10px] text-gray-500">
                up to {INCLUDED_KM} km · then ₹{c.extraPerKm}/km
              </span>
            </button>
          );
        })}
      </div>

      {/* Trip details */}
      <div className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm mt-4 space-y-3">
        <div className="grid grid-cols-2 gap-2">
          {(["to", "from"] as const).map((d) => (
            <button
              key={d}
              onClick={() => setDirection(d)}
              className={`text-sm font-semibold py-2 rounded-full border transition ${
                direction === d ? "bg-[#173F73] text-white border-[#173F73]" : "bg-white text-gray-700 border-gray-200"
              }`}
            >
              {d === "to" ? "To airport" : "From airport"}
            </button>
          ))}
        </div>

        <input
          type="text"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          placeholder={direction === "to" ? "Pickup area (e.g. Whitefield)" : "Drop area (e.g. Koramangala)"}
          aria-label={direction === "to" ? "Pickup area" : "Drop area"}
          className={inputClass}
        />

        <div className="flex gap-3">
          <select value={date} onChange={(e) => setDate(e.target.value)} aria-label="Date" className={inputClass}>
            <option value="">Select date</option>
            {dateOptions.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
          <select value={time} onChange={(e) => setTime(e.target.value)} aria-label="Time" className={inputClass}>
            <option value="">{direction === "to" ? "Pickup time" : "Landing time"}</option>
            {allDayTimes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        <input
          type="text"
          value={flight}
          onChange={(e) => setFlight(e.target.value)}
          placeholder="Flight number (optional, e.g. 6E 123)"
          aria-label="Flight number"
          className={inputClass}
        />

        <button
          onClick={handleBook}
          className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-full hover:bg-[#1EBE5A] transition"
        >
          Book on WhatsApp · {rupees(car.fare)}
        </button>
        <p className="text-xs text-gray-500 text-center">Your trip details are typed in for you. No payment needed to book.</p>

        <a
          href={`tel:${CALL_NUMBER}`}
          className="block w-full text-center border-2 border-[#173F73] text-[#173F73] font-semibold py-2.5 rounded-full hover:bg-[#173F73] hover:text-white transition"
        >
          📞 Call to book
        </a>
      </div>
    </div>
  );
}
