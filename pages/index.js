import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from 'react';
import Router from 'next/router';

export default function Home() {
  const [rname, setRname] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let gfUrl = `https://www.misistemadepedidos.com/admin/public/signup?restaurant_name=${rname}`
    Router.push(gfUrl)
  }

  return (
    <div>
      <Head>
        <title>Marketante - Guía de Marketing para Restaurantes</title>
        <meta name="description" content="Guía de Marketing para Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  className="h-full w-full object-cover"
                  src="/background.jpg"
                  alt="Guía de Marketing para restaurantes"
                  layout="fill"
                />
                <div className="absolute inset-0 bg-yellow-200 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                  <span className="block text-white">{process.env.ELASTICEMAIL_API}Todo para hacer <span className=" text-yellow-400">crecer</span> tu <span className="block text-red-600">Restaurante</span> en línea.</span>
                </h1>
                <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                  Sin Comisiones y Gratis
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
      </main>
      <Footer />
    </div>
  )
}
