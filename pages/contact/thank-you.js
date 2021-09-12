import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function ThankYou() {
  return (
    <div>
      <Head>
        <title>Marketante - Guía de Marketing para Restaurantes</title>
        <meta name="description" content="Guía de Marketing para Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Header */}
        <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
            <h1 className="text-3xl font-extrabold text-gray-900 sm:text-center"><span className="text-yellow-400">Gracias</span> <br />Por contáctarnos</h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Nos pondremos en contacto contigo a la brevedad posible.
            </p>
            <Link href="/" passHref>
              <button
                className="w-full flex items-center justify-center my-4 py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
              >
                Volver
              </button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
