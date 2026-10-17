import { MetadataRoute } from 'next'
import { trips } from './ujjain/trips/trips'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.eaztrav.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://www.eaztrav.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://www.eaztrav.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    // Ujjain city page and its service pages
    {
      url: 'https://www.eaztrav.com/ujjain',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/scooter-rental',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/car-rental',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/cab-service',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    // Trips list + one page per trip (taken from the trip price list)
    {
      url: 'https://www.eaztrav.com/ujjain/trips',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...trips.map((trip) => ({
      url: `https://www.eaztrav.com/ujjain/trips/${trip.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
    // Ujjain travel guide pages
    {
      url: 'https://www.eaztrav.com/ujjain/guide/mahakaleshwar-temple',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/guide/itinerary',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/guide/getting-around',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/guide/ujjain-to-omkareshwar',
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/ujjain/guide/indore-airport-to-ujjain',
      lastModified: new Date('2026-10-17'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    // Bangalore city page and its services
    {
      url: 'https://www.eaztrav.com/bangalore',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.eaztrav.com/bangalore/airport-taxi',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ]
}
