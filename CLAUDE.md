# EazTrav — project context

## About the project
- Cab and scooter booking website, live at https://www.eaztrav.com
- Built with Next.js (App Router) + Tailwind CSS
- Developed on Windows, code on GitHub
- Domain registered at Porkbun
- Goal: simple, easy to understand, but modern and eye-catching. No login for now.
- Requirements will grow over time.

## About me
- I'm a data engineer, new to web development. Please explain changes in plain language and tell me which files you touched and why.

## Site structure
- URLs are lowercase: city page, then one sub-page per service (e.g. /ujjain/scooter-rental)
- Homepage: two large buttons, Bangalore and Ujjain, each linking to a city page (/bangalore, /ujjain)
- Bangalore page (/bangalore): cabs for booking (Tata Nexon, Suzuki Dezire, Suzuki Wagon-R, MG ZS EV). Not live yet.
- Ujjain city page (/ujjain): menu of the Ujjain services. The service list lives in app/ujjain/services.tsx.
  - /ujjain/scooter-rental: scooters for rent
  - /ujjain/car-rental: self-drive car (Maruti Suzuki Dzire)
  - /ujjain/cab-service: cab with driver
  - /ujjain/trips: trips & tour packages (Omkareshwar, Maheshwar, Mandu, Pachmarhi, airport...), grouped; /ujjain/trips/<slug> is one page per trip with fares for 12 vehicle types
    - All trips and prices live in app/ujjain/trips/trips.ts (the website copy of the owner's price sheet). Prices are fixed fares per vehicle (shown without "from"/"onwards"; extra stops or km charged separately), round trip unless oneWay; vehicles subject to availability.
  - /ujjain/guide/...: travel guide articles
  - Each service page is split into page.tsx (server component, holds metadata) and a ...Content.tsx file (client component, holds interactivity), because metadata exports need a server component.
- Phone numbers, date/time pickers and the ₹349 advance payment are shared from app/lib/booking.ts; the top bar is app/components/Navbar.tsx
  - Payment: trip pages and the cab page open the Razorpay Payment Page "EazTrav Cab Booking" (pl_TmilCW97hJe3er) pre-filled via URL with trip, vehicle, date_of_travel, pickup_time. These names must match the field labels on the Razorpay page. The amount is set in Razorpay; ADVANCE_AMOUNT is only display text, keep them equal.
- next.config.ts allowedDevOrigins holds the PC's Wi-Fi IP so the dev site works on a phone; update it if the IP changes
- proxy.ts redirects the old capitalised URLs (/Ujjain, /Bangalore) to the new ones. Old /Ujjain goes to /ujjain/scooter-rental. Don't remove it.
- app/sitemap.ts lists homepage, about, contact + Ujjain pages (Bangalore excluded until it goes live)
- app/robots.ts serves /robots.txt and points to the sitemap
- /bangalore is marked noindex (robots in its metadata) until it launches; at launch remove that line and add it to sitemap.ts
- Structured data (JSON-LD) helpers live in app/ujjain/services.tsx: BreadcrumbJsonLd and FaqJsonLd. Pages with an FAQ section pass the same faqs list to FaqJsonLd (trip pages, cab page)
- layout.tsx sets metadataBase and the default openGraph preview (used when links are shared on WhatsApp/Facebook)

## SEO and marketing (already set up, don't break these)
- Google Search Console verified; sitemap submitted at https://eaztrav.com/sitemap.xml
- Google Business listing added
- layout.tsx loads gtag.js with Google Analytics (G-3ZJXZHQ8HQ) and the Google Ads tag (AW-18000796364)
- Google Ads conversion tracking: the conversion labels and trackConversion() live in app/lib/booking.ts.
  layout.tsx reports every tel: link tap ("Call click") and wa.me link tap ("WhatsApp enquiry") automatically.
  Buttons that use window.open must call trackConversion("whatsapp") or trackConversion("payment") themselves (see handleBook/handlePay in the booking forms). New WhatsApp/pay buttons need this too.
  Every tap is also sent to Google Analytics as a "generate_lead" event (method + hotel_ref), by trackConversion and by the layout.tsx listener.
- Booking buttons are WhatsApp-first: "Book on WhatsApp" is the main (green) button, paying the ₹349 advance is the second (outlined) option. app/components/TrustStrip.tsx (office, fixed fares, hours) sits under the heading on trip and cab pages; keep its lines true.
- Hotel QR referrals: partner hotels are listed in app/h/hotels.ts. /h/<code> is the guest welcome page (saves the code in the browser for 30 days), /h/<code>/card is the printable A6 QR card (qrcode package, QR has utm_source=hotel). Both are noindex.
  While a code is saved, WhatsApp messages get "(Ref: code)" (withReferral() in booking forms; layout.tsx does it for plain wa.me links) and the Razorpay trip text gets "[Ref: code]". New WhatsApp buttons should wrap their message in withReferral().
- Guide pages (app/ujjain/guide/...) use GuidePage; cab-related guides pass bottomCta={<CabCta .../>}. New guides go in the guides list in GuidePage.tsx and in sitemap.ts. Fare tables in guides read from trips.ts.
- Google Ads campaign status, findings and to-do list live in the "Google Ads plan" file in the project root

## Future ideas
- Possible Android app version (evaluating Capacitor/WebView vs PWA vs native)
- App wishlist: phone-number login, Google Maps, database so scooters show as unavailable once booked
