import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/footer/Footer'
import RestaurantCard from '../components/footer/RestaurantCard'
import React, { useState } from 'react';
import Router from 'next/router';
import Link from 'next/link'

import { getClient } from "../lib/sanity.server"
import groq from "groq"

import {
  CalendarIcon,
  SparklesIcon,
  GlobeAltIcon,
  CashIcon,
  DeviceMobileIcon,
} from '@heroicons/react/outline'

const Home = ({restaurants}) => {
  const [rname, setRname] = useState('')
  const handleSubmit = (evt) => {
    evt.preventDefault();
    let gfUrl = `https://www.misistemadepedidos.com/admin/public/signup?restaurant_name=${rname}`
    Router.push(gfUrl)
  }

  return (
    <div>
      <Head>
        <title>Markerante - Guía de Marketing para Restaurantes</title>
        <meta name="description" content="Guía de Marketing para Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {/*Header*/}
        <div className="relative" id="start">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src="/background.jpg"
                  alt="Guía de Marketing para restaurantes"
                  layout="fill"
                  priority
                />
                <div className="absolute inset-0 bg-yellow-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{process.env.ELASTICEMAIL_API}Todo para hacer <span className=" text-yellow-400">crecer</span> tu <span className="block text-red-600">Restaurante</span> en línea.</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  Empieza <em>Gratis</em> y Sin Comisiones
                </p>
                <div className="mt-8 lg:mt-8 ">
                  <form onSubmit={handleSubmit} className="sm:flex justify-center">
                    <label htmlFor="restaurant-name" className="sr-only">
                      Nombre del Restaurante
                    </label>
                    <input
                      id="rname"
                      name="rname"
                      type="text"
                      value={rname}
                      onChange={ e => setRname(e.target.value) }
                      required
                      className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-yellow-400 focus:border-yellow-400 sm:max-w-xs rounded-md"
                      placeholder="Nombre del Restaurante"
                    />
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
                      >
                        Comenzar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Content of Page*/}
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-400">
                    <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Convierte a los usuarios que visitan tu sitio web en comensales habituales
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                  Nuestro sistema de pedidos online ayudará a transformar tu página web en una máquina de hacer dinero.
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                  No importa cuánto crezca tu negocio, siempre podrás recibir pedidos ilimitados <strong>sin costos</strong>.
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                  Potencia tu negocio con nuestro sistema de comandas para restaurantes gratis y nunca tendrás que preocuparte por comisiones.
                  </p>

                  <div className="mt-6">
                    <a
                      href="#start"
                      className="inline-flex bg-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    >
                      ¡Comienza Hoy!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/index/hp-card1-78edac9036.png.webp"
                  alt="Customer profile user interface"
                  width={630}
                  height={513}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col	 lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-400">
                    <CalendarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Logra que más clientes te compren. Utiliza botones de compra que se destacan.
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                  Cuanto más difícil sea para tus hambrientos consumidores encontrar los botones de pedido en tu sitio web, más clientes perderás.
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                  Aumenta la retención de clientes agregando los botones para restaurantes <strong>“Ver MENÚ</strong> y <strong>Hacer Pedido”</strong> y <strong>“Reserva de Mesa”</strong> a tu página web optimizada para ventas y así lograrás que el proceso de pedidos online sea rápido y fácil.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#start"
                      className="inline-flex bg-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    >
                      ¡Comienza Hoy!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-2">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/index/es-card2-48d2b79c59.png.webp"
                  alt="Customer profile user interface"
                  width={646}
                  height={578}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-400">
                    <GlobeAltIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  ¿No tienes un sitio web que genere dinero? Obtén un sitio web que vende con sistema de pedidos online
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                  ¡Tus platos son calientes, ¿pero tu negocio no?! Te ayudaremos a crear tu <strong>página web para restaurantes totalmente funcional con sistema de comandas online</strong>, en solo segundos. Sin necesidad de saber programar.</p>
                  <p className="mt-4 text-lg text-gray-500">
                  Quienes utilizan nuestros sitios web optimizados para vender han aumentado sus ventas online hasta un 162%.*</p>
                  <p className="mt-4 text-lg text-gray-500">
                  Pruébalo y lo verás por ti mismo.</p>
                  <p className="mt-4 text-sm text-gray-500">
                  <em>*Estadísticas basadas en monitorear los indicadores de desempeño de nuestros clientes.</em></p>
                  <div className="mt-6">
                    <a
                      href="#start"
                      className="inline-flex bg-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    >
                      ¡Comienza Hoy!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/index/es-card3-cdd9c51cbd.png.webp"
                  alt="Customer profile user interface"
                  width={630}
                  height={670}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col	 lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-1">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-400">
                    <CashIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  No hay tiempo que perder: Toma tu primer pedido online en <em>minutos</em>
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                  <strong>Cómo empezar:</strong>
                  </p>
                  <ol className="mt-4 text-lg text-gray-500 list-decimal">
                    <li>Crea una cuenta fácilmente.</li>
                    <li>Agrega los botones de restaurante a tu sitio web.</li>
                    <li>Utiliza nuestra app para organizar pedidos de restaurantes y confirma los pedidos recibidos en tu sitio web, página de Facebook y app de restaurante.</li>
                  </ol>
                  <p className="mt-4 text-lg text-gray-500">
                  Es así de simple tener tu propio sitio web de pedidos de comida online, esta noche.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#start"
                      className="inline-flex bg-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    >
                      ¡Comienza Hoy!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-2">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/index/es-card4-f8626b0414.png.webp"
                  alt="Customer profile user interface"
                  width={650}
                  height={680}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div>
                  <span className="h-12 w-12 rounded-md flex items-center justify-center bg-yellow-400">
                    <DeviceMobileIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  No se necesita un dispositivo especial: acepta pedidos entrantes desde tu smartphone
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                  Con la aplicación de GloriaFood, ahora podrás aceptar pedidos de comida online desde tu propio dispositivo… con un solo toque en la pantalla.
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                  Simplemente instala nuestra app gratis de gestión de pedidos para Android o iOS, en tu propio smartphone, tablet, o iPad para comenzar.
                  </p>
                  <p className="mt-4 text-lg text-gray-500">
                  Pruébalo y lo verás por ti mismo.</p>
                  <p className="mt-4 text-sm text-gray-500">
                  <em>*Estadísticas basadas en monitorear los indicadores de desempeño de nuestros clientes.</em></p>
                  <div className="mt-6">
                    <a
                      href="#start"
                      className="inline-flex bg-red-600 bg-origin-border px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white"
                    >
                      ¡Comienza Hoy!
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <Image
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="/images/index/es-card5-03d67d334c.png.webp"
                  alt="Customer profile user interface"
                  width={640}
                  height={640}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
              Empresas que confían en nosotros
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:mt-8">
              {restaurants?.map((restaurant) => (
                  <RestaurantCard key={restaurant._id} restaurant={restaurant} />
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
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

export default Home