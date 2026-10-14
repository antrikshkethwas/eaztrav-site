"use client";

import { useState } from "react";
import {
  ADVANCE_AMOUNT,
  CALL_NUMBER,
  dateOptions,
  paymentPageLink,
  timeOptions,
  whatsappLink,
} from "../../../lib/booking";
import VehiclePicture from "../../../components/VehiclePicture";
import { rupees, type Vehicle } from "../trips";

// Booking form on a trip page: pick a vehicle, date and time, then
// "Pay advance" opens the Razorpay Payment Page with those details already
// filled in, so the payment records which trip and vehicle was booked.
// WhatsApp and call are kept as small secondary links.
// The photo, seats and fare at the top change with the selected vehicle.
export default function TripBooking({
  tripName,
  vehicles,
  prices,
}: {
  tripName: string;
  vehicles: Vehicle[];
  prices: number[];
}) {
  // Starts on the first vehicle (sedan) so a photo and fare show straight away
  const [vehicle, setVehicle] = useState(vehicles[0].name);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const selectedIndex = vehicles.findIndex((v) => v.name === vehicle);
  const selected = vehicles[selectedIndex];

  // Opens the Razorpay Payment Page with trip, vehicle, date and time filled in
  const handlePay = () => {
    if (!date || !time) {
      setError("Please select your travel date and pickup time first.");
      return;
    }
    setError("");
    const link = paymentPageLink({
      trip: tripName,
      vehicle: `${vehicle} (${rupees(prices[selectedIndex])})`,
      date,
      time,
    });
    window.open(link, "_blank");
  };

  const handleBook = () => {
    const vehicleText = `in a ${vehicle} (${rupees(prices[selectedIndex])})`;
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to book the ${tripName} trip ${vehicleText} ${dateText} ${timeText}`;
    window.open(whatsappLink(message), "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Book this trip</h2>

      {/* Selected vehicle: photo, name, seats and fare */}
      {selected && (
        <div className="mb-4">
          <div className="bg-white border border-gray-100 rounded-2xl p-4">
            <VehiclePicture vehicle={selected} size="large" />
          </div>
          <p className="text-lg font-bold text-gray-900 mt-3">{selected.name}</p>
          <div className="flex flex-wrap justify-center gap-2 mt-2 text-xs text-gray-600">
            <span className="bg-gray-100 px-3 py-1 rounded-full">👥 {selected.seats}</span>
            <span className="bg-gray-100 px-3 py-1 rounded-full">🧑‍✈️ Driver included</span>
          </div>
          <p className="mt-3 text-2xl font-bold text-gray-900">
            {rupees(prices[selectedIndex])}
          </p>
        </div>
      )}

      {/* Vehicle dropdown */}
      <label htmlFor="trip-vehicle" className="block text-left text-xs font-semibold text-gray-600 mb-1 px-4">
        Choose vehicle
      </label>
      <select
        id="trip-vehicle"
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
        className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white mb-3"
      >
        {vehicles.map((v, i) => (
          <option key={v.name} value={v.name}>
            {v.name} ({v.seats}) – {rupees(prices[i])}
          </option>
        ))}
      </select>

      {/* Date and time dropdowns */}
      <div className="flex gap-3 mb-4">
        <select
          value={date}
          onChange={(e) => setDate(e.target.value)}
          aria-label="Date"
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
          aria-label="Time"
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

      {/* Main action: pay the advance on the Razorpay Payment Page */}
      <div className="border-t border-gray-100 pt-4">
        <button
          onClick={handlePay}
          className="w-full bg-[#173F73] text-white font-semibold py-3 rounded-full hover:opacity-90 transition"
        >
          Pay {ADVANCE_AMOUNT} advance to book
        </button>
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

        {/* Second option: ask on WhatsApp (sends whatever details are filled in) */}
        <button
          onClick={handleBook}
          className="w-full mt-3 bg-[#25D366] text-white font-semibold py-3 rounded-full hover:bg-[#1EBE5A] transition"
        >
          Enquire on WhatsApp
        </button>

        <p className="text-xs text-gray-500 mt-3">
          Secure payment by Razorpay · UPI, card or net banking. Your trip details are filled in for you.
        </p>
      </div>

      {/* Call, kept small */}
      <p className="text-xs text-gray-500 mt-4">
        Prefer to talk?{" "}
        <a href={`tel:${CALL_NUMBER}`} className="text-[#173F73] font-semibold underline">
          Call us
        </a>
      </p>
    </div>
  );
}
