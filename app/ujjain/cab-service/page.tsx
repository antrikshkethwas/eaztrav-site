import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import { Breadcrumb, BreadcrumbJsonLd, MoreInUjjain } from "../services";
import CabServiceContent from "./CabServiceContent";

export const metadata: Metadata = {
  title: "Cab Service in Ujjain | Taxi with Driver | EazTrav",
  description: "Book a cab in Ujjain with driver for Mahakal darshan, local sightseeing, Indore airport transfers and Omkareshwar trips. Book instantly via WhatsApp or call.",
  alternates: { canonical: "https://www.eaztrav.com/ujjain/cab-service" },
};

export default function CabServicePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BreadcrumbJsonLd name="Cab service" path="/ujjain/cab-service" />
      <Navbar />
      <Breadcrumb current="Cab service" />
      <CabServiceContent />
      <MoreInUjjain current="/ujjain/cab-service" />
    </main>
  );
}
