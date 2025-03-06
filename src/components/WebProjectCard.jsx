import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
const WebProjectCard = ({ projectImg, techStack, liveLink, repoLink, projectTitle }) => {

	const [imageClicked, setImageClicked] = useState(false);

	return (
			<div className='w-[300px] h-[400px] border-2 border-green-400 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10 cursor-default'>
				<AnimatePresence>
				{!imageClicked && <motion.img src={projectImg} 
											alt={`${projectTitle} preview`} 
											initial={{ y: '-100%' }} 
											animate={{ y: 0 }} 
											exit={{ y: '-100%' }} 
											transition={{ duration: 0.5 }}
											onClick={() => {setImageClicked(!imageClicked)}}
											className='z-10 absolute top-0 cursor-pointer'/>}
				</AnimatePresence>
				<div className='absolute top-0 w-full h-full bg-stone-900 flex flex-col items-center justify-center p-5 cursor-pointer' onClick={() => {setImageClicked(!imageClicked)}}>
					<p className='text-center text-white text-2xl md:text-3xl font-bold'>
						{projectTitle}
					</p>
					<div className='flex my-10 space-x-5 flex-wrap justify-center'>
						{techStack ? 
							(techStack.map((tech, index) => { return (<img key={index} src={tech} alt={`${tech} logo`} className="w-[50px] m-3"/>)})) : null}
					</div>
					<div className="*:py-5 *:px-8 md:text-lg *:transition-all *:">
						{liveLink ? 
							(<a className='bg-green-400 text-white rounded-l-lg inline-flex hover:bg-green-700' href={liveLink} target="_blank" aria-label="link do wersji live projektu">Live</a>) : 
							(<p className='bg-green-700 text-white rounded-l-lg cursor-not-allowed inline-block'>Live</p>)
						}
						
						{repoLink ? 
							(<a className='bg-white text-black rounded-r-lg inline-flex hover:bg-stone-700 hover:text-white' href={repoLink} target="_blank" aria-label="link do repozytorium projektu">GitHub</a>) : 
							(<p className='bg-white/70 text-black rounded-r-lg cursor-not-allowed inline-block'>GitHub</p>)
						}
					</div>
				</div>
			</div>
	)
}

export default WebProjectCard
