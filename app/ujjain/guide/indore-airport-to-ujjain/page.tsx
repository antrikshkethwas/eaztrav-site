import type { Metadata } from "next";
import Link from "next/link";
import GuidePage, { CabCta, type Faq } from "../GuidePage";
import { getTrip, rupees, vehicles } from "../../trips/trips";

// Guide for people searching how to get from Indore airport to Ujjain.
// Fares come from the trip price list (trips.ts), so they stay in sync.

const trip = getTrip("ujjain-to-indore-airport")!;
const fare = (vehicleName: string) => rupees(trip.prices[vehicles.findIndex((v) => v.name === vehicleName)]);

export const metadata: Metadata = {
  title: `Indore Airport to Ujjain: Distance, Taxi Fare (${fare("Sedan car")}) & Bus | EazTrav`,
  description: `Indore airport to Ujjain is about 55 km, a little over an hour by road. Compare taxi, app cab and bus, with fixed one-way taxi fares from ${fare("Sedan car")} for a sedan.`,
  alternates: { canonical: "https://www.eaztrav.com/ujjain/guide/indore-airport-to-ujjain" },
};

const faqs: Faq[] = [
  {
    q: "How far is Ujjain from Indore airport?",
    a: "Devi Ahilya Bai Holkar airport in Indore is about 55 km from Mahakaleshwar temple in Ujjain. The drive takes a little over an hour, longer if Indore traffic is heavy.",
  },
  {
    q: "What is the taxi fare from Indore airport to Ujjain?",
    a: `EazTrav's fixed one-way fare is ${fare("Sedan car")} for a sedan, ${fare("Maruti Ertiga")} for an Ertiga and ${fare("Toyota Innova Crysta")} for an Innova Crysta. The same fare applies from Ujjain to the airport.`,
  },
  {
    q: "Is there a bus from Indore airport to Ujjain?",
    a: "There is no direct bus from the airport. You first go into Indore city to a bus stand and then take a bus to Ujjain, which is cheaper but slower, especially with luggage.",
  },
  {
    q: "How early should I leave Ujjain for a flight from Indore?",
    a: "Plan to leave Ujjain about 3 hours before your flight. That covers the drive, Indore traffic and airport check-in.",
  },
];

export default function IndoreAirportToUjjainGuide() {
  return (
    <GuidePage
      slug="indore-airport-to-ujjain"
      title="Indore Airport to Ujjain: Distance, Taxi Fare and Bus Options"
      intro="Ujjain has no airport of its own, so most visitors fly into Indore. Here's how far it is, how to get to Ujjain and what a taxi costs."
      updated="2026-10-17"
      faqs={faqs}
      bottomCta={
        <CabCta
          message="Hi, I want to book a cab from Indore airport to Ujjain"
          title="✈️ Indore airport ⇄ Ujjain cab"
          text={`One way from ${fare("Sedan car")} (sedan). Share your flight time and we'll be there.`}
          href="/ujjain/trips/ujjain-to-indore-airport"
          linkText="See all fares"
        />
      }
    >
      <p>
        The nearest airport to Ujjain is <strong>Devi Ahilya Bai Holkar Airport</strong> in Indore. It is the
        easiest way to reach Ujjain by air, with flights from most big Indian cities.
      </p>

      <h2>Distance and travel time</h2>
      <p>
        The airport is about <strong>55 km</strong> from Mahakaleshwar temple. The drive takes a little over an hour on
        the Indore-Ujjain highway, but leaving Indore can be slow at busy times, so allow up to an hour and a half.
      </p>

      <h2>Your options</h2>
      <h3>Pre-booked taxi (easiest)</h3>
      <p>
        The driver meets you at arrivals and takes you straight to your hotel or to Mahakal. You know the fare in
        advance and don&apos;t have to look for a cab after a flight. Share your flight number and arrival time when you
        book.
      </p>
      <h3>App cab from the airport</h3>
      <p>
        App cabs are available at Indore airport, but prices for an outstation ride to Ujjain change with demand and
        time of day.
      </p>
      <h3>Bus</h3>
      <p>
        There is no direct bus from the airport. You go into Indore city to a bus stand first, then take a bus to
        Ujjain. It is the cheapest option for one person travelling light, but it takes much longer.
      </p>

      <h2>Taxi fares between Indore airport and Ujjain</h2>
      <p>Fixed one-way fares with EazTrav, the same in both directions:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Vehicle</th><th>Seats</th><th>One-way fare</th></tr>
          </thead>
          <tbody>
            {["Sedan car", "Maruti Ertiga", "Kia Carens", "Toyota Innova Crysta", "Tempo Traveller 12 seater"].map((name) => (
              <tr key={name}>
                <td>{name}</td>
                <td>{vehicles.find((v) => v.name === name)?.seats}</td>
                <td>{fare(name)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        See every vehicle on the <Link href="/ujjain/trips/ujjain-to-indore-airport">Indore airport transfer page</Link>.
      </p>

      <h2>Tips</h2>
      <ul>
        <li>For an early-morning Bhasma Aarti, arrive in Ujjain the evening before.</li>
        <li>For the flight home, leave Ujjain about 3 hours before departure.</li>
        <li>
          Once in Ujjain, see <Link href="/ujjain/guide/getting-around">getting around Ujjain</Link> and our{" "}
          <Link href="/ujjain/guide/itinerary">1-day and 2-day itinerary</Link>.
        </li>
      </ul>
    </GuidePage>
  );
}
