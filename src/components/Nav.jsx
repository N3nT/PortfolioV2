const Underline = () => {
    return(
        <div className="w-full h-[1px] md:h-[2px] bg-green-400 animate-underline"></div>
    )
}

const Nav = ({homeActive, projectsActive, contactActive}) => {
    return(
        <nav className="backdrop-blur-xs sticky top-0 w-full flex justify-center border-b-[1px] border-stone-400 z-20 will-change-transform">
            <div className="max-w-[1000px]">
                <ul className="text-white flex w-full h-[60px] md:h-[65px] shadow-2xl *:p-4 *:text-lg *:md:text-xl md:space-x-5 *:lg:text-2xl lg:space-x-10 *:hover:text-green-400">
                    <li>
                        <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]' href="#home" aria-label="link do sekcji home">Home</a>
                        {homeActive ? <Underline/> : null}
                    </li>
                    <li>
                        <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]' href="#projects" aria-label="link do sekcji projekty">Projekty</a>
                        {projectsActive ? <Underline/> : null}
                    </li>
                    <li>
                        <a className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]' href='#contact' aria-label="link do sekcji kontakt">Kontakt</a>
                        {contactActive ? <Underline/> : null}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;