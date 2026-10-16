import type { Metadata } from "next";
import Link from "next/link";
import GuidePage, { CabCta, type Faq } from "../GuidePage";
import { getTrip, rupees, vehicles } from "../../trips/trips";

// Guide for people searching how to get from Ujjain to Omkareshwar.
// Fares come from the trip price list (trips.ts), so they stay in sync.

const trip = getTrip("ujjain-to-omkareshwar")!;
const combo = getTrip("ujjain-omkareshwar-maheshwar")!;
const fare = (vehicleName: string, t = trip) => rupees(t.prices[vehicles.findIndex((v) => v.name === vehicleName)]);

export const metadata: Metadata = {
  title: `Ujjain to Omkareshwar: Distance, Time, Route & Taxi Fare (${fare("Sedan car")}) | EazTrav`,
  description: `Ujjain to Omkareshwar is about 140 km, roughly 3 to 3.5 hours by road. Route, a one-day plan, tips for darshan and fixed taxi fares from ${fare("Sedan car")} for a sedan round trip.`,
  alternates: { canonical: "https://www.eaztrav.com/ujjain/guide/ujjain-to-omkareshwar" },
};

const faqs: Faq[] = [
  {
    q: "How far is Omkareshwar from Ujjain?",
    a: "Omkareshwar is about 140 km from Ujjain by road. The drive usually takes 3 to 3.5 hours each way, depending on traffic around Indore.",
  },
  {
    q: "Can I visit Omkareshwar from Ujjain and come back the same day?",
    a: "Yes. Leave Ujjain early in the morning, have darshan and lunch at Omkareshwar, and you are back in Ujjain by evening. On Mondays, in Shravan and at festivals the darshan queue is longer, so start earlier.",
  },
  {
    q: "What is the taxi fare from Ujjain to Omkareshwar?",
    a: `EazTrav's fixed round-trip fare is ${fare("Sedan car")} for a sedan (4 passengers), ${fare("Maruti Ertiga")} for an Ertiga and ${fare("Toyota Innova Crysta")} for an Innova Crysta. Extra stops or kilometres beyond the route are charged separately.`,
  },
  {
    q: "Can I add Maheshwar to an Omkareshwar trip?",
    a: `Yes. The Ujjain to Omkareshwar and Maheshwar trip starts at ${fare("Sedan car", combo)} for a sedan and covers both places in one day.`,
  },
];

export default function UjjainToOmkareshwarGuide() {
  return (
    <GuidePage
      slug="ujjain-to-omkareshwar"
      title="Ujjain to Omkareshwar: Distance, Route, Day Plan and Taxi Fare"
      intro="Everything you need to plan a day trip from Ujjain to Omkareshwar Jyotirlinga: how far it is, how long it takes, what to expect at the temple and what a taxi costs."
      updated="2026-10-17"
      faqs={faqs}
      bottomCta={
        <CabCta
          message="Hi, I want to book a cab from Ujjain to Omkareshwar"
          title="🛕 Ujjain to Omkareshwar by cab"
          text={`Round trip with driver from ${fare("Sedan car")} (sedan). Ertiga, Innova Crysta and Tempo Traveller also available.`}
          href="/ujjain/trips/ujjain-to-omkareshwar"
          linkText="See all fares"
        />
      }
    >
      <p>
        Omkareshwar is one of the twelve Jyotirlingas of Lord Shiva, and most pilgrims who come to Ujjain for
        Mahakaleshwar also visit it. The two are close enough to do Omkareshwar as a day trip from Ujjain.
      </p>

      <h2>Distance and travel time</h2>
      <p>
        Omkareshwar is about <strong>140 km</strong> from Ujjain. The usual road goes via Indore, and the drive takes
        roughly <strong>3 to 3.5 hours</strong> each way. Traffic in and around Indore is the main thing that adds time,
        so an early start helps.
      </p>

      <h2>A simple one-day plan</h2>
      <ol>
        <li><strong>6 to 7 AM:</strong> leave Ujjain.</li>
        <li><strong>Around 10 AM:</strong> reach Omkareshwar and go for darshan. The temple is on an island in the Narmada and you cross to it on foot or by boat.</li>
        <li><strong>Afternoon:</strong> lunch, and visit Mamleshwar temple on the other bank if you have time.</li>
        <li><strong>3 to 4 PM:</strong> start back, reaching Ujjain in the evening.</li>
      </ol>
      <p>
        On Mondays, during Shravan and at festivals like Mahashivratri the queues are much longer. On those days leave
        earlier, or plan an overnight stay.
      </p>

      <h2>Ways to get there</h2>
      <h3>Taxi with driver (easiest)</h3>
      <p>
        A cab picks you up from your hotel in Ujjain, waits while you have darshan and brings you back, so you don&apos;t
        have to change buses or carry bags. It is the most practical option for families and groups.
      </p>
      <h3>Bus</h3>
      <p>
        There are buses, but usually you change at Indore, which turns the trip into a long day with waiting time.
        It is cheaper for one or two people who don&apos;t mind the extra time.
      </p>

      <h2>Taxi fares from Ujjain to Omkareshwar</h2>
      <p>Fixed round-trip fares with EazTrav (extra stops or kilometres are charged separately):</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Vehicle</th><th>Seats</th><th>Round-trip fare</th></tr>
          </thead>
          <tbody>
            {["Sedan car", "Maruti Ertiga", "Toyota Innova Crysta", "Tempo Traveller 12 seater", "Tempo Traveller 17 seater"].map((name) => (
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
        See every vehicle on the <Link href="/ujjain/trips/ujjain-to-omkareshwar">Ujjain to Omkareshwar trip page</Link>.
      </p>

      <h2>Make it a bigger trip</h2>
      <ul>
        <li>
          <Link href="/ujjain/trips/ujjain-omkareshwar-maheshwar">Omkareshwar and Maheshwar</Link>: add the riverside
          town of Maheshwar, with its fort and Narmada ghats.
        </li>
        <li>
          <Link href="/ujjain/trips/ujjain-omkareshwar-maheshwar-mandu">Omkareshwar, Maheshwar and Mandu</Link>: the
          full Narmada circuit, including the hill fort city of Mandu.
        </li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li>Carry as little as possible into the temple; footwear has to be left outside.</li>
        <li>Wear comfortable shoes for the walk across the bridge and the steps.</li>
        <li>
          Visiting Mahakaleshwar too? See our <Link href="/ujjain/guide/mahakaleshwar-temple">Mahakal darshan guide</Link>.
        </li>
      </ul>
    </GuidePage>
  );
}
