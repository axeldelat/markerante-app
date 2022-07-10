import Link from "next/link"
import { urlFor } from "../../lib/sanity"

const RestaurantCard = ({ restaurant }) => {
  const theurl = urlFor(restaurant)
  return (
    <Link href={restaurant.restaurantWebsite} passHref>
      <a target="_blank">
        <div key={restaurant._id} className="col-span-1 flex justify-center bg-white rounded-lg">
          <img
          src={urlFor(restaurant.restaurantLogo)}
          alt={restaurant.restaurantName}
          />
        </div>
      </a>
    </Link>
  )
}

export default RestaurantCard