// Shared booking details and helpers used by the service pages.
// Change a phone number here and it updates on every service page.

export const SITE_URL = "https://www.eaztrav.com";
export const WHATSAPP_NUMBER = "919752087904"; // WhatsApp number, country code + number, no + or spaces
export const CALL_NUMBER = "+919752087904"; // Call number, with + and country code

// Advance payment taken on every booking (trip pages and the cab page).
// The amount charged is set on the Razorpay Payment Page; ADVANCE_AMOUNT is
// only the text shown on the site, so keep the two the same.
export const ADVANCE_AMOUNT = "₹349";

// Razorpay Payment Page "EazTrav Cab Booking" (₹349 advance).
// We open it with Trip, vehicle, Date of travel and pickup time already
// filled in, so every payment in the Razorpay dashboard shows what was booked.
export const RAZORPAY_PAYMENT_PAGE = "https://pages.razorpay.com/pl_TmilCW97hJe3er/view";

// Builds the Payment Page link with the booking details filled in.
// The names (trip, vehicle, date_of_travel, pickup_time) must match the field
// labels on the Razorpay page: lowercase, spaces replaced by underscores.
export function paymentPageLink(details: { trip: string; vehicle: string; date: string; time: string }) {
  const params = {
    trip: details.trip,
    vehicle: details.vehicle,
    date_of_travel: details.date,
    pickup_time: details.time,
  };
  // encodeURIComponent writes spaces as %20, which Razorpay reads correctly
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return `${RAZORPAY_PAYMENT_PAGE}?${query}`;
}

// Google Ads tag and conversion actions (Google Ads > Goals > Conversions,
// account 487-041-0160). layout.tsx loads the tag; trackConversion reports a tap.
export const GOOGLE_ADS_ID = "AW-18000796364";
export const ADS_CONVERSIONS = {
  whatsapp: "AW-18000796364/Z3CVCN6rhp0dEMy1uYdD", // "WhatsApp enquiry"
  call: "AW-18000796364/Qow9COGrhp0dEMy1uYdD", // "Call click"
  payment: "AW-18000796364/jASQCOSrhp0dEMy1uYdD", // "Advance payment click"
};

// Tells Google Ads that a visitor tapped WhatsApp, call or pay.
// Plain call/WhatsApp links are tracked automatically by layout.tsx;
// use this for buttons that open WhatsApp or Razorpay with window.open.
export function trackConversion(kind: keyof typeof ADS_CONVERSIONS) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "conversion", { send_to: ADS_CONVERSIONS[kind] });
}

// Builds a WhatsApp link that opens a chat with the message already typed
export function whatsappLink(message: string) {
  const text = message.replace(/\s+/g, " ").trim();
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Generate next 14 days as readable date strings
function getDateOptions() {
  const options: string[] = [];
  const today = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    const label = d.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
    options.push(label);
  }
  return options;
}

// Generate time slots every 30 minutes, 7 AM to 9 PM
function getTimeOptions() {
  const options: string[] = [];
  for (let h = 7; h <= 21; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour12 = h % 12 === 0 ? 12 : h % 12;
      const ampm = h < 12 ? "AM" : "PM";
      const minute = m === 0 ? "00" : m;
      options.push(`${hour12}:${minute} ${ampm}`);
    }
  }
  return options;
}

export const dateOptions = getDateOptions();
export const timeOptions = getTimeOptions();
