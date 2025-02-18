const WebProjectCard = ({ projectImg, techStack, liveLink, repoLink, projectTitle }) => {
	return (
		<div className='w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10'>
			<img src={projectImg} alt=''/>
			<div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50 flex flex-col items-center justify-center p-5'>
				<p className='text-center text-white text-2xl font-bold fon'>
					{projectTitle}
				</p>
				<div className='flex my-10 space-x-5 flex-wrap justify-center'>
					{techStack ? 
                        (techStack.map((tech, index) => { return (<img key={index} src={tech} alt={`${tech} logo`} className="w-[50px] m-3"/>)})) : null}
				</div>
				<div className="*:py-5 *:px-8">
                    {liveLink ? 
                        (<a className='bg-green-400 text-white rounded-l-lg' href={liveLink} target="_blank">Live</a>) : 
                        (<p className='bg-green-800 text-white rounded-l-lg cursor-not-allowed inline-block'>Live</p>)
                    }
					
                    {repoLink ? 
                        (<a className='bg-white text-black rounded-r-lg' href={repoLink} target="_blank">GitHub</a>) : 
                        (<p className='bg-white/70 text-black rounded-r-lg cursor-not-allowed inline-block'>GitHub</p>)
                    }
				</div>
			</div>
		</div>
	)
}

export default WebProjectCard
