import { MapPin, User } from 'lucide-react';
import face from '../assets/face.jpg';
const Hello = () => {

    return(
        <section className="text-white flex flex-col items-center">
            <div className='w-[238px] h-[238px] overflow-hidden rounded-full bg-white border-5 border-green-400 animate-bounce mt-10 flex items-center justify-center'>
                <div className='border-5 border-stone-700 rounded-full w-[230px] h-[230px] overflow-hidden'>
                    <img className='scale-80' src={face} alt="Zdjęcie mojej osoby" />
                </div>
            </div>
            {/* <h5 className='mt-5 text-left'>czesc, jestem</h5> */}
            <h1 className='mt-5 font-bold text-4xl text-center'>Bartosz Widlak</h1>
            <div className='flex items-center'>
                <p className='uppercase opacity-80 animate-typewriter text-center overflow-hidden whitespace-nowrap font-[Anonymous_Pro]'>front-end developer</p>
                <div className='w-[1px] h-[20px] bg-green-400 animate-blinkTextCursor'></div>
            </div>
            <div className='mt-2 flex flex-col items-center'>
                <div className='flex opacity-80'><MapPin className='mr-2'/><p>Brzesko | Kraków, Polska</p></div>
                <div className='flex opacity-80'><User className='mr-2'/><p>Dostępny 
                    <div className='inline-flex relative ml-2'>
                        <div className='h-[8px] w-[8px] bg-green-400 rounded animate-pulse'></div>
                    </div>
                    </p></div>
            </div>
        </section>
    )
}

export default Hello;

