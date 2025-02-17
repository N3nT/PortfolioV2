import { MapPin, User, GraduationCap } from 'lucide-react';
import face from '../assets/face.jpg';
import cLanguage from '../assets/C.svg';
import CSS from '../assets/CSS3.svg';
import Git from '../assets/Git.svg';
import HTML5 from '../assets/HTML5.svg';
import JS from '../assets/JavaScript.svg';
import MySql from '../assets/MySQL.svg';
import PHP from '../assets/PHP.svg';
import Python from '../assets/Python.svg';
import React from '../assets/React.svg';
import Sass from '../assets/Sass.svg';
import TailwindCSS from '../assets/Tailwind CSS.svg';
import Vite from '../assets/vite.svg';
import linedIn from '../assets/linkedin-app-white-icon.svg';
import github from '../assets/github-white-icon1.svg';
import mail from '../assets/mail.svg';

const Hello = () => {

    return(
        <section className="text-white flex flex-col items-center overflow-hidden">
            <div className='w-[238px] h-[238px] overflow-hidden rounded-full bg-white border-5 border-green-400 animate-bounce mt-10 flex items-center justify-center'>
                <div className='border-5 border-stone-700 rounded-full w-[230px] h-[230px] overflow-hidden'>
                    <img className='scale-80' src={face} alt="Zdjęcie mojej osoby" />
                </div>
            </div>
            <h1 className='mt-5 font-bold text-4xl text-center'>Bartosz Widlak</h1>
            <div className='flex items-center'>
                <p className='uppercase opacity-80 animate-typewriter text-center overflow-hidden whitespace-nowrap font-[Anonymous_Pro]'>front-end developer</p>
                <div className='w-[1px] h-[20px] bg-green-400 animate-blinkTextCursor'></div>
                
            </div>

            <p className='opacity-80'>I nie tylko...</p>
            
            <div className='mt-5 flex flex-col items-center'>
                <div className='flex opacity-80 mb-5 items-center *:p-2 *:hover:opacity-70 *:transition-opacity'>
                    <a href="https://www.linkedin.com/in/bartosz-widlak-06a316313/" target='_blank'><img src={linedIn} alt="linkedin link" className='w-[35px] h-[35px]'/></a>
                    <a href="https://github.com/N3nT" target='_blank'><img src={github} alt="github link" className='w-[40px] h-[40px]'/></a>
                    <a href="mailto:bartosz.widlak@op.pl" target='_blank'><img src={mail} alt="mail link" className='w-[45px] h-[45px]'/></a>
                </div>
                <div className='flex opacity-80'><GraduationCap className='mr-2'/> Student - UKEN Kraków | Informatyka</div>
                <div className='flex opacity-80'><MapPin className='mr-2'/><p>Brzesko | Kraków, Polska</p></div>
                <div className='flex opacity-80'><User className='mr-2'/>
                    <p>Dostępny 
                    <span className='inline-flex relative ml-2'>
                        <span className='h-[8px] w-[8px] bg-green-400 rounded animate-pulse'></span>
                    </span>
                    </p>
                </div>
            </div>

            <div className='flex w-full max-w-[1000px] overflow-hidden my-10 relative'>
                <div className='flex w-full max-w-[1000px] my-10 *:w-[60px] *:mx-6 relative items-center *:absolute *:-right-[125px] *:animate-rightSlide *:lg:animate-rightSlideWithOpacity'>
                    <img src={React} alt="React logo"/>
                    <img src={TailwindCSS} alt="TailwindCSS logo" style={{animationDelay: '-2s'}}/>
                    <img src={Python} alt="Python logo" style={{animationDelay: '-4s'}}/>
                    <img src={PHP} alt="PHP logo" style={{animationDelay: '-6s'}}/>
                    <img src={Vite} alt="Vite logo" style={{animationDelay: '-8s'}}/>
                    <img src={MySql} alt="MySQL logo" style={{animationDelay: '-10s'}}/>
                    <img src={Sass} alt="Sass logo" style={{animationDelay: '-12s'}}/>
                    <img src={cLanguage} alt="C logo" style={{animationDelay: '-14s'}}/>
                    <img src={Git} alt="Git logo" style={{animationDelay: '-16s'}}/>
                    <img src={HTML5} alt="HTML5 logo" style={{animationDelay: '-18s'}}/>
                    <img src={CSS} alt="CSS logo" style={{animationDelay: '-20s'}}/>
                    <img src={JS} alt="JS logo" style={{animationDelay: '-22s'}}/>
                </div>
            </div>
            {/* reverse */}
            {/* <div className='flex w-full max-w-[1000px] overflow-hidden my-10 z-10 relative'>
                <div className='flex w-full max-w-[1000px] my-10 *:w-[60px] *:mx-6 relative items-center *:absolute *:-right-[125px] *:animate-rightSlide *:lg:animate-rightSlideWithOpacity'>
                    <img src={React} alt="React logo" style={{animationDirection: 'reverse'}}/>
                    <img src={TailwindCSS} alt="TailwindCSS logo" style={{animationDelay: '-2s', animationDirection: 'reverse'}}/>
                    <img src={Python} alt="Python logo" style={{animationDelay: '-4s', animationDirection: 'reverse'}}/>
                    <img src={PHP} alt="PHP logo" style={{animationDelay: '-6s', animationDirection: 'reverse'}}/>
                    <img src={Vite} alt="Vite logo" style={{animationDelay: '-8s', animationDirection: 'reverse'}}/>
                    <img src={MySql} alt="MySQL logo" style={{animationDelay: '-10s', animationDirection: 'reverse'}}/>
                    <img src={Sass} alt="Sass logo" style={{animationDelay: '-12s', animationDirection: 'reverse'}}/>
                    <img src={cLanguage} alt="C logo" style={{animationDelay: '-14s', animationDirection: 'reverse'}}/>
                    <img src={Git} alt="Git logo" style={{animationDelay: '-16s', animationDirection: 'reverse'}}/>
                    <img src={HTML5} alt="HTML5 logo" style={{animationDelay: '-18s', animationDirection: 'reverse'}}/>
                    <img src={CSS} alt="CSS logo" style={{animationDelay: '-20s', animationDirection: 'reverse'}}/>
                    <img src={JS} alt="JS logo" style={{animationDelay: '-22s', animationDirection: 'reverse'}}/>
                </div>
            </div> */}
        </section>
    )
}

export default Hello;

