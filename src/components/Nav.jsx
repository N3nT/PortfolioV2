import { useState } from 'react';

const Underline = () => {
    return(
        <div className="w-full h-[1px] bg-green-400 animate-underline"></div>
    )
}

const Nav = () => {
    const [activeSection, setActiveSection] = useState(0);

    return(
        <nav className="backdrop-blur-xs sticky top-0 w-full flex justify-center border-b-[1px] border-stone-400 z-10">
            {/*border-stone-400*/}
            <div className="max-w-[1000px]">
                <ul className="text-white flex w-full h-[60px] shadow-2xl">
                    <li className="p-4 text-lg flex-col">
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Home</p>
                        {activeSection === 0 ? <Underline/> : null}
                    </li>
                    <li className="p-4 text-lg md:mx-5">
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Projekty</p>
                        {activeSection === 1 ? <Underline/> : null}
                    </li>
                    <li className="p-4 text-lg">
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Kontakt</p>
                        {activeSection === 2 ? <Underline/> : null}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;