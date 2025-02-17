const ProjectCard = ({ projectImg, techStack, liveLink, repoLink, projectTitle }) => {
	return (
		<div className='w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10'>
			<img src={projectImg} alt=''/>
			<div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50 flex flex-col items-center justify-center'>
				<p className='text-center text-white text-2xl font-bold fon'>
					{projectTitle}
				</p>
				<div className='flex mt-10 space-x-5 flex-wrap justify-center'>
					{techStack ? 
                        (techStack.map((tech, index) => { return (<img key={index} src={tech} alt={`${tech} logo`} />)})) : null}
				</div>
				<div className="mt-10 *:py-5 *:px-8 *:mt-10">
                    {liveLink ? 
                        (<a className='bg-green-400 text-white rounded-l-lg' href={liveLink}>Live</a>) : 
                        (<p className='bg-green-800 text-white rounded-l-lg cursor-not-allowed inline-block'>Live</p>)
                    }
					
                    {repoLink ? 
                        (<a className='bg-white text-black rounded-r-lg' href={repoLink}>GitHub</a>) : 
                        (<p className='bg-white/70 text-black rounded-r-lg cursor-not-allowed inline-block'>GitHub</p>)
                    }
				</div>
			</div>
		</div>
	)
}

export default ProjectCard
