import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import React, { useState } from 'react';
import Router from 'next/router';
import router from 'next/router';




export default function Home() {
  const [rname, setRname] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let gfUrl = `https://www.misistemadepedidos.com/admin/public/signup?restaurant_name=${rname}`
    router.push(gfUrl)
  }

  return (
    <div>
      <Head>
        <title>Marketante - Guía de Marketing para Restaurantes</title>
        <meta name="description" content="Guía de Marketing para Restaurantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        
      <Footer />
    </div>
  )
}
