import { MapPin, User, CircleArrowDown, GraduationCap } from 'lucide-react';
import face from '../assets/face.jpg';
// import cLanguage from '../assets/C.svg';
// import CSS from '../assets/CSS3.svg';
// import Git from '../assets/Git.svg';
// import HTML5 from '../assets/HTML5.svg';
// import JS from '../assets/JavaScript.svg';
// import MySql from '../assets/MySQL.svg';
// import PHP from '../assets/PHP.svg';
// import Python from '../assets/Python.svg';
// import React from '../assets/React.svg';
// import Sass from '../assets/Sass.svg';
// import TailwindCSS from '../assets/Tailwind CSS.svg';
// import Ubuntu from '../assets/Ubuntu.svg';
// import Vercel from '../assets/Vercel.svg';
// import Vite from '../assets/vite.svg';
// import W11 from '../assets/Windows 11.svg';
import linedIn from '../assets/linkedin-app-white-icon.svg';
import github from '../assets/github-white-icon.svg';
import mail from '../assets/mail.svg';

const Hello = () => {

    return(
        <section className="text-white flex flex-col items-center">
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
            
            {/* <div className='flex flex-wrap items-center justify-between w-[300px] md:w-[500px]'>
                <img src={cLanguage} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Git} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={CSS} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={HTML5} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={JS} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={MySql} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={PHP} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Python} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={React} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Sass} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={TailwindCSS} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Ubuntu} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Vercel} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={Vite} alt="" className='w-[50px] h-[50px] m-2'/>
                <img src={W11} alt="" className='w-[50px] h-[50px] m-2'/>
            </div> */}

            <div className='mt-5 flex flex-col items-center'>
                <div className='flex opacity-80 mb-5'>
                    <a href="#" className='p-2'><img src={linedIn} alt="linkedin link" className='w-[35px] h-[35px]'/></a>
                    <a href="#" className='p-2'><img src={github} alt="github link" className='w-[35px] h-[35px]'/></a>
                    <a href="#" className='p-2'><img src={mail} alt="github link" className='w-[35px] h-[35px]'/></a>
                </div>
                <div className='flex opacity-80'><MapPin className='mr-2'/><p>Brzesko | Kraków, Polska</p></div>
                <div className='flex opacity-80'><User className='mr-2'/>
                    <p>Dostępny 
                    <span className='inline-flex relative ml-2'>
                        <span className='h-[8px] w-[8px] bg-green-400 rounded animate-pulse'></span>
                    </span>
                    </p>
                </div>
                <div className='flex opacity-80'><GraduationCap className='mr-2'/> Student - UKEN Kraków - Informatyka</div>
            </div>
            <CircleArrowDown className='opacity-80 my-10 animate-pulse cursor-pointer' size={32}/>
        </section>
    )
}

export default Hello;

