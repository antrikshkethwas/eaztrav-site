// A short row of reasons to trust EazTrav, shown near the top of the booking
// pages so first-time visitors see them before they're asked to book.
// Keep every line true: these are promises to customers.
const points = [
  { icon: "📍", text: "Office in Freeganj, Ujjain" },
  { icon: "✅", text: "Fixed fares" },
  { icon: "🕖", text: "7 AM – 9 PM daily" },
];

export default function TrustStrip() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-3 gap-y-1 px-4 mt-3 text-[11px] sm:text-xs text-gray-700">
      {points.map((p) => (
        <li key={p.text} className="whitespace-nowrap">
          {p.icon} {p.text}
        </li>
      ))}
    </ul>
  );
}
