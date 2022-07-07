import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: 'your-project-id', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-08-31',
  token: 'sanity-auth-token',
  useCdn: true // `false` if you want to ensure fresh data
})