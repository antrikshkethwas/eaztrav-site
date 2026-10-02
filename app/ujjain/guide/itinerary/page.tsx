import type { Metadata } from "next";
import Link from "next/link";
import GuidePage, { ScooterCta, type Faq } from "../GuidePage";

export const metadata: Metadata = {
  title: "Ujjain 1-Day & 2-Day Itinerary: Places to Visit by Scooter | EazTrav",
  description:
    "Plan your Ujjain trip with a simple 1-day and 2-day itinerary covering Mahakal, Kal Bhairav, Harsiddhi, Ram Ghat, Mangalnath, Sandipani Ashram and more, with local travel tips.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/guide/itinerary" },
};

const faqs: Faq[] = [
  {
    q: "Is one day enough for Ujjain?",
    a: "One day is enough for Mahakal and the main temples if you start early and have your own transport. Take two days if you want the Bhasma Aarti, a relaxed Ram Ghat evening and the temples further out.",
  },
  {
    q: "What are the must-visit places in Ujjain?",
    a: "Mahakaleshwar Jyotirlinga, Mahakal Lok, Harsiddhi Mata temple, Kal Bhairav temple, Ram Ghat on the Shipra, Mangalnath temple, Sandipani Ashram, Chintaman Ganesh and Gadkalika temple.",
  },
  {
    q: "What is the best way to do Ujjain darshan?",
    a: "A rented scooter is the easiest and cheapest way for one or two people. You can go at your own pace, park close to each temple and skip haggling with autos at every stop.",
  },
  {
    q: "What is the best time to visit Ujjain?",
    a: "October to March is the most comfortable. Summers (April to June) are very hot, so plan temple visits for early morning and evening. Shravan (July to August) and Mahashivratri are the busiest times.",
  },
];

export default function ItineraryGuide() {
  return (
    <GuidePage
      slug="itinerary"
      title="Ujjain Itinerary: The Perfect 1-Day and 2-Day Trip Plan"
      intro="A practical, temple-by-temple plan for Ujjain darshan, with the order that saves the most time on the road and tips from locals."
      updated="2026-09-30"
      faqs={faqs}
    >
      <p>
        Most of Ujjain&apos;s famous temples sit within a 5 to 8 km radius of Mahakaleshwar, but they are spread across
        the old city, the river front and the outskirts. The plans below group nearby places together so you spend your
        time in darshan, not in traffic. They work best with your own two-wheeler, which lets you park right at the
        temple gates.
      </p>

      <h2>Ujjain in 1 day</h2>
      <h3>Morning: Mahakal and the old city</h3>
      <ul>
        <li><strong>6:00 AM, Mahakaleshwar temple.</strong> Go early for a shorter queue. If you have a Bhasma Aarti pass, you will already be inside from about 2 AM. See our <Link href="/ujjain/guide/mahakaleshwar-temple">Mahakal darshan guide</Link>.</li>
        <li><strong>8:30 AM, Mahakal Lok.</strong> Walk through the corridor right next to the temple.</li>
        <li><strong>9:30 AM, breakfast.</strong> Poha and jalebi from any stall near the temple is the classic Ujjain breakfast.</li>
        <li><strong>10:00 AM, Harsiddhi Mata temple and Bade Ganesh ka Mandir.</strong> Both are a short walk from Mahakal.</li>
      </ul>

      <h3>Midday: the temples to the north</h3>
      <ul>
        <li><strong>11:00 AM, Kal Bhairav temple.</strong> Famous for its unusual offering to the deity. About a 20 minute ride from Mahakal.</li>
        <li><strong>12:15 PM, Gadkalika temple and Bhartrihari caves.</strong> Both are on the way back from Kal Bhairav.</li>
        <li><strong>1:30 PM, lunch and rest.</strong> Avoid the midday sun, especially in summer.</li>
      </ul>

      <h3>Afternoon and evening</h3>
      <ul>
        <li><strong>3:30 PM, Sandipani Ashram.</strong> Where Lord Krishna is said to have studied. Mangalnath temple is a short ride further on.</li>
        <li><strong>4:30 PM, Mangalnath temple.</strong> Known for Mangal dosh puja, on a hill above the Shipra.</li>
        <li><strong>6:00 PM, Ram Ghat.</strong> End the day with the evening Shipra aarti on the ghats.</li>
      </ul>

      <ScooterCta message="Hi, I want to rent a scooter for a 1-day Ujjain darshan" />

      <h2>Ujjain in 2 days</h2>
      <h3>Day 1: Mahakal, old city and the river</h3>
      <ul>
        <li>Bhasma Aarti or early morning darshan at Mahakaleshwar</li>
        <li>Mahakal Lok, Harsiddhi Mata temple and Bade Ganesh ka Mandir</li>
        <li>Afternoon rest, then the Vedh Shala (Jantar Mantar observatory)</li>
        <li>Evening aarti and a walk along Ram Ghat</li>
      </ul>
      <h3>Day 2: the outer temples</h3>
      <ul>
        <li>Morning at Chintaman Ganesh temple, south of the city across the Shipra</li>
        <li>Kal Bhairav temple, Gadkalika temple and Bhartrihari caves</li>
        <li>Siddhavat ghat, Sandipani Ashram and Mangalnath temple in the afternoon</li>
        <li>Evening shopping and street food in the Freeganj market</li>
      </ul>

      <h2>Have a third day? Add Omkareshwar</h2>
      <p>
        Omkareshwar, another of the twelve Jyotirlingas, is about 140 km from Ujjain. Most visitors do it as a day
        trip by car. If you are travelling as a family, a car with a driver is more comfortable than a scooter for this
        drive.
      </p>

      <h2>Tips for your Ujjain trip</h2>
      <ul>
        <li>Start early. Temples are calmer and cooler before 9 AM.</li>
        <li>Carry a small bag you can leave in a locker. Phones and bags are generally not allowed inside Mahakal.</li>
        <li>Avoid Mondays and festival days at Mahakal if you want a quick darshan.</li>
        <li>Keep some small change for parking, prasad and shoe stands.</li>
        <li>Check our <Link href="/ujjain/guide/getting-around">getting around Ujjain guide</Link> for auto fares and distances.</li>
      </ul>
    </GuidePage>
  );
}
