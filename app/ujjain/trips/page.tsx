import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Breadcrumb, BreadcrumbJsonLd, MoreInUjjain } from "../services";
import { fromPrice, rupees, tripGroups, trips } from "./trips";

// The list of all trips, grouped. Each card links to that trip's own page.
// Trips and prices come from trips.ts.

export const metadata: Metadata = {
  title: "Taxi Trips & Tour Packages from Ujjain | Omkareshwar, Maheshwar, Mandu | EazTrav",
  description:
    "Taxi and tour packages from Ujjain to Omkareshwar, Maheshwar, Mandu, Dewas Tekri, Indore airport and Pachmarhi. Sedan, Innova, Tempo Traveller and mini bus at fixed fares.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/trips" },
};

export default function TripsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbJsonLd name="Trips" path="/ujjain/trips" />
      <Navbar />
      <Breadcrumb current="Trips" />

      <div className="text-center px-6 pt-4 pb-2">
        <h1 className="text-2xl font-bold text-gray-900">📍Trips &amp; Tour Packages from Ujjain</h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto mt-2">
          Taxi with driver for temple trips, day tours and airport transfers. Sedan, SUV, Tempo Traveller or mini bus.
        </p>
      </div>

      {tripGroups.map((group) => {
        const groupTrips = trips.filter((t) => t.group === group.id);
        if (groupTrips.length === 0) return null;
        return (
          <section key={group.id} className="max-w-3xl mx-auto px-4 sm:px-6 mt-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              {group.icon} {group.title}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {groupTrips.map((trip) => (
                <Link
                  key={trip.slug}
                  href={`/ujjain/trips/${trip.slug}`}
                  className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
                >
                  <div>
                    <p className="font-semibold text-gray-900">{trip.name}</p>
                    <p className="text-xs text-gray-500 mt-1">{trip.stops.join(" → ")}</p>
                    <p className="text-xs text-gray-400 mt-1">{trip.oneWay ? "One way" : "Round trip"}</p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className="text-base font-bold text-gray-900">{rupees(fromPrice(trip))}</p>
                    <p className="text-xs text-gray-500">Sedan</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <p className="max-w-3xl mx-auto px-6 mt-6 text-xs text-gray-500 text-center">
        Prices shown are fixed sedan fares. Open a trip to see the fare for every vehicle. Extra stops or kilometres beyond the route are charged separately. All vehicles are subject to availability.
      </p>

      {/* SEO content */}
      <div className="max-w-2xl mx-auto px-6 py-12 text-sm text-gray-600 leading-relaxed text-center">
        <p>
          Planning a trip from Ujjain? EazTrav arranges taxis and tour packages from Ujjain to Omkareshwar Jyotirlinga, Maheshwar, Mandu, Dewas Tekri and Pachmarhi, plus Indore airport transfers and full-day Ujjain local sightseeing. Choose a sedan, Ertiga, Innova Crysta, Tempo Traveller or mini bus for your group and book on WhatsApp or call.
        </p>
      </div>

      <MoreInUjjain current="/ujjain/trips" />
    </main>
  );
}
