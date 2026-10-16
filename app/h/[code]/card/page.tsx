import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import QRCode from "qrcode";
import { CALL_NUMBER, SITE_URL } from "../../../lib/booking";
import { fromPrice, getTrip, rupees, type Trip } from "../../../ujjain/trips/trips";
import { getHotel, hotels } from "../../hotels";

// Printable QR card for a hotel's reception desk, e.g. /h/demo/card.
// Open it, press Ctrl+P and print (A6 card, or several on A4).
// The QR code opens the hotel's welcome page, with UTM tags so Google
// Analytics shows these visits as source "hotel", campaign <code>.

export function generateStaticParams() {
  return hotels.map((hotel) => ({ code: hotel.code }));
}

export const dynamicParams = false;

export const metadata: Metadata = {
  title: "Hotel QR card | EazTrav",
  robots: { index: false, follow: false },
};

// Fares printed on the card (trip addresses from trips.ts)
const cardTrips = ["ujjain-local-sightseeing", "ujjain-to-omkareshwar", "ujjain-to-indore-airport"]
  .map(getTrip)
  .filter((t): t is Trip => Boolean(t));

export default async function HotelCardPage({ params }: PageProps<"/h/[code]/card">) {
  const { code } = await params;
  const hotel = getHotel(code);
  if (!hotel) notFound();

  const qrTarget = `${SITE_URL}/h/${hotel.code}?utm_source=hotel&utm_medium=qr&utm_campaign=${hotel.code}`;
  const qrSvg = await QRCode.toString(qrTarget, { type: "svg", margin: 1, color: { dark: "#173F73" } });

  return (
    <main className="min-h-screen bg-gray-100 print:bg-white flex flex-col items-center py-8 print:py-0">
      <style>{`@page { size: A6; margin: 0; }`}</style>

      <p className="text-sm text-gray-600 mb-4 text-center px-4 print:hidden">
        Card for <span className="font-semibold">{hotel.name}</span>. Press Ctrl+P to print (A6, or scale to fit on A4).
      </p>

      {/* The card itself: A6 size (105 × 148 mm) */}
      <div className="w-[105mm] h-[148mm] bg-white shadow-lg print:shadow-none flex flex-col items-center text-center px-[8mm] py-[7mm]">
        <Image src="/images/logo.png" alt="EazTrav" width={140} height={44} priority />
        <p className="text-xl font-bold text-gray-900 mt-2">Need a cab?</p>
        <p className="text-sm text-gray-600">Scan to book on WhatsApp</p>

        <div className="w-[48mm] h-[48mm] mt-3" dangerouslySetInnerHTML={{ __html: qrSvg }} />

        <div className="w-full mt-3 space-y-1">
          {cardTrips.map((trip) => (
            <div key={trip.slug} className="flex justify-between text-[11px] border-b border-gray-100 pb-1">
              <span className="text-gray-700">{trip.name}</span>
              <span className="font-bold text-gray-900">{rupees(fromPrice(trip))}</span>
            </div>
          ))}
          <p className="text-[9px] text-gray-500">Sedan fares. SUV, Tempo Traveller and mini bus also available.</p>
        </div>

        <p className="mt-auto text-xs text-gray-700">
          📞 / WhatsApp <span className="font-bold">{CALL_NUMBER.replace("+91", "")}</span>
        </p>
        <p className="text-[10px] text-gray-500 mt-1">
          Hotel code: <span className="font-bold text-gray-900">{hotel.code.toUpperCase()}</span>
        </p>
      </div>
    </main>
  );
}
