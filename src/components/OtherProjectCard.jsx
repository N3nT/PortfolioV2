const OtherProjectCard = ({techStack, title, link}) => {
    return(
        <a href={link} className='bg-stone-900 border-2 border-stone-800 flex items-center p-5 rounded-xl curosr-pointer justify-center opacity-80 hover:*:grayscale-0 min-w-[200px] hover:opacity-100 m-1 space-x-2 transition-all'>
            {techStack ? (techStack.map((tech, index) => {
                return <img className='w-[30px] lg:w-[40px] grayscale' src={tech} alt={tech} key={index}/>
            })) : null}
            <span className='text-white lg:text-xl'>{title}</span>
    </a>
    )
}

export default OtherProjectCard;