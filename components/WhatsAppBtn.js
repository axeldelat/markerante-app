import Link from 'next/link'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const whatsAppLink = 'https://api.whatsapp.com/send?phone=5215626202797&text=%C2%A1Hola%20%F0%9F%91%8B!%20%C2%BFMe%20podr%C3%ADan%20dar%20informaci%C3%B3n%20de%20los%20servicios%20que%20ofrecen%3F';

export default function WhatsAppWidget(props) {
  return(
    <Link href={whatsAppLink} passHref>
      <a target="_blank" rel="noopener noreferrer">
        <button
          type="button"
          className="fixed bottom-5 right-5 lg:bottom-10 lg:right-10  inline-flex items-center p-4 border border-transparent rounded-full shadow-sm text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
        >
          <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" size='2x'/>
        </button>
      </a>
    </Link>
  )
}