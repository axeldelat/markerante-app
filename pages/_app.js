import '../styles/global.css'
import WhatsAppWidget from '../components/WhatsAppBtn'
import FacebookPixel from '../components/analitycs/FacebookPixel'

function MyApp({ Component, pageProps }) {
  return (
      <FacebookPixel>
        <Component {...pageProps} />
        <WhatsAppWidget phoneNumber='525626202797' textReplyTime='Respuesta inmediata' message='Hola! 👋🏼 ¿Cómo podemos ayudarte?' companyName='Markerante' sendButton='Enviar'/>
      </FacebookPixel>
  )
}

export default MyApp