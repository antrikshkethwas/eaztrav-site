import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import { Breadcrumb, BreadcrumbJsonLd, MoreInUjjain } from "../services";
import CarRentalContent from "./CarRentalContent";

export const metadata: Metadata = {
  title: "Self-Drive Car Rental in Ujjain | EazTrav",
  description: "Rent a self-drive car in Ujjain. Drive a Maruti Suzuki Dzire yourself for temple visits, Omkareshwar or Indore trips. Book instantly via WhatsApp or call.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/car-rental" },
};

export default function CarRentalPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbJsonLd name="Self-drive car rental" path="/ujjain/car-rental" />
      <Navbar />
      <Breadcrumb current="Self-drive car rental" />
      <CarRentalContent />
      <MoreInUjjain current="/ujjain/car-rental" />
    </main>
  );
}
