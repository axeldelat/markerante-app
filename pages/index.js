import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from 'react';



export default function Home() {
  const [value, setValue] = useState(null)
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
                    alt="People working on laptops"
                    layout="fill"
                  />
                  <div className="absolute inset-0 bg-yellow-200 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Todo para hacer <span className=" text-yellow-400">crecer</span> tu <span className="block text-red-600">Restaurante</span> en línea.</span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-white sm:max-w-3xl">
                    Sin Comisiones y Gratis
                  </p>
                  <div className="mt-10 sm:mt-12">
                    <a href="https://www.misistemadepedidos.com/admin/public/login" target="_blank" rel="noreferrer">
                      <button
                        
                        className="block w-full py-3 px-4 rounded-md shadow bg-red-600 text-white font-medium hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900"
                        >
                        Comenzar
                      </button>
                    </a>
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
