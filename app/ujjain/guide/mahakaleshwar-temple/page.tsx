import type { Metadata } from "next";
import Link from "next/link";
import GuidePage, { ScooterCta, type Faq } from "../GuidePage";

export const metadata: Metadata = {
  title: "Mahakaleshwar Temple Guide: Darshan Timings, Bhasma Aarti Booking & Tips | EazTrav",
  description:
    "Mahakaleshwar temple timings, Bhasma Aarti online booking, dress code, what to carry and how to reach Mahakal in Ujjain. Updated guide with local tips.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/guide/mahakaleshwar-temple" },
};

const faqs: Faq[] = [
  {
    q: "What are the Mahakaleshwar temple darshan timings?",
    a: "The temple is usually open from about 4:00 AM to 11:00 PM. Last entry is around 10:00 PM. Timings change on festivals like Mahashivratri and during the Shravan month, so check the official temple website before you go.",
  },
  {
    q: "How do I book the Bhasma Aarti at Mahakal?",
    a: "Book online on the official Shri Mahakaleshwar temple website or app. Bookings usually open about 30 days in advance and fill up fast. The pass fee has been ₹200 per person. There is no offline counter, so avoid agents who offer to 'arrange' a pass.",
  },
  {
    q: "What is the dress code for Bhasma Aarti?",
    a: "Men wear a dhoti (and usually a kurta or gamcha), and women wear a saree or salwar suit. Normal clothes are fine for general darshan.",
  },
  {
    q: "How far is Mahakaleshwar temple from Ujjain railway station?",
    a: "About 2 km. It is a 5 to 10 minute ride by auto or scooter.",
  },
  {
    q: "Can I take my phone inside Mahakal temple?",
    a: "Mobile phones, bags and leather items are generally not allowed inside the main temple. Lockers and shoe stands are available near the entry gates.",
  },
];

export default function MahakaleshwarGuide() {
  return (
    <GuidePage
      slug="mahakaleshwar-temple"
      title="Mahakaleshwar Temple Ujjain: Darshan Timings, Bhasma Aarti & Visitor Guide"
      intro="Everything you need for a smooth Mahakal darshan: timings, how to book the Bhasma Aarti, what to wear, what to leave behind and how to get there."
      updated="2026-09-30"
      faqs={faqs}
    >
      <p>
        Shri Mahakaleshwar is one of the twelve Jyotirlingas of Lord Shiva and the heart of Ujjain. It sits on the
        banks of the Rudra Sagar lake, next to the Mahakal Lok corridor, and draws lakhs of devotees every month. A
        little planning makes the visit much easier, especially on Mondays, weekends and festival days.
      </p>

      <h2>Mahakaleshwar temple timings</h2>
      <p>
        The temple opens early in the morning for the Bhasma Aarti and closes late at night after the Shayan Aarti.
        These are the usual daily timings:
      </p>
      <div className="overflow-x-auto">
        <table>
          <thead>
            <tr>
              <th>What</th>
              <th>Usual time</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Temple opens</td><td>about 4:00 AM</td></tr>
            <tr><td>Bhasma Aarti (book online)</td><td>4:00 AM to 6:00 AM</td></tr>
            <tr><td>Morning (Naivedya) Aarti</td><td>7:00 AM to 7:30 AM</td></tr>
            <tr><td>Bhog Aarti</td><td>10:00 AM to 10:30 AM</td></tr>
            <tr><td>Sandhya Aarti</td><td>5:00 PM to 5:30 PM</td></tr>
            <tr><td>Shayan Aarti</td><td>10:30 PM to 11:00 PM</td></tr>
            <tr><td>Temple closes</td><td>about 11:00 PM</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Timings shift slightly between summer and winter and change completely on Mahashivratri, Nag Panchami and the
        Mondays of Shravan. Always confirm on the official temple website before you plan your day.
      </p>

      <h2>How to book the Bhasma Aarti</h2>
      <p>
        The Bhasma Aarti is the most famous ritual at Mahakal, performed before sunrise. Seats are limited, so book as
        early as you can.
      </p>
      <ol>
        <li>Go to the official Shri Mahakaleshwar temple website or mobile app. Do not use third-party agents.</li>
        <li>Bookings usually open around 30 days before the date and sell out quickly for weekends and festivals.</li>
        <li>Fill in the details of each person exactly as on their photo ID. The fee has been ₹200 per person.</li>
        <li>Carry the same original photo ID (Aadhaar, passport or voter ID) on the day. It is checked at the gate.</li>
        <li>Reach the Bhasma Aarti gate by about 2:00 AM. Entry closes well before the aarti starts.</li>
      </ol>
      <p>
        Didn&apos;t get a pass? You can still have general darshan any time during the day, and
        try again for a pass on a later date.
      </p>

      <h2>Dress code and what to carry</h2>
      <ul>
        <li><strong>Bhasma Aarti:</strong> men in a dhoti, women in a saree or salwar suit.</li>
        <li><strong>General darshan:</strong> any modest clothing is fine.</li>
        <li><strong>Leave behind:</strong> mobile phones, bags, leather belts and wallets are not allowed inside. Use the lockers near the gates.</li>
        <li><strong>Carry:</strong> your photo ID, some cash for prasad and a small water bottle for the queue.</li>
      </ul>

      <h2>General darshan: how long does it take?</h2>
      <p>
        On a normal weekday morning, general darshan can take 30 minutes to an hour. On Mondays, weekends and
        festival days it can take several hours. The quietest time is usually weekday afternoons, roughly 12 PM to
        3 PM. A paid quick-darshan (shighra darshan) ticket is also sold at the temple and online, which cuts the
        wait on busy days.
      </p>

      <ScooterCta message="Hi, I want to rent a scooter for Mahakal darshan" />

      <h2>How to reach Mahakaleshwar temple</h2>
      <ul>
        <li><strong>From Ujjain railway station:</strong> about 2 km, 5 to 10 minutes by auto or scooter.</li>
        <li><strong>From Freeganj:</strong> about 3 km across the railway bridge into the old city.</li>
        <li><strong>From Indore airport:</strong> about 55 km, a little over an hour by road.</li>
      </ul>
      <p>
        The lanes around the temple get very crowded, and cars are often stopped at barricades some distance away. A
        scooter is the easiest way to get close, park and move on to the next temple. See our{" "}
        <Link href="/ujjain/guide/getting-around">guide to getting around Ujjain</Link> for fares and parking tips.
      </p>

      <h2>Places to visit near Mahakal</h2>
      <p>
        Harsiddhi Mata temple and Bade Ganesh ka Mandir are a short walk away, and Ram Ghat on the Shipra river is
        about a kilometre from the temple. Kal Bhairav, Mangalnath and Sandipani Ashram are a few kilometres out and
        are best done on a scooter. Our{" "}
        <Link href="/ujjain/guide/itinerary">1-day and 2-day Ujjain itinerary</Link> puts them in an easy order.
      </p>
    </GuidePage>
  );
}
