import Head from 'next/head'
import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/footer/Footer'
import ContactForm from '../../components/ContactForm'

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
          <h1 className="text-5xl font-extrabold text-yellow-400 sm:text-center">Contáctanos</h1>
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
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}