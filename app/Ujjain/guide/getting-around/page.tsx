import type { Metadata } from "next";
import Link from "next/link";
import GuidePage, { ScooterCta, type Faq } from "../GuidePage";

export const metadata: Metadata = {
  title: "Getting Around Ujjain: Railway Station to Mahakal, Auto Fares & Scooter Rental | EazTrav",
  description:
    "How to get from Ujjain railway station, bus stand or Indore airport to Mahakaleshwar temple, what autos and e-rickshaws cost, and why a rented scooter is the easiest way to see Ujjain.",
  alternates: { canonical: "https://www.eaztrav.com/Ujjain/guide/getting-around" },
};

const faqs: Faq[] = [
  {
    q: "How do I get from Ujjain railway station to Mahakal temple?",
    a: "Mahakal is about 2 km from Ujjain Junction. Shared autos and e-rickshaws wait outside the station and usually charge ₹30 to ₹50 per seat, or ₹100 to ₹150 for the whole auto. The ride takes 5 to 10 minutes.",
  },
  {
    q: "How far is Ujjain from Indore airport?",
    a: "Indore's Devi Ahilya Bai Holkar airport is about 55 km from Mahakaleshwar temple, a little over an hour by road. Taxis and buses run between Indore and Ujjain all day.",
  },
  {
    q: "Is it easy to rent a scooter in Ujjain?",
    a: "Yes. EazTrav rents Honda Activa 125 and Suzuki Access 125 scooters from ₹150 per hour or ₹400 per day. Book on WhatsApp or call 9752087904. You need a valid driving licence.",
  },
  {
    q: "Is a scooter or an auto better for Ujjain darshan?",
    a: "For one or two people visiting several temples, a scooter is usually cheaper and faster. Autos charge for each leg, while a scooter costs one fixed amount for the day and can park close to temple gates.",
  },
];

export default function GettingAroundGuide() {
  return (
    <GuidePage
      slug="getting-around"
      title="Getting Around Ujjain: Station to Mahakal, Auto Fares and Scooter Rental"
      intro="How to reach Mahakaleshwar temple from the station, bus stand or airport, what local transport costs, and the easiest way to cover all the temples."
      updated="2026-09-30"
      faqs={faqs}
    >
      <p>
        Ujjain is a compact city, but its temples are spread out and the old-city lanes around Mahakal are narrow and
        often barricaded for crowds. Knowing your options before you arrive saves a lot of time and haggling.
      </p>

      <h2>Arriving in Ujjain</h2>
      <h3>By train: Ujjain Junction (UJN)</h3>
      <p>
        Ujjain Junction is the main station and is only about 2 km from Mahakaleshwar temple. Autos and e-rickshaws wait
        outside the station at all hours. Shared seats usually cost ₹30 to ₹50, and a full auto to the temple area
        costs around ₹100 to ₹150. Vikram Nagar station, about 6 km away, is a smaller stop some trains use.
      </p>
      <h3>By bus</h3>
      <p>
        Buses from Indore, Bhopal and other cities arrive at the Dewas Gate and Nanakheda bus stands. Dewas Gate is
        close to the station and the old city, while Nanakheda is further south. Autos run from both to Mahakal.
      </p>
      <h3>By air: Indore airport</h3>
      <p>
        The nearest airport is Devi Ahilya Bai Holkar airport in Indore, about 55 km from Mahakal. The drive takes a
        little over an hour on the four-lane Indore-Ujjain highway. You can take a taxi, or a bus from Indore to Ujjain.
      </p>

      <h2>Distances from Mahakaleshwar temple</h2>
      <p>Approximate road distances to help you plan:</p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr><th>Place</th><th>Distance from Mahakal</th></tr>
          </thead>
          <tbody>
            <tr><td>Harsiddhi Mata temple</td><td>under 1 km (walkable)</td></tr>
            <tr><td>Ram Ghat</td><td>about 1 km</td></tr>
            <tr><td>Ujjain railway station</td><td>about 2 km</td></tr>
            <tr><td>Gadkalika temple</td><td>about 3 to 4 km</td></tr>
            <tr><td>Sandipani Ashram</td><td>about 4 km</td></tr>
            <tr><td>Kal Bhairav temple</td><td>about 5 to 6 km</td></tr>
            <tr><td>Mangalnath temple</td><td>about 5 to 6 km</td></tr>
            <tr><td>Chintaman Ganesh temple</td><td>about 6 to 7 km</td></tr>
            <tr><td>Indore airport</td><td>about 55 km</td></tr>
            <tr><td>Omkareshwar</td><td>about 140 km</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Ways to get around the city</h2>
      <h3>Autos and e-rickshaws</h3>
      <p>
        Easy to find near the station, Mahakal and Freeganj. Agree on the fare before you sit, as meters are rarely
        used. For a full temple circuit, drivers usually quote a fixed package price, which adds up for a small group.
      </p>
      <h3>Taxis and cabs</h3>
      <p>
        Good for families, airport transfers and day trips to Omkareshwar. App cabs are available but can be slow to
        arrive in the old city.
      </p>
      <h3>Rent a scooter (our pick for 1 to 2 people)</h3>
      <p>
        With your own scooter you can reach Kal Bhairav, Mangalnath and Chintaman Ganesh without waiting or haggling,
        park close to each temple and change your plan whenever you like. A full day costs less than a couple of long
        auto rides. You need a valid two-wheeler driving licence, and helmets are a must on the road.
      </p>

      <ScooterCta message="Hi, I want to rent a scooter in Ujjain. I am arriving by train" />

      <h2>Parking near Mahakal</h2>
      <p>
        Vehicles are not allowed right up to the temple. There are paid parking areas around the Mahakal Lok corridor
        and the Rudra Sagar side, and two-wheelers can usually park closer than cars. On Mondays, festivals and during
        Shravan, the police close more roads, so a scooter is much easier than a car on those days.
      </p>

      <p>
        Planning your day? See our <Link href="/Ujjain/guide/itinerary">1-day and 2-day Ujjain itinerary</Link> and the{" "}
        <Link href="/Ujjain/guide/mahakaleshwar-temple">Mahakal darshan and Bhasma Aarti guide</Link>.
      </p>
    </GuidePage>
  );
}
