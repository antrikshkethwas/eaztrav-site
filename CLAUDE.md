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
- Homepage: two large buttons, Bangalore and Ujjain, each linking to a city page (e.g. /Bangalore, /Ujjain)
- Bangalore page: cabs for booking (Tata Nexon, Suzuki Dezire, Suzuki Wagon-R, MG ZS EV). Not live yet.
- Ujjain page: scooters for rent (not cabs). Live.
  - Split into page.tsx (server component, holds metadata) and UjjainContent.tsx (client component, holds interactivity), because metadata exports need a server component.
- app/sitemap.ts lists homepage + Ujjain (Bangalore excluded until it goes live)

## SEO and marketing (already set up, don't break these)
- Google Search Console verified; sitemap submitted at https://eaztrav.com/sitemap.xml
- Google Business listing added
- Google Ads tag (gtag.js) lives in layout.tsx and a campaign is running with real bookings

## Future ideas
- Possible Android app version (evaluating Capacitor/WebView vs PWA vs native)
- App wishlist: phone-number login, Google Maps, database so scooters show as unavailable once booked
