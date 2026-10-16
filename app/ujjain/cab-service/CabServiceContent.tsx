"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import {
  ADVANCE_AMOUNT,
  CALL_NUMBER,
  dateOptions,
  paymentPageLink,
  timeOptions,
  trackConversion,
  whatsappLink,
  withReferral,
} from "../../lib/booking";
import TrustStrip from "../../components/TrustStrip";
import VehiclePicture from "../../components/VehiclePicture";
import { FaqJsonLd } from "../services";
import { fromPrice, getTrip, groupIcons, rupees, vehicleGroups, vehicles, type Trip } from "../trips/trips";

// ============================================================
// ✏️ CAB PAGE SETTINGS — edit here
// ============================================================
// The vehicles and their prices come from the trip price list in
// ../trips/trips.ts, so there is nothing to change here when prices change.

// Trips shown under "Popular cab trips" (trip addresses from trips.ts)
const popularTrips = [
  "ujjain-local-sightseeing",
  "ujjain-to-indore-airport",
  "ujjain-to-omkareshwar",
  "ujjain-omkareshwar-maheshwar-mandu",
]
  .map(getTrip)
  .filter((t): t is Trip => Boolean(t));

// The two prices shown on each vehicle card, taken from these trips
const localTrip = getTrip("ujjain-local-sightseeing");
const airportTrip = getTrip("ujjain-to-indore-airport");

// Sedan fares shown right under the page heading, so visitors see prices
// before the booking form (label shown, trip address from trips.ts)
const headlineFares = [
  { label: "Ujjain local, full day", slug: "ujjain-local-sightseeing" },
  { label: "Indore airport", slug: "ujjain-to-indore-airport" },
  { label: "Omkareshwar", slug: "ujjain-to-omkareshwar" },
]
  .map((f) => ({ ...f, trip: getTrip(f.slug) }))
  .filter((f): f is typeof f & { trip: Trip } => Boolean(f.trip));
// ============================================================

const faqs = [
  {
    q: "How do I book a cab in Ujjain with EazTrav?",
    a: `Choose a vehicle, enter your pickup and drop, pick a date and time, and tap "Book on WhatsApp": your trip details are typed in for you and we reply with the fare and confirmation. You can also call us, or pay the ${ADVANCE_AMOUNT} advance online to confirm straight away.`,
  },
  {
    q: "How much does a cab in Ujjain cost?",
    a: "A full day of Ujjain local sightseeing is ₹2,900 in a sedan and an Indore airport transfer is ₹1,560. See our trips page for every route and vehicle, or send us your trip on WhatsApp for a quote.",
  },
  {
    q: "Which vehicles can I book?",
    a: "Sedan, Maruti Ertiga, Kia Carens, Toyota Innova and Innova Crysta, Chevrolet Tavera, Force Toofan, Tempo Travellers from 12 to 25 seats and a mini bus for groups of up to 25. All vehicles are subject to availability.",
  },
  {
    q: "Can I book a cab from Ujjain to Indore airport or Omkareshwar?",
    a: "Yes. We do Indore airport pickups and drops, and trips to Omkareshwar, Maheshwar, Mandu and more.",
  },
  {
    q: "Does the cab come with a driver?",
    a: "Yes, every cab booking includes a driver. If you'd rather drive yourself, see our self-drive car rental in Ujjain.",
  },
];

