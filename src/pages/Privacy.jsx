import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
const Privacy = () => {
	return (
		<div className='bg-radial-[at_40%_40%] from-stone-900 to-stone-950 to-70% min-h-screen text-white flex flex-col justify-between '>
			<div className='mt-10 absolute left-1/2 -translate-x-1/2'>
                <Link to="/" className='p-5 border-2 hover:border-green-400 hover:text-green-400'>Powrót</Link>
            </div>
            <div></div>
			<div className='p-5 text-center flex justify-center'>
                <p className='w-full max-w-[800px] md:text-xl'>
                Administratorem Twoich danych osobowych jest Bartosz Widlak. Dane podane w formularzu
				kontaktowym będą przetwarzane wyłącznie w celu udzielenia odpowiedzi na
				Twoje zapytanie. Podstawą prawną przetwarzania jest Twoja zgoda (art. 6
				ust. 1 lit. a RODO). Podanie danych jest dobrowolne, ale niezbędne do
				udzielenia odpowiedzi. Masz prawo dostępu do swoich danych, ich
				sprostowania, usunięcia, ograniczenia przetwarzania, a także prawo do
				wycofania zgody w dowolnym momencie bez wpływu na zgodność z prawem
				przetwarzania przed jej wycofaniem.
                </p>	
			</div>
			<Footer/>
		</div>
	)
}

export default Privacy
