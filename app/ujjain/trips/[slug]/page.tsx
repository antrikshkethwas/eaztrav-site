import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import { ADVANCE_AMOUNT } from "../../../lib/booking";
import { Breadcrumb, BreadcrumbJsonLd, MoreInUjjain } from "../../services";
import { fromPrice, getTrip, rupees, trips, vehicleGroups, vehicles, type Trip } from "../trips";
import TripBooking from "./TripBooking";

// One page per trip, e.g. /ujjain/trips/ujjain-to-omkareshwar.
// Next.js builds a page for every trip listed in trips.ts.

export function generateStaticParams() {
  return trips.map((trip) => ({ slug: trip.slug }));
}

// Addresses that aren't in trips.ts show "page not found"
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/ujjain/trips/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) return {};
  return {
    title: `${trip.name} | Taxi Fare from ${rupees(fromPrice(trip))} | EazTrav`,
    description: `${trip.name} taxi with driver, ${trip.oneWay ? "one way" : "round trip"}. Sedan from ${rupees(fromPrice(trip))}, plus Ertiga, Innova Crysta, Tempo Traveller and mini bus. ${trip.description}`,
    alternates: { canonical: `https://www.eaztrav.com/ujjain/trips/${trip.slug}` },
  };
}

function tripFaqs(trip: Trip) {
  const tripType = trip.oneWay ? "one-way" : "round-trip";
  const crysta = vehicles.findIndex((v) => v.name === "Toyota Innova Crysta");
  const faqs = [
    {
      q: `How much is the taxi fare for ${trip.name}?`,
      a: `Fares start from ${rupees(trip.prices[0])} for a sedan (4 passengers) and ${rupees(trip.prices[crysta])} for an Innova Crysta. These are ${tripType} starting fares. The final price can go up if you add stops or extra kilometres.`,
    },
    {
      q: "Which vehicles can I book?",
      a: "Sedan, Maruti Ertiga, Kia Carens, Toyota Innova and Innova Crysta, Chevrolet Tavera, Force Toofan, Tempo Travellers from 12 to 25 seats and a mini bus for groups of up to 25. All vehicles are subject to availability.",
    },
    {
      q: "How do I book this trip?",
      a: `Choose your vehicle, date and time above and pay the ${ADVANCE_AMOUNT} advance online to confirm your booking. If you have questions first, send us your trip details on WhatsApp or call us.`,
    },
  ];
  if (trip.enquire) {
    faqs.push({
      q: "Can this trip be customised?",
      a: "Yes. Message us on WhatsApp with your plan and we'll share the places covered and the final price.",
    });
  }
  return faqs;
}

export default async function TripPage({ params }: PageProps<"/ujjain/trips/[slug]">) {
  const { slug } = await params;
  const trip = getTrip(slug);
  if (!trip) notFound();

  const path = `/ujjain/trips/${trip.slug}`;
  const relatedTrips = trips.filter((t) => t.group === trip.group && t.slug !== trip.slug);
  const faqs = tripFaqs(trip);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbJsonLd name={trip.name} path={path} parent={{ name: "Trips", path: "/ujjain/trips" }} />
      <Navbar />
      <Breadcrumb current={trip.name} parent={{ name: "Trips", path: "/ujjain/trips" }} />

      {/* Heading */}
      <div className="text-center px-6 pt-4">
        <h1 className="text-2xl font-bold text-gray-900">📍{trip.name}</h1>
        <p className="text-sm text-gray-600 mt-2">
          Taxi with driver · {trip.oneWay ? "One way" : "Round trip"} · from{" "}
          <span className="font-bold text-gray-900">{rupees(fromPrice(trip))}</span>
        </p>
        <p className="text-sm text-[#173F73] font-semibold mt-3">{trip.stops.join(" → ")}</p>
        <p className="text-sm text-gray-600 max-w-lg mx-auto mt-3">{trip.description}</p>
        {trip.enquire && (
          <p className="text-sm text-gray-600 max-w-lg mx-auto mt-2">
            This trip can be customised. Enquire on WhatsApp for the places covered and full details.
          </p>
        )}
      </div>

      {/* Booking form, with the advance payment inside it */}
      <div className="max-w-md mx-auto px-4 mt-6">
        <TripBooking tripName={trip.name} vehicles={vehicles} prices={trip.prices} />
      </div>

      {/* Price list, grouped by vehicle type */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 mt-12">
        <h2 className="text-lg font-bold text-gray-900 text-center">{trip.name} fares by vehicle</h2>
        <p className="text-xs text-gray-500 text-center mt-1 mb-4">
          {trip.oneWay ? "One-way" : "Round-trip"} starting fares. Extra stops or kilometres may cost more. Subject to availability.
        </p>
        <div className="space-y-4">
          {vehicleGroups.map((group) => {
            const rows = vehicles
              .map((vehicle, i) => ({ vehicle, price: trip.prices[i] }))
              .filter((row) => row.vehicle.group === group);
            return (
              <div key={group} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
                <p className="bg-gray-50 px-4 py-2 text-sm font-semibold text-gray-900">{group}</p>
                {rows.map(({ vehicle, price }) => (
                  <div key={vehicle.name} className="flex items-center justify-between gap-3 px-4 py-3 border-t border-gray-100">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{vehicle.name}</p>
                      <p className="text-xs text-gray-500">👥 {vehicle.seats}</p>
                    </div>
                    <p className="text-sm font-bold text-gray-900 whitespace-nowrap">{rupees(price)} onwards</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
        <p className="text-xs text-gray-500 text-center mt-3">&quot;4+1&quot; means 4 passengers plus the driver.</p>
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

      {/* Other trips in the same group */}
      {relatedTrips.length > 0 && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-12">
          <h2 className="text-lg font-bold text-gray-900 text-center mb-4">Similar trips</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedTrips.map((t) => (
              <Link
                key={t.slug}
                href={`/ujjain/trips/${t.slug}`}
                className="flex items-center justify-between gap-3 bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{t.stops.join(" → ")}</p>
                </div>
                <p className="text-sm font-bold text-gray-900 whitespace-nowrap">from {rupees(fromPrice(t))}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="text-center mt-6 mb-12">
        <Link href="/ujjain/trips" className="text-sm text-[#173F73] font-semibold hover:underline">
          See all trips &amp; prices →
        </Link>
      </div>

      <MoreInUjjain current="/ujjain/trips" />
    </main>
  );
}
