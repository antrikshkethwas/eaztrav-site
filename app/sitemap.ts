import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://eaztrav.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    /*
    {
      url: 'https://eaztrav.com/Bangalore',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    */
    {
      url: 'https://eaztrav.com/Ujjain',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}