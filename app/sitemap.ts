import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.eaztrav.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
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
    /*
    {
      url: 'https://www.eaztrav.com/bangalore',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
  ]
}
