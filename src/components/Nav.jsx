const Underline = () => {
    return(
        <div className="w-full h-[1px] md:h-[2px] bg-green-400 animate-underline"></div>
    )
}

const Nav = ({homeActive, projectsActive, contactActive}) => {
    return(
        <nav className="backdrop-blur-xs sticky top-0 w-full flex justify-center border-b-[1px] border-stone-400 z-10">
            <div className="max-w-[1000px]">
                <ul className="text-white flex w-full h-[60px] md:h-[65px] shadow-2xl *:p-4 *:text-lg *:md:text-xl md:space-x-5 *:lg:text-2xl lg:space-x-10">
                    <li>
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Home</p>
                        {homeActive ? <Underline/> : null}
                    </li>
                    <li>
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Projekty</p>
                        {projectsActive ? <Underline/> : null}
                    </li>
                    <li>
                        <p className='drop-shadow-[2px_2px_2px_rgba(0,0,0,1)]'>Kontakt</p>
                        {contactActive ? <Underline/> : null}
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;