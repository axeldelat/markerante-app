import { ExternalLinkIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'

const navigation = [
  { name: 'Work', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '#' },
  { name: 'Blog', href: '#' },
]

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contacto - Marketante - Guía de Marketing para Restaurantes</title>
        <meta name="description" content="Guía de Marketing para Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/* Header */}
        <div className="py-24 bg-gray-50 sm:py-32">
          <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Contáctanos</h1>
            <p className="mt-5 text-xl text-gray-500 sm:text-center">
              Resuelve todas tus dudas acerca de nuestros productos o servicios.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative bg-white">
          <div className="lg:absolute lg:inset-0">
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-full w-full object-cover"
              src="/background.jpg"
              alt="People working on laptops"
              layout="fill"
            />
            </div>
          </div>
          <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
            <div className="lg:pr-8">
              <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">¿Te gustaría ponerte en contacto con nosotros?</h2>
                <p className="mt-4 text-lg text-gray-500 sm:mt-3">
                  Gracias por tu interés en nuestros productos y servicios. El tiempo de respuesta de de parte de nuestro equipo es de 24-48 horas.
                </p>
                <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      Nombre
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        required
                        autoComplete="given-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Apellido
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        required
                        autoComplete="family-name"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Restaurante
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="company"
                        id="company"
                        required
                        autoComplete="organization"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Teléfono
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        required
                        autoComplete="tel"
                        aria-describedby="phone-description"
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                        ¿Cómo podemos ayudarte?
                      </label>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="how-can-we-help"
                        name="how-can-we-help"
                        aria-describedby="how-can-we-help-description"
                        rows={4}
                        className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
                        defaultValue={''}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="how-did-you-hear-about-us" className="block text-sm font-medium text-gray-700">
                      ¿Cómo te enteraste de nosotros?
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="how-did-you-hear-about-us"
                        id="how-did-you-hear-about-us"
                        className="shadow-sm focus:ring-grape-500 focus:border-grape-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div className="text-right sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
