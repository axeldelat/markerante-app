import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link'
import Router from 'next/router';

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const [inputs, setInputs] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    restaurant: '',
    message: '',
    referral: '',
    privacyAcceptance: false,
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        restaurant: '',
        message: '',
        referral: '',
        privacyAcceptance: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  const handleOnChange = (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/mgerdkwp',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Gracias, tu mensaje ha sido enviado.',
        );
        Router.push('contact/thank-you');
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
        <div>
          <label htmlFor="fname" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="fname"
              id="fname"
              autoComplete="given-name"
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.fname}
            />
          </div>
        </div>
        <div>
          <label htmlFor="lname" className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="lname"
              id="lname"
              autoComplete="family-name"
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.lname}
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
              name="_replyto"
              type="email"
              autoComplete="email"
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.email}
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
              autoComplete="tel"
              aria-describedby="phone-description"
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.phone}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="restaurant" className="block text-sm font-medium text-gray-700">
            Restaurante
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="restaurant"
              id="restaurant"
              autoComplete="organization"
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.restaurant}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <div className="flex justify-between">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              ¿Cómo podemos ayudarte?
            </label>
          </div>
          <div className="mt-1">
            <textarea
              id="message"
              name="message"
              aria-describedby="message"
              rows={4}
              className="block w-full shadow-sm sm:text-sm focus:ring-yellow-400 focus:border-yellow-400 border border-gray-300 rounded-md"
              defaultValue={''}
              onChange={handleOnChange}
              required
              value={inputs.message}
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="referral" className="block text-sm font-medium text-gray-700">
            ¿Cómo te enteraste de nosotros?
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="referral"
              id="referral"
              className="shadow-sm focus:ring-yellow-400 focus:border-yellow-400 block w-full sm:text-sm border-gray-300 rounded-md"
              onChange={handleOnChange}
              required
              value={inputs.referral}
            />
          </div>
        </div>
        <div className="relative flex items-start">
          <div className="flex items-center h-5">
            <input
              id="privacyAcceptance"
              name="privacyAcceptance"
              type="checkbox"
              className="focus:ring-red-500 h-4 w-4 text-red-600 border-gray-300 rounded"
              onChange={handleOnChange}
              required
              checked={inputs.privacyAcceptance}
            />
          </div>
          <div className="ml-3 text-sm">
            <p className="text-gray-500">Acepto compartir mi información con fines publicitarios. Ver <Link href="privacy" passHref><span className="text-red-600">aviso de privacidad</span></Link>.</p>
          </div>
        </div>
        <div className="text-right sm:col-span-2">
          <button
            className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700"
            type="submit"
            disabled={status.submitting}
            >
            {!status.submitting
            ? !status.submitted
              ? 'Enviar'
              : 'Enviado'
            : 'Enviado'}
          </button>
        </div>
      </form>

      {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </div>
  );
};