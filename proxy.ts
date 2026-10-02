import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Sends visitors (and Google) from the old page addresses to the new ones.
// The city pages used to start with a capital letter (/Ujjain, /Bangalore)
// and are now lowercase. A permanent redirect (308) tells Google the page
// has moved for good, so the old address passes its ranking to the new one.
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const lower = pathname.toLowerCase();

  // Already a lowercase address: nothing to do
  if (pathname === lower) return NextResponse.next();

  const url = request.nextUrl.clone();
  // The old /Ujjain page was the scooter page, which now lives at /ujjain/scooter-rental
  url.pathname = pathname === "/Ujjain" ? "/ujjain/scooter-rental" : lower;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/Ujjain/:path*", "/Bangalore/:path*"],
};
