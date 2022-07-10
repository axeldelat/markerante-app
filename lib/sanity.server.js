import { createClient } from "next-sanity";
import { config } from "./config";

export const sanityClient = createClient(config)

export const previewClient = createClient({
  ...config,
  useCdn: false,
  token: 'skLpDRQ3lRorsULtATOZNneZan5hxTnRcVCgrDQPFs7OjKq49W7fMRlj3TOZixFQWZWH2RFDBEaBZIR4n04YkQ7MUUYbhqLVQCx7uOTcvdFPRTdyLDDe2GY8fjo05tLDEoh79nElo6ZRpVs19Nh7Xw3A4wU4wLCRAyfoSh6Ftx6akh1gIFG1'
})

export const getClient = ( usePreview ) => usePreview ? previewClient : sanityClient