import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import TrustStrip from "../../components/TrustStrip";
import { getHotel, hotels } from "../hotels";
import HotelWelcome from "./HotelWelcome";

// Welcome page a hotel guest lands on after scanning the hotel's QR code,
// e.g. /h/demo. One page is built for every hotel in ../hotels.ts.

export function generateStaticParams() {
  return hotels.map((hotel) => ({ code: hotel.code }));
}

// Codes that aren't in hotels.ts show "page not found"
export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps<"/h/[code]">): Promise<Metadata> {
  const { code } = await params;
  const hotel = getHotel(code);
  return {
    title: hotel ? `Cabs & trips for guests of ${hotel.name} | EazTrav` : "EazTrav",
    // These pages are only for hotel guests: keep them out of Google
    robots: { index: false, follow: false },
  };
}

export default async function HotelPage({ params }: PageProps<"/h/[code]">) {
  const { code } = await params;
  const hotel = getHotel(code);
  if (!hotel) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-12">
      <Navbar />
      <div className="text-center px-6 pt-6">
        <p className="text-3xl">🙏</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-2">Welcome, guests of {hotel.name}</h1>
        <p className="text-sm text-gray-600 mt-2 max-w-md mx-auto">
          Cabs with driver for Mahakal darshan, Ujjain sightseeing, Omkareshwar and Indore airport. Fixed fares, book
          in a minute on WhatsApp.
        </p>
        <TrustStrip />
      </div>
      <HotelWelcome code={hotel.code} hotelName={hotel.name} />
    </main>
  );
}
