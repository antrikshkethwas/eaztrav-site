const cabs = [
  { name: "Tata Nexon", type: "Compact SUV", price: "₹12/km" },
  { name: "Suzuki Dezire", type: "Sedan", price: "₹10/km" },
  { name: "Suzuki Wagon-R", type: "Hatchback", price: "₹8/km" },
  { name: "MG ZS EV", type: "Electric SUV", price: "₹15/km" },
];

export default function Bangalore() {
  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-gray-900">Cabs in Bangalore</h1>
        <p className="mt-4 text-gray-600 max-w-md mx-auto">
          Book a reliable ride anywhere in Bangalore, anytime.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {cabs.map((cab) => (
          <div
            key={cab.name}
            className="border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="text-4xl mb-4">🚗</div>
            <h3 className="text-lg font-semibold text-gray-900">{cab.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{cab.type}</p>
            <p className="text-sm font-medium text-gray-900 mt-3">{cab.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}