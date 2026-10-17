// ============================================================
// ✏️ BANGALORE AIRPORT TAXI FARES — edit prices here
// ============================================================
// The airport taxi page (/bangalore/airport-taxi) and the Bangalore city page
// are built from this file, so a change here updates both.
//
// - `fare`: fixed price for a pickup from or drop to Bangalore airport,
//   for trips up to INCLUDED_KM kilometres.
// - `extraPerKm`: charged for every kilometre beyond INCLUDED_KM.

export const AIRPORT_NAME = "Kempegowda International Airport (BLR)";
export const INCLUDED_KM = 50;

export type AirportCar = {
  category: string; // shown as the car's class, e.g. "Sedan"
  icon: string;
  name: string;
  seats: string; // "4+1" means 4 passengers + 1 driver
  fare: number;
  extraPerKm: number;
  img?: string; // optional photo in public/images/
  note?: string; // one short line under the car name
};

export const airportCars: AirportCar[] = [
  {
    category: "Sedan",
    icon: "🚗",
    name: "Suzuki Dzire",
    seats: "4+1",
    fare: 1200,
    extraPerKm: 12,
    img: "/images/desire.png",
    note: "Comfortable sedan, best value",
  },
  {
    category: "Luxury EV",
    icon: "⚡",
    name: "MG ZS EV",
    seats: "4+1",
    fare: 2100,
    extraPerKm: 18,
    note: "Electric SUV: quiet, smooth and spacious",
  },
];
// ============================================================

// Formats 1200 as "₹1,200"
export function rupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Lowest airport fare, used in titles ("from ₹1,200")
export const lowestFare = Math.min(...airportCars.map((c) => c.fare));
