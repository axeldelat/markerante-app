import { client } from 'elasticemail-webapiclient'
import Image from 'next/image'
import Link from 'next/link'

const clients = [
  {
    id: 1,
    name: 'Cheester',
    imgUrl: '/images/logos/cheester.png',
    linkUrl: 'http://cheesterplaya.mx/'
  },
  {
    id: 2,
    name: 'Don Chava',
    imgUrl: '/images/logos/donchava.png',
    linkUrl: 'https://sky.onir.io/don-chava/'
  },
  {
    id: 3,
    name: 'Ferrons Jerk Chicken',
    imgUrl: '/images/logos/ferrons.png',
    linkUrl: 'https://ferronsjerkchicken.com/'
  },
  {
    id: 4,
    name: 'Red Sauce',
    imgUrl: '/images/logos/redsauce.png',
    linkUrl: 'https://redsauce.mx/'
  },
  {
    id: 5,
    name: 'Vegan Inc',
    imgUrl: '/images/logos/veganinc.png',
    linkUrl: 'https://veganinc.mx/'
  },
  {
    id: 6,
    name: 'Cheester',
    imgUrl: '/images/logos/cheester.png',
    linkUrl: 'http://cheesterplaya.mx/'
  }
]

export default function ClientsLogoList() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Empresas que confían en nosotros
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
          {clients.map((client) => (
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
          ))}
        </div>
      </div>
    </div>
  )
}
