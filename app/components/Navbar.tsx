import Image from "next/image";
import Link from "next/link";
import { CALL_NUMBER } from "../lib/booking";

// Top bar shown on the Ujjain pages: logo on the left, call button on the right
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 py-2 bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      {/* Left: Clickable Logo redirecting to Home */}
      <Link href="/" className="group flex flex-col min-w-max">
        <Image src="/images/logo.png" alt="eazTrav" width={160} height={50} priority />
      </Link>

      {/* Right: Clickable Call Button */}
      <a
        href={`tel:${CALL_NUMBER}`}
        className="flex items-center gap-1.5 bg-[#173F73] hover:bg-opacity-90 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition shadow-sm whitespace-nowrap"
      >
        <span>📞</span> <span>book on call</span>
      </a>
    </nav>
  );
}
