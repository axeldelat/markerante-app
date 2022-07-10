import Link from "next/link"
import { urlFor } from "../../lib/sanity"

const RestaurantCard = ({ restaurant }) => {
  const theurl = urlFor(restaurant)
  return (
    <div key={restaurant._id} className="col-span-1 flex justify-center bg-white rounded-lg">
      <Link href={restaurant.restaurantWebsite} passHref>
        <a target="_blank">
          <img
          src={urlFor(restaurant.restaurantLogo)}
          />
        </a>
      </Link>
    </div>
  )
}

export default RestaurantCard