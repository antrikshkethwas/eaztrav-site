import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.eaztrav.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Ujjain travel guide pages
    {
      url: 'https://www.eaztrav.com/Ujjain/guide/mahakaleshwar-temple',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/Ujjain/guide/itinerary',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://www.eaztrav.com/Ujjain/guide/getting-around',
      lastModified: new Date('2026-09-30'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    /*
    {
      url: 'https://www.eaztrav.com/Bangalore',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
    {
      url: 'https://www.eaztrav.com/Ujjain',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}