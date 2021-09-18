import '../styles/global.css'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
import ReactPixel from 'react-facebook-pixel'

function MyApp({ Component, pageProps }) {
  const advancedMatching = { em: 'email@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
  };

  ReactPixel.init('984742198976988', advancedMatching, options);

  ReactPixel.pageView(); // For tracking page view
  ReactPixel.track(event, data); // For tracking default events. More info about standard events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events
  ReactPixel.trackSingle('PixelId', event, data); // For tracking default events.
  ReactPixel.trackCustom(event, data); // For tracking custom events. More info about custom events: https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events
  ReactPixel.trackSingleCustom('PixelId', event, data); // For tracking custom events.

  return (
    <>
      <Component {...pageProps} />
      <WhatsAppWidget phoneNumber='525626202797' textReplyTime='Respuesta inmediata' message='Hola! 👋🏼 ¿Cómo podemos ayudarte?' companyName='Markerante' sendButton='Enviar'/>
    </>
  )
}

export default MyApp