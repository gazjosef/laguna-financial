import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "your_project_id", // Replace with your Sanity project ID
  dataset: "production", // Replace with your dataset
  useCdn: true, // Use CDN for faster queries
  apiVersion: "2023-01-01", // Use a specific API version
});

// Sample query
export const fetchHeroContent = async () => {
  const query = `*[_type == "hero"]{ title, subtitle, image }`;
  return await client.fetch(query);
};
