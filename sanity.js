import sanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'o2bi4r5a',
  dataset: 'production',
  useCdn: true,
  apiVersion: "2022-03-07",
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;

