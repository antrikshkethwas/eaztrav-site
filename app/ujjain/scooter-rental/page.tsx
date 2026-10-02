import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import { Breadcrumb, BreadcrumbJsonLd, MoreInUjjain } from "../services";
import ScooterRentalContent from "./ScooterRentalContent";

export const metadata: Metadata = {
  title: "Rent Scooters in Ujjain | EazTrav",
  description: "Rent Suzuki Access 125 or Honda Activa 125 in Ujjain. Hourly and daily rates, book instantly via WhatsApp or call.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/scooter-rental" },
};

export default function ScooterRentalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbJsonLd name="Scooter rental" path="/ujjain/scooter-rental" />
      <Navbar />
      <Breadcrumb current="Scooter rental" />
      <ScooterRentalContent />
      <MoreInUjjain current="/ujjain/scooter-rental" />
    </main>
  );
}
