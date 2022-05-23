import sanityClient from "@sanity/client"
import imageUrlBuilder from '@sanity/image-url'
 export const client = sanityClient({
    projectId: 'ajufh707',
    dataset: 'production',
    apiVersion: '2022-05-09', 
    token: process.env.NEXT_SANTY_TOKEN, 
    useCdn: true, 
  })
  const builder = imageUrlBuilder(client)

export const urlFor = (source)=> {
  return builder.image(source)
}