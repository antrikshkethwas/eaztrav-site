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
  - /ujjain/guide/...: travel guide articles
  - Each service page is split into page.tsx (server component, holds metadata) and a ...Content.tsx file (client component, holds interactivity), because metadata exports need a server component.
- Phone numbers and date/time pickers are shared from app/lib/booking.ts; the top bar is app/components/Navbar.tsx
- proxy.ts redirects the old capitalised URLs (/Ujjain, /Bangalore) to the new ones. Old /Ujjain goes to /ujjain/scooter-rental. Don't remove it.
- app/sitemap.ts lists homepage + Ujjain pages (Bangalore excluded until it goes live)

## SEO and marketing (already set up, don't break these)
- Google Search Console verified; sitemap submitted at https://eaztrav.com/sitemap.xml
- Google Business listing added
- Google Ads tag (gtag.js) lives in layout.tsx and a campaign is running with real bookings

## Future ideas
- Possible Android app version (evaluating Capacitor/WebView vs PWA vs native)
- App wishlist: phone-number login, Google Maps, database so scooters show as unavailable once booked
