// Shared booking details and helpers used by the service pages.
// Change a phone number here and it updates on every service page.

export const SITE_URL = "https://www.eaztrav.com";
export const WHATSAPP_NUMBER = "919752087904"; // WhatsApp number, country code + number, no + or spaces
export const CALL_NUMBER = "+919752087904"; // Call number, with + and country code

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
