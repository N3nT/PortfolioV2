import { motion } from 'motion/react';
import { useInView } from "react-intersection-observer";
const WebProjectCard = ({ projectImg, techStack, liveLink, repoLink, projectTitle, isMobile }) => {
	const { ref, inView } = useInView({triggerOnce: true, threshold: [1]});
	return (
		<motion.div
			ref={ref}
			initial={isMobile ? {x: -50, opacity: 0} : {x: 0, opacity: 1}}
			animate={inView ? {x: 0, opacity: 1} : {}}
			transition={{duration: 0.8}}
		>
			<div className='w-[300px] h-[400px] border-2 border-green-400 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10 cursor-default'>
				<img src={projectImg} alt=''/>
				<div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-5'>
					<p className='text-center text-white text-2xl md:text-3xl font-bold'>
						{projectTitle}
					</p>
					<div className='flex my-10 space-x-5 flex-wrap justify-center'>
						{techStack ? 
							(techStack.map((tech, index) => { return (<img key={index} src={tech} alt={`${tech} logo`} className="w-[50px] m-3"/>)})) : null}
					</div>
					<div className="*:py-5 *:px-8 md:text-lg *:transition-all *:">
						{liveLink ? 
							(<a className='bg-green-400 text-white rounded-l-lg inline-flex hover:bg-green-700' href={liveLink} target="_blank">Live</a>) : 
							(<p className='bg-green-700 text-white rounded-l-lg cursor-not-allowed inline-block'>Live</p>)
						}
						
						{repoLink ? 
							(<a className='bg-white text-black rounded-r-lg inline-flex hover:bg-stone-700 hover:text-white' href={repoLink} target="_blank">GitHub</a>) : 
							(<p className='bg-white/70 text-black rounded-r-lg cursor-not-allowed inline-block'>GitHub</p>)
						}
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default WebProjectCard
