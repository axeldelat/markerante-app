import Image from "next/image"
import Link from "next/link"

export default function Calltoaction( props ) {
  return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-yellow-400 mb-8 rounded-lg shadow-xl overflow-hidden">
          <div className="pt-10 pb-12 px-6">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">{props.headline}</span>
              </h2>
              <p className="mt-4 text-xs leading-6 text-gray-700">
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
        </div>
      </div>
  )
}