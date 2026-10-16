// ============================================================
// ✏️ PARTNER HOTELS — add a hotel here to give it a QR code
// ============================================================
// Each hotel gets:
//   - a welcome page for its guests:  eaztrav.com/h/<code>
//   - a printable QR card/standee:     eaztrav.com/h/<code>/card
// When a guest scans the QR code, the site remembers the hotel's code for
// 30 days and adds "(Ref: <code>)" to their WhatsApp message and payment,
// so you know which hotel to pay commission to.
//
// - `code`: short, lowercase letters/numbers/dashes, never changed once printed
//   (the QR code points to it). E.g. "shree-ganesh" or "hg07".
// - `name`: shown on the welcome page ("Welcome, guests of <name>").
// - `area`: optional, just for your own reference.
// After adding a hotel, deploy the site, then open /h/<code>/card and print it.

export type Hotel = {
  code: string;
  name: string;
  area?: string;
};

export const hotels: Hotel[] = [
  // Test entry so the pages can be checked before real hotels are added.
  // Remove it (or leave it: it's hidden from Google) once real hotels are in.
  { code: "demo", name: "Demo Hotel", area: "Freeganj" },
];
// ============================================================

export function getHotel(code: string) {
  return hotels.find((h) => h.code === code);
}
