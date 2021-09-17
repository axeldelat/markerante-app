import '../styles/global.css'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <WhatsAppWidget phoneNumber='525626202797' textReplyTime='Respuesta inmediata' message='Hola! 👋🏼 ¿Cómo podemos ayudarte?' companyName='Markerante' sendButton='Enviar'/>
    </>
  )
}

export default MyApp
