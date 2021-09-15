import Image from "next/image"
import Link from "next/link"

export default function Calltoaction( props ) {
  return (
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-400 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">{props.headline}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-gray-700">
                {props.description}
              </p>
              <p className="mt-4 text-m leading-6 text-gray-600">
                {props.deliveryTime}
              </p>
              <p className="mt-4 text-m leading-6 text-gray-600">
              <strong>Costo: </strong>${props.price}
              </p>
              <Link href={props.stripeUrl} passHref>
                <a target="_blank">
                <button
                  className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-red-600 hover:bg-yellow-50"
                >
                  Contratar
                </button>
                </a>
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <Image
              className="transform translate-x-6 translate-y-6 rounded-md object-contain object-left-top sm:translate-x-16 lg:translate-y-20"
              src={props.imgUrl}
              alt={props.imgAlt}
              layout="fill"
            />
          </div>
        </div>
      </div>
  )
}