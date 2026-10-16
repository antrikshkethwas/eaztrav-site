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
// If the visitor came through a hotel's QR code, the hotel code is added to
// the trip text (e.g. "Ujjain to Omkareshwar [Ref: HG07]") so the payment
// shows which hotel to pay commission to. Only call this from a click handler.
export function paymentPageLink(details: { trip: string; vehicle: string; date: string; time: string }) {
  const ref = getReferral();
  const params = {
    trip: ref ? `${details.trip} [Ref: ${ref}]` : details.trip,
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

// Tells Google Ads that a visitor tapped WhatsApp, call or pay, and sends the
// same tap to Google Analytics as a "generate_lead" event (method = whatsapp,
// call or payment, plus the hotel code if there is one), so Analytics can show
// enquiries per page and per traffic source.
// Plain call/WhatsApp links are tracked automatically by layout.tsx;
// use this for buttons that open WhatsApp or Razorpay with window.open.
export function trackConversion(kind: keyof typeof ADS_CONVERSIONS) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.("event", "conversion", { send_to: ADS_CONVERSIONS[kind] });
  gtag?.("event", "generate_lead", { method: kind, hotel_ref: getReferral() ?? "none" });
}

// Builds a WhatsApp link that opens a chat with the message already typed
export function whatsappLink(message: string) {
  const text = message.replace(/\s+/g, " ").trim();
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// ------------------------------------------------------------
// Hotel referrals
// ------------------------------------------------------------
// When a guest scans a hotel's QR code they land on /h/<code>. That page saves
// the hotel code in the browser for REFERRAL_DAYS days, so if the guest books
// later (even from another page), the WhatsApp message and the payment carry
// the code and the hotel can be paid its commission.
// The key and the 30 days are repeated in layout.tsx (plain WhatsApp links);
// keep them the same.
export const REFERRAL_KEY = "eaztrav_ref";
const REFERRAL_DAYS = 30;

export function saveReferral(code: string) {
  try {
    localStorage.setItem(REFERRAL_KEY, JSON.stringify({ code, savedAt: Date.now() }));
  } catch {
    // Private browsing or storage blocked: the referral just isn't remembered
  }
}

// The hotel code saved on this browser, or null if none / older than 30 days
export function getReferral(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const saved = JSON.parse(localStorage.getItem(REFERRAL_KEY) ?? "null");
    if (!saved?.code) return null;
    if (Date.now() - saved.savedAt > REFERRAL_DAYS * 24 * 60 * 60 * 1000) return null;
    return saved.code;
  } catch {
    return null;
  }
}

// Adds "(Ref: CODE)" to a WhatsApp message if the visitor came from a hotel.
// Only call this from a click handler (it reads the browser's storage).
export function withReferral(message: string) {
  const ref = getReferral();
  return ref ? `${message} (Ref: ${ref})` : message;
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
