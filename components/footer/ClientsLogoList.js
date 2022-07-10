//import Image from 'next/image'
//import Link from 'next/link'

import { getClient } from "../../lib/sanity.server"
import groq from "groq"

const ClientsLogoList = ({ restaurants }) => {
  console.log(restaurants)

  return(
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Empresas que confían en nosotros
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
          {/* {clients.map((client) => (
            <div key={client.id} className="col-span-1 flex justify-center bg-white rounded-lg">
              <Link href={client.linkUrl} passHref>
                <a target="_blank">
                  <Image
                  className="inline"
                  src={client.imgUrl}
                  alt={client.name}
                  width={300}
                  height={150}
                  />
                </a>
              </Link>
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false}) {
  const restaurants = await getClient(preview).fetch(groq`
  *[_type == "restaurant" && featured == true] {restaurantName, restaurantLogo, restaurantWebsite, featured}
  `)

  return{
    props: {
      restaurants,
    }
  }
}

export default ClientsLogoList