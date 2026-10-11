// ============================================================
// ✏️ TRIP PRICE LIST — edit prices and trips here
// ============================================================
// This file is the website's copy of the trip price sheet. Every trip page,
// the /ujjain/trips list and the sitemap are built from it, so a change here
// updates the whole site.
//
// - `prices` follow the same column order as the `vehicles` list below.
// - Prices are "starting from" fares (they can go up for extra stops or km).
// - To add a trip, copy one block, give it a new `slug` (the page address)
//   and fill in its prices.

export type VehicleGroup = "Sedan" | "SUV / MUV" | "Large group" | "Tempo Traveller & bus";

export type Vehicle = {
  name: string;
  seats: string; // "4+1" means 4 passengers + 1 driver
  group: VehicleGroup;
  img?: string; // optional photo in public/images/, e.g. "/images/innova.jpg"
};

// Icon shown for a vehicle that has no photo yet
export const groupIcons: Record<VehicleGroup, string> = {
  "Sedan": "🚗",
  "SUV / MUV": "🚙",
  "Large group": "🚐",
  "Tempo Traveller & bus": "🚌",
};

// Same order as the columns in the price sheet
export const vehicles: Vehicle[] = [
  { name: "Sedan car", seats: "4+1", group: "Sedan", img: "/images/desire.png" },
  { name: "Maruti Ertiga", seats: "6+1", group: "SUV / MUV", img: "/images/ertiga.png" },
  { name: "Kia Carens", seats: "6+1", group: "SUV / MUV", img: "/images/kia_carrens.png" },
  { name: "Chevrolet Tavera", seats: "8+1 / 9+1", group: "Large group", img: "/images/tavera.png" },
  { name: "Toyota Innova", seats: "6+1 / 7+1", group: "SUV / MUV", img: "/images/innova_old.png" },
  { name: "Toyota Innova Crysta", seats: "6+1 / 7+1", group: "SUV / MUV", img: "/images/crysta.png" },
  { name: "Tempo Traveller 12 seater", seats: "12+1", group: "Tempo Traveller & bus", img: "/images/traveller_17_1.png" },
  { name: "Tempo Traveller 17 seater", seats: "17+1", group: "Tempo Traveller & bus", img: "/images/traveller_17_1.png" },
  { name: "Tempo Traveller 19 seater", seats: "19+1", group: "Tempo Traveller & bus", img: "/images/traveller_25_1.png" },
  { name: "Tempo Traveller 25 seater", seats: "25+1", group: "Tempo Traveller & bus", img: "/images/traveller_25_1.png" },
  { name: "Mini Bus", seats: "25+1", group: "Tempo Traveller & bus", img: "/images/mini_bus.png" },
  { name: "Force Toofan", seats: "11+1", group: "Large group", img: "/images/toofan.png" },
];

export const vehicleGroups: VehicleGroup[] = ["Sedan", "SUV / MUV", "Large group", "Tempo Traveller & bus"];

export type TripGroup = {
  id: string;
  icon: string;
  title: string;
};

export const tripGroups: TripGroup[] = [
  { id: "narmada", icon: "🛕", title: "Omkareshwar, Maheshwar & Mandu" },
  { id: "local", icon: "🏙️", title: "Ujjain & Indore tours" },
  { id: "airport", icon: "✈️", title: "Airport transfer" },
  { id: "hills", icon: "⛰️", title: "Hill station" },
];

export type Trip = {
  slug: string; // page address: /ujjain/trips/<slug>
  name: string; // shown as the page heading, e.g. "Ujjain to Omkareshwar"
  stops: string[]; // the route, shown as Ujjain → Omkareshwar
  group: string; // one of the tripGroups ids
  oneWay?: boolean; // true for one-way fares; all others are round trips
  enquire?: boolean; // true if the plan is customised, so we ask customers to enquire
  description: string;
  prices: number[]; // same order as `vehicles`
};

export const trips: Trip[] = [
  {
    slug: "ujjain-to-omkareshwar",
    name: "Ujjain to Omkareshwar",
    stops: ["Ujjain", "Omkareshwar", "Ujjain"],
    group: "narmada",
    description:
      "Visit Omkareshwar Jyotirlinga on the banks of the Narmada, one of the twelve Jyotirlingas of Lord Shiva, and come back to Ujjain the same day.",
    prices: [3900, 4500, 5100, 5100, 5400, 6300, 7800, 8700, 9600, 11700, 13500, 6000],
  },
  {
    slug: "ujjain-omkareshwar-maheshwar",
    name: "Ujjain to Omkareshwar & Maheshwar",
    stops: ["Ujjain", "Omkareshwar", "Maheshwar", "Ujjain"],
    group: "narmada",
    description:
      "Omkareshwar Jyotirlinga plus Maheshwar, the riverside town of Ahilyabai Holkar's fort, Narmada ghats and famous Maheshwari sarees.",
    prices: [5200, 6000, 6800, 6800, 7200, 8400, 10400, 11600, 12800, 15600, 18000, 8000],
  },
  {
    slug: "ujjain-omkareshwar-maheshwar-mandu",
    name: "Ujjain to Omkareshwar, Maheshwar & Mandu",
    stops: ["Ujjain", "Omkareshwar", "Maheshwar", "Mandu", "Ujjain"],
    group: "narmada",
    description:
      "The full Narmada circuit: Omkareshwar Jyotirlinga, Maheshwar's fort and ghats, and the historic hill fort city of Mandu with Jahaz Mahal and Rani Roopmati's Pavilion.",
    prices: [6500, 7500, 8500, 8500, 9000, 10500, 13000, 14500, 16000, 19500, 22500, 10000],
  },
  {
    slug: "ujjain-maheshwar-mandu",
    name: "Ujjain to Maheshwar & Mandu",
    stops: ["Ujjain", "Maheshwar", "Mandu", "Ujjain"],
    group: "narmada",
    description:
      "Maheshwar's fort and Narmada ghats, then the hill fort city of Mandu with Jahaz Mahal and Rani Roopmati's Pavilion.",
    prices: [5200, 6000, 6800, 6800, 7200, 8400, 10400, 11600, 12800, 15600, 18000, 8000],
  },
  {
    slug: "indore-maheshwar-mandu",
    name: "Indore to Maheshwar & Mandu",
    stops: ["Indore", "Maheshwar", "Mandu", "Indore"],
    group: "narmada",
    description:
      "Starting from Indore: Maheshwar's fort and Narmada ghats, then the hill fort city of Mandu with Jahaz Mahal and Rani Roopmati's Pavilion.",
    prices: [4420, 5100, 5780, 5780, 6120, 7140, 8840, 9860, 10880, 13260, 15300, 6800],
  },
  {
    slug: "ujjain-local-sightseeing",
    name: "Ujjain Local Sightseeing",
    stops: ["Ujjain local temples"],
    group: "local",
    description:
      "A full day covering all the local temples of Ujjain, including Mahakaleshwar, Kal Bhairav, Harsiddhi, Mangalnath, Sandipani Ashram, Chintaman Ganesh and Ram Ghat.",
    prices: [2900, 3400, 3400, 3400, 3600, 4200, 5200, 5800, 6400, 7800, 9000, 4000],
  },
  {
    slug: "indore-city-tour",
    name: "Indore City Tour (Normal Package)",
    stops: ["Indore local tour"],
    group: "local",
    enquire: true,
    description:
      "A local sightseeing tour of Indore. The places covered can be customised to your plan.",
    prices: [3250, 3750, 4250, 4250, 4500, 5250, 6500, 7250, 8000, 9750, 11250, 5000],
  },
  {
    slug: "indore-adventure-tour",
    name: "Indore Adventure Package",
    stops: ["Indore adventure tour"],
    group: "local",
    enquire: true,
    description:
      "An Indore tour with adventure stops. The places covered can be customised to your plan.",
    prices: [4550, 5250, 5950, 5950, 6300, 7350, 9100, 10150, 11200, 13650, 15750, 7000],
  },
  {
    slug: "ujjain-to-dewas-tekri",
    name: "Ujjain to Dewas Tekri",
    stops: ["Ujjain", "Dewas Tekri", "Ujjain"],
    group: "local",
    description:
      "Visit the hilltop temples of Maa Chamunda and Maa Tulja Bhavani on Dewas Tekri and come back to Ujjain.",
    prices: [3250, 3750, 4250, 4250, 4500, 5250, 6500, 7250, 8000, 9750, 11250, 5000],
  },
  {
    slug: "ujjain-to-indore-airport",
    name: "Ujjain to Indore Airport Transfer",
    stops: ["Ujjain", "Indore Airport"],
    group: "airport",
    oneWay: true,
    description:
      "One-way transfer between Ujjain and Devi Ahilya Bai Holkar Airport, Indore. Same fare for airport pickup to Ujjain.",
    prices: [1560, 1860, 1870, 1870, 1980, 2310, 2860, 3190, 3520, 4290, 4950, 2200],
  },
  {
    slug: "ujjain-to-pachmarhi",
    name: "Ujjain / Indore to Pachmarhi",
    stops: ["Ujjain / Indore", "Pachmarhi", "Ujjain / Indore"],
    group: "hills",
    enquire: true,
    description:
      "A trip to Pachmarhi, the hill station of Madhya Pradesh, with waterfalls, caves and viewpoints in the Satpura hills. The number of days and stops can be planned with you.",
    prices: [13000, 15000, 17000, 17000, 18000, 21000, 26000, 29000, 32000, 39000, 45000, 20000],
  },
];
// ============================================================

// Formats 3900 as "₹3,900"
export function rupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}

// Lowest price for a trip, shown as "from ₹X"
export function fromPrice(trip: Trip) {
  return Math.min(...trip.prices);
}

export function getTrip(slug: string) {
  return trips.find((t) => t.slug === slug);
}
