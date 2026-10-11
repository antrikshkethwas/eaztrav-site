import Image from "next/image";
import { groupIcons, type Vehicle } from "../ujjain/trips/trips";

// A vehicle's photo, or its group icon (🚗 🚙 🚐 🚌) if it has no photo yet.
// Photos are set with `img` on each vehicle in app/ujjain/trips/trips.ts.
// "large" is used at the top of booking forms, "small" on vehicle cards.
export default function VehiclePicture({ vehicle, size }: { vehicle: Vehicle; size: "small" | "large" }) {
  if (vehicle.img) {
    return (
      <Image
        src={vehicle.img}
        alt={`${vehicle.name} cab with driver in Ujjain`}
        width={size === "large" ? 320 : 200}
        height={size === "large" ? 250 : 120}
        className={`mx-auto object-contain w-auto ${size === "large" ? "h-44" : "h-24"}`}
      />
    );
  }
  return (
    <div className={`flex items-center justify-center ${size === "large" ? "h-44 text-7xl" : "h-24 text-5xl"}`}>
      {groupIcons[vehicle.group]}
    </div>
  );
}