function CabBookingCard({
  vehicleName,
  setVehicleName,
}: {
  vehicleName: string;
  setVehicleName: (name: string) => void;
}) {
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [error, setError] = useState("");

  const selected = vehicles.find((v) => v.name === vehicleName);

  // Opens the Razorpay Payment Page with the cab booking details filled in
  const handlePay = () => {
    if (!vehicleName || !pickup || !drop || !date || !time) {
      setError("Please choose a vehicle and fill in pickup, drop, date and time first.");
      return;
    }
    setError("");
    const link = paymentPageLink({ trip: `Cab: ${pickup} to ${drop}`, vehicle: vehicleName, date, time });
    trackConversion("payment");
    window.open(link, "_blank");
  };

  const handleBook = () => {
    const vehicleText = vehicleName ? `(${vehicleName})` : "";
    const fromText = pickup ? `from ${pickup}` : "";
    const toText = drop ? `to ${drop}` : "";
    const dateText = date ? `on ${date}` : "";
    const timeText = time ? `at ${time}` : "";
    const message = `Hi, I want to book a cab ${vehicleText} in Ujjain ${fromText} ${toText} ${dateText} ${timeText}`;
    trackConversion("whatsapp");
    window.open(whatsappLink(withReferral(message)), "_blank");
  };

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 text-center shadow-sm hover:shadow-xl transition duration-300">
      {selected && (
        <div className="bg-white border border-gray-100 rounded-2xl p-4 mb-5">
          <VehiclePicture vehicle={selected} size="large" />
        </div>
      )}

      <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
        Cab with driver
      </span>

      <h2 className="text-xl font-bold text-gray-900">{selected ? selected.name : "Book a cab"}</h2>

      {/* Quick specs */}
      <div className="flex flex-wrap justify-center gap-2 mt-3 mb-6 text-xs text-gray-600">
        {selected && <span className="bg-gray-100 px-3 py-1 rounded-full">👥 {selected.seats}</span>}
        <span className="bg-gray-100 px-3 py-1 rounded-full">🧑‍✈️ Driver included</span>
      </div>

      {/* Vehicle */}
      <select
        value={vehicleName}
        onChange={(e) => setVehicleName(e.target.value)}
        aria-label="Vehicle"
        className="w-full border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 bg-white mb-3"
      >
        <option value="">Select vehicle</option>
        {vehicles.map((v) => (
          <option key={v.name} value={v.name}>
            {v.name} ({v.seats})
          </option>
        ))}
      </select>

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

      {/* Main action: book on WhatsApp (sends whatever details are filled in) */}
      <div className="border-t border-gray-100 pt-4">
        <button
          onClick={handleBook}
          className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-full hover:bg-[#1EBE5A] transition"
        >
          Book on WhatsApp
        </button>
        <p className="text-xs text-gray-500 mt-2">Ask anything first. No payment needed to enquire.</p>

        {/* Second option: pay the advance now on the Razorpay Payment Page */}
        <button
          onClick={handlePay}
          className="w-full mt-4 border-2 border-[#173F73] text-[#173F73] font-semibold py-2.5 rounded-full hover:bg-[#173F73] hover:text-white transition"
        >
          Or pay {ADVANCE_AMOUNT} advance to confirm now
        </button>
        {error && <p className="text-xs text-red-600 mt-2">{error}</p>}

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

export default function CabServiceContent() {
  const [vehicleName, setVehicleName] = useState("");
  const bookingRef = useRef<HTMLDivElement>(null);

  // "Book this vehicle" on a vehicle card: pick it in the form and scroll up to it
  const chooseVehicle = (name: string) => {
    setVehicleName(name);
    bookingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div className="text-center mb-2 px-6 py-1">
        <h1 className="text-xl font-bold text-gray-900">📍Cab Service in Ujjain</h1>
        <p className="text-xs text-gray-600 max-w-md mx-auto">
          Cab with driver for temple visits, airport transfers and day trips. Sedan, SUV, Tempo Traveller or mini bus.
        </p>

        {/* Sedan fares up front, each linking to its trip page */}
        <div className="grid grid-cols-3 gap-2 max-w-md mx-auto mt-3">
          {headlineFares.map((f) => (
            <Link
              key={f.slug}
              href={`/ujjain/trips/${f.slug}`}
              className="bg-[#173F73]/5 border border-[#173F73]/15 rounded-xl px-2 py-1.5 hover:bg-[#173F73]/10 transition"
            >
              <span className="block text-sm font-bold text-gray-900">{rupees(fromPrice(f.trip))}</span>
              <span className="block text-[10px] leading-tight text-gray-600">{f.label}</span>
            </Link>
          ))}
        </div>
        <p className="text-[10px] text-gray-500 mt-1">Sedan fares · SUV, Tempo Traveller &amp; bus below</p>
        <TrustStrip />
      </div>

      <div ref={bookingRef} className="max-w-md mx-auto px-4 mt-4 scroll-mt-20">
        <CabBookingCard vehicleName={vehicleName} setVehicleName={setVehicleName} />
      </div>


      {/* All vehicles, grouped */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 text-center">Our vehicles</h2>
        <p className="text-xs text-gray-500 text-center mt-1">
          Fixed fares. &quot;4+1&quot; means 4 passengers plus the driver. All vehicles are subject to availability.
        </p>

        {vehicleGroups.map((group) => {
          const groupVehicles = vehicles
            .map((vehicle, i) => ({ vehicle, i }))
            .filter(({ vehicle }) => vehicle.group === group);
          return (
            <div key={group} className="mt-6">
              <h3 className="text-base font-semibold text-gray-900 mb-3">
                {groupIcons[group]} {group}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {groupVehicles.map(({ vehicle, i }) => (
                  <div
                    key={vehicle.name}
                    className={`bg-white border rounded-2xl p-4 shadow-sm text-center transition ${
                      vehicle.name === vehicleName ? "border-[#173F73] ring-2 ring-[#173F73]/20" : "border-gray-100"
                    }`}
                  >
                    <VehiclePicture vehicle={vehicle} size="small" />
                    <p className="font-semibold text-gray-900 mt-2">{vehicle.name}</p>
                    <p className="text-xs text-gray-500">👥 {vehicle.seats}</p>

                    <div className="flex justify-center gap-4 mt-3 text-left">
                      {localTrip && (
                        <div>
                          <p className="text-sm font-bold text-gray-900">{rupees(localTrip.prices[i])}</p>
                          <p className="text-[11px] text-gray-500">Ujjain local, full day</p>
                        </div>
                      )}
                      {airportTrip && (
                        <div>
                          <p className="text-sm font-bold text-gray-900">{rupees(airportTrip.prices[i])}</p>
                          <p className="text-[11px] text-gray-500">Indore airport, one way</p>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => chooseVehicle(vehicle.name)}
                      className="mt-4 w-full bg-[#173F73] text-white text-sm font-semibold py-2 rounded-full hover:opacity-90 transition"
                    >
                      Book this vehicle
                    </button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Popular trips, linking to their trip pages */}
      <section className="max-w-3xl mx-auto px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Popular cab trips from Ujjain</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {popularTrips.map((trip) => (
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
            See all trips &amp; prices →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <FaqJsonLd faqs={faqs} />
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
          Need a cab or taxi in Ujjain? EazTrav offers cabs with driver from Freeganj for Mahakaleshwar darshan, Ujjain local sightseeing, Indore airport pickup and drop, and trips to Omkareshwar, Maheshwar and Mandu. Choose a sedan, Ertiga, Kia Carens, Innova Crysta, Tempo Traveller or mini bus for your group, and book on WhatsApp or call.
        </p>
      </div>
    </>
  );
}
