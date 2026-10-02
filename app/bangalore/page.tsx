import Link from "next/link";
import Image from "next/image";

export default function Bangalore() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
{/* Contact Bar */}
      <div className="bg-gray-900 text-gray-300 text-xs px-6 py-2 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
          <span>📍 Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh (pin:456010)</span>
          <span>✉️ easy.stay.ujjain@gmail.com</span>
          <a href="tel:+919752087904" className="hover:text-white transition">📞 9752087904</a>
          <a href="tel:+918305587779" className="hover:text-white transition">📞 8305587779</a>
        </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <Link href="/" className="group flex flex-col min-w-max">
          <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
        </Link>
      </nav>

      {/* Coming Soon content */}
      <div className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="text-6xl mb-6">🚗</div>
        <span className="inline-block bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-4">
          Coming Soon
        </span>
        <h1 className="text-4xl font-bold text-gray-900 max-w-lg">
          Cabs in Bangalore are on their way
        </h1>
        <p className="mt-4 text-gray-600 max-w-md">
          We&apos;re setting things up. Check back soon, or head over to Ujjain where scooters are ready to book.
        </p>
        <Link
          href="/ujjain"
          className="mt-8 bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Explore Ujjain Instead
        </Link>
      </div>
    </main>
  );
}

