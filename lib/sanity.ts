// e:/Projects/CoastalConnect/Ignite Recovery/lib/sanity.ts
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id', // Replace with their project ID if env doesn't exist
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // `false` ensures instant data updates from Studio instead of waiting on Edge Cache
  apiVersion: '2024-03-11', // use current date
});

// Helper function for easily resolving images from Sanity
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
