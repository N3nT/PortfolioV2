const OtherProjectCard = ({techStack, title, link}) => {
    console.log(techStack);
    return(
        <a href={link} className='bg-stone-900 border-2 border-stone-800 flex items-center p-5 rounded-xl curosr-pointer justify-center hover:*:grayscale-0 min-w-[200px] hover:opacity-80 m-1'>
            {techStack ? (techStack.map((tech, index) => {
                return <img className='w-[30px] grayscale' src={tech} alt={tech} key={index}/>
            })) : null}
            <span className='mx-2 w-[1px] h-[20px] bg-white'></span>
            <span className='text-white'>{title}</span>
    </a>
    )
}

export default OtherProjectCard;