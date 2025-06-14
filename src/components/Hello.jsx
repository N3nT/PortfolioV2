import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "motion/react"

import { MapPin, User, GraduationCap } from 'lucide-react';
import face from '../assets/face.webp';
import cLanguage from '../assets/C.svg';
import Git from '../assets/Git.svg';
import JS from '../assets/JavaScript.svg';
import MySql from '../assets/MySQL.svg';
import PHP from '../assets/PHP.svg';
import Python from '../assets/Python.svg';
import React from '../assets/react.svg';
import Sass from '../assets/Sass.svg';
import TailwindCSS from '../assets/Tailwind CSS.svg';
import Vite from '../assets/vite.svg';
import linedIn from '../assets/linkedin-app-white-icon.svg';
import github from '../assets/github-white-icon.svg';
import mail from '../assets/mail.svg';
import discord from '../assets/discord.svg';
import docker from '../assets/docker.svg';
import eslint from '../assets/ESLint.svg';
import ts from '../assets/TypeScript.svg';
import node from '../assets/Node.js.svg';
import MongoDb from '../assets/MongoDb.svg';
import Express from '../assets/Express.svg';


const Hello = ({setHomeActive}) => {
    const { ref, inView } = useInView({threshold: [0.5]});

    useEffect(() => {
        setHomeActive(inView);
    }, [inView]);
   
    return(
        <section className="text-white flex flex-col items-center overflow-hidden mb-15" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: -200}}
                animate={{ opacity: 1, y: 0,
                    transition: { duration: 1 }
                }}>
                <div className='w-[238px] h-[238px] overflow-hidden rounded-full bg-white border-5 border-green-400 animate-bounce mt-15 flex items-center justify-center'>
                    <div className='border-5 border-stone-700 rounded-full w-[230px] h-[230px] overflow-hidden'>
                        <img className='scale-80' src={face} alt="Zdjecie mojej osoby" />
                    </div>
                </div>
            </motion.div>
            <h1 className='mt-5 font-bold text-4xl text-center'>Bartosz Widlak</h1>
            <div className='flex items-center'>
                <p className='uppercase opacity-80 animate-typewriter text-center overflow-hidden whitespace-nowrap font-[Anonymous_Pro]'>front-end developer</p>
                <div className='w-[1px] h-[20px] bg-green-400 animate-blinkTextCursor'></div>
                
            </div>

            <p className='opacity-80'>I nie tylko...</p>
            
            <div className='mt-5 flex flex-col items-center'>
                <div className='flex opacity-80 mb-5 items-center *:p-2 *:hover:opacity-70 *:transition-opacity'>
                    <a href="https://www.linkedin.com/in/bartosz-widlak-06a316313/" target='_blank'><img src={linedIn} alt="linkedin link" className='w-[35px] h-[35px] md:w-[45px] md:h-[45px]' aria-label="link do linkedin"/></a>
                    <a href="https://github.com/N3nT" target='_blank'><img src={github} alt="github link" className='w-[40px] h-[40px] md:w-[50px] md:h-[50px]' aria-label="link do githuba"/></a>
                    <a href="https://discord.com/users/419910814112153610" target='_blank'><img src={discord} alt="discord link" className='md:w-[60px] md:h-[60px]' aria-label="link do profilu discord"/></a>
                    <a href="mailto:bartosz.widlak@op.pl" target='_blank'><img src={mail} alt="mail link" className='w-[45px] h-[45px] md:w-[55px] md:h-[55px]' aria-label="link do maila"/></a>
                </div>
                <div className='flex opacity-80 md:text-lg'><GraduationCap className='mr-2'/> Student - UKEN Kraków | Informatyka</div>
                <div className='flex opacity-80 md:text-lg'><MapPin className='mr-2'/><p>Brzesko | Kraków, Polska</p></div>
                <div className='flex opacity-80 md:text-lg'><User className='mr-2'/>
                    <p>Dostępny 
                    <span className='inline-flex relative ml-2'>
                        <span className='h-[8px] w-[8px] md:h-[10px] md:w-[10px] bg-green-400 rounded animate-pulse'></span>
                    </span>
                    </p>
                </div>
            </div>

            <div className='flex w-full max-w-[1000px] overflow-hidden mt-10 relative'>
                <div className='flex w-full max-w-[1000px] my-10 *:w-[60px] *:md:w-[65px] *:mx-8 relative items-center *:absolute *:-right-[125px] *:animate-rightSlide *:lg:animate-rightSlideWithOpacity'>
                    <img src={React} alt="React logo"/>
                    <img src={TailwindCSS} alt="TailwindCSS logo" style={{animationDelay: '-2s'}}/>
                    <img src={Python} alt="Python logo" style={{animationDelay: '-4s'}}/>
                    <img src={PHP} alt="PHP logo" style={{animationDelay: '-6s'}}/>
                    <img src={Vite} alt="Vite logo" style={{animationDelay: '-8s'}}/>
                    <img src={MySql} alt="MySQL logo" style={{animationDelay: '-10s'}}/>
                    <img src={Sass} alt="Sass logo" style={{animationDelay: '-12s'}}/>
                    <img src={cLanguage} alt="C logo" style={{animationDelay: '-14s'}}/>
                    <img src={Git} alt="Git logo" style={{animationDelay: '-16s'}}/>
                    <img src={JS} alt="JS logo" style={{animationDelay: '-18s'}}/>
                    <img src={docker} alt="Docker logo" style={{animationDelay: '-20s'}}/>
                    <img src={eslint} alt="Eslint logo" style={{animationDelay: '-22s'}}/>
                    <img src={ts} alt="TypeScript logo" style={{animationDelay: '-24s'}}/>
                    <img src={node} alt="Node logo" style={{animationDelay: '-26s'}}/>
                    <img src={MongoDb} alt="MongoDB logo" style={{animationDelay: '-28s'}}/>
                </div>
            </div>
        </section>
    )
}

export default Hello;

