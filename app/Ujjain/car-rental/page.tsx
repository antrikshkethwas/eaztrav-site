import type { Metadata } from "next";
import CarRentalContent from "./CarRentalContent";

export const metadata: Metadata = {
  title: "Car Rental in Ujjain | EazTrav",
  description: "Rent a car in Ujjain for Mahakal darshan, Omkareshwar trips or Indore airport transfers. Daily rates, book instantly via WhatsApp or call.",
};

export default function CarRentalPage() {
  return <CarRentalContent />;
}
