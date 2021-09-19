import Link from "next/link"
import ClientsLogoList from "./ClientsLogoList"

export default function Example() {
  return (
    <footer className="bg-red-700">
      <ClientsLogoList />
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <p className="text-center text-base text-gray-50">&copy; 2021 Markerante.</p>
        <p className='mt-2 text-center text-base text-gray-50'>
          <Link href="https://www.gloriafood.com/"><a  className="text-yellow-300" target="_blank">Gloria Food</a></Link> Official Distributor
        </p>
      </div>
    </footer>
  )
}
