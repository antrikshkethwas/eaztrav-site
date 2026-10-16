// A short row of reasons to trust EazTrav, shown near the top of the booking
// pages so first-time visitors see them before they're asked to book.
// Keep every line true: these are promises to customers.
const points = [
  { icon: "📍", text: "Local office in Freeganj, Ujjain" },
  { icon: "✅", text: "Fixed fare for your route" },
  { icon: "🕖", text: "Open 7 AM – 9 PM, every day" },
];

export default function TrustStrip() {
  return (
    <ul className="flex flex-wrap justify-center gap-2 px-4 mt-3 text-xs text-gray-700">
      {points.map((p) => (
        <li key={p.text} className="bg-white border border-gray-100 shadow-sm px-3 py-1 rounded-full">
          {p.icon} {p.text}
        </li>
      ))}
    </ul>
  );
}
