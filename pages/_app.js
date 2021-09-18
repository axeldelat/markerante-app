import '../styles/global.css'
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'

function FacebookPixel() {
  React.useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('984742198976988');
        ReactPixel.pageView();

        Router.events.on("routeChangeComplete", () => {
          ReactPixel.pageView();
        });
      });
  });
  return null;
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <FacebookPixel />
      <WhatsAppWidget phoneNumber='525626202797' textReplyTime='Respuesta inmediata' message='Hola! 👋🏼 ¿Cómo podemos ayudarte?' companyName='Markerante' sendButton='Enviar'/>
    </>
  )
}

export default MyApp