import ProjectCard from './ProjectCard'
import data from '../data.json';

const Projects = () => {
    return(
        <section className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl">Projekty</h2>
            <div className='flex flex-col md:flex-row items-center *:md:mx-5 max-w-[1100px] flex-wrap justify-center'>
                {data ? data.projects.map((project, index) => {
                    return(<ProjectCard key={index} projectImg={project.imageMobile} techStack={project.techstack} liveLink={project.liveLink} repoLink={project.repoLink} projectTitle={project.name}/>)
                }) : null}
            </div>
            <a href="https://github.com/N3nT?tab=repositories" className='bg-green-400 text-white p-5 font-bold text-lg rounded-2xl mt-10 hover:bg-green-700'>Check all projects</a>
        </section>
    )
}

export default Projects;