import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Contact us | EazTrav",
  description: "Contact EazTrav for scooter and bike rentals in Ujjain. Call or WhatsApp for instant booking, or reach us by email.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <Link href="/" className="group flex flex-col min-w-max">
          <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
        </Link>
      </nav>


      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Book a scooter on call</h1>
        <p className="text-gray-600 mb-10">
          For the quickest response, just give us a call or drop a message on WhatsApp.
        </p>

        {/* Call buttons — primary action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          
          <a
            href="tel:+919752087904"
            className="flex-1 bg-[#173F73] hover:bg-opacity-90 text-white font-semibold py-4 rounded-full transition text-lg"
          >
            📞 9752087904
          </a>
          <a
            href="tel:+918305587779"
            className="flex-1 bg-[#173F73] hover:bg-opacity-90 text-white font-semibold py-4 rounded-full transition text-lg"
          >
            📞 8305587779
          </a>
        </div>

        {/* Explore scooters CTA */}
      <div className="max-w-lg mx-auto px-6 py-16 text-center">
        <a
            href="/ujjain/scooter-rental"
            className="flex-1 bg-[#173F73] hover:bg-opacity-90 text-white font-semibold py-4 rounded-full transition text-lg"
          >
            Or select a scooter 🛵 →
          </a>    
      </div>


        {/* Secondary info */}
        <div className="border-t border-gray-100 pt-10 text-left space-y-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 mb-3">Write us a feedback</h1>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
            <a href="mailto:easy.stay.ujjain@gmail.com" className="text-gray-900 hover:text-yellow-600 transition">
              easy.stay.ujjain@gmail.com
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Address</p>
            <p className="text-gray-900">
              Parshvnath Tower, Freeganj, Ujjain, Madhya Pradesh 456010
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Hours</p>
            <p className="text-gray-900">7:00 AM – 9:00 PM, all days</p>
          </div>
        </div>
      </div>
    </main>
  );
}