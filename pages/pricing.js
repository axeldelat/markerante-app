import Header from '../components/Header'
import Footer from '../components/Footer'
import { CheckIcon } from '@heroicons/react/solid'
import Image from 'next/image'

const tiers = [
  {
    name: 'Plan Básico',
    href: 'https://www.misistemadepedidos.com/admin/public/signup',
    priceMonthly: 0,
    description: 'Comienza Gratis, sin riesgos, sin comisiones.',
    includedFeatures: ['Sistema de Pedidos Premium',
    'Ordenes y Pedidos Ilimitados',
    'Cobro diferenciado de Envío por área de servicio','Botón de pedidos en Facebook','Botón de pedidos en tu sitio web','Herramienta para promociones','Aplicación para recibir celulares en smartphone o tablet','Acepta Pagos en efectivo y pago con tarjeta al repartidor'],
    imgUrl: '/delivery-man.svg',
  },
  {
    name: 'Plan Restaurant',
    href: 'https://www.misistemadepedidos.com/admin/public/signup',
    priceMonthly: 599,
    description: 'Procesa más pedidos de manera segura aceptando pagos con tarjeta',
    includedFeatures: [
      'TODO lo incluido en el Plan Básico','Asistencia y Soporte vía WhatsApp',
      'Procesamiento de Pago con Tarjeta Visa, Mastercard, American Express, Apple Pay y Google Pay',
      'Sistema antifraude de cobro seguro','Comisión por transacción 4.5% + $3'
    ],
    imgUrl: '/food-truck.svg',
  },
]

export default function Example() {
  return (
    <>
    <Header/>
    <div className="bg-white">
      <div className="max-w-7xl mx-autoi px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:flex-col sm:align-center">
          <h1 className="text-5xl font-extrabold text-gray-900 sm:text-center">Crecemos <span className="text-yellow-400">contigo</span>, <br />Llévemos a tu <span className="text-red-600">Restaurante</span> al siguiente nivel</h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Comienza gratis y mejora tu servicio conforme ves los beneficios de trababar tu restaurante en la nueva era digital
          </p>
        </div>
        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <Image
                src={tier.imgUrl}
                alt="Repartidor de Comida"
                height={100}
                width={100}
                />
                <h2 className="text-lg leading-6 font-medium text-gray-900">{tier.name}</h2>
                <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">${tier.priceMonthly}</span>{' '}
                  <span className="text-base font-medium text-gray-500">mxn/mensual</span>
                </p>
                <a
                  href={tier.href}
                  className="mt-8 block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900"
                >
                  Iniciar {tier.name}
                </a>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">Incluye</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {tier.includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3">
                      <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                      <span className="text-sm text-gray-500">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
