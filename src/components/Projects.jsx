import WebProjectCard from './WebProjectCard'
import OtherProjectCard from './OtherProjectCard';
import webProjectsData from '../webProjects.json';
import otherProjectsData from '../otherProjects.json';

const Projects = () => {
    return(
        <section className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl">Projekty</h2>
            <h3 className='text-white/70 text-xl mt-10'>WebDevelopment</h3>
            <div className='flex flex-col md:flex-row items-center *:md:mx-5 max-w-[1100px] flex-wrap justify-center'>
                {webProjectsData ? webProjectsData.projects.map((project, index) => {
                    return(<WebProjectCard key={index} projectImg={project.image} techStack={project.techstack} liveLink={project.liveLink} repoLink={project.repoLink} projectTitle={project.name}/>)
                }) : null}
            </div>
            <h3 className='text-white/70 text-xl my-10'>Other</h3>
            <div className='flex flex-wrap justify-center items-center max-w-[1000px]'>
               {otherProjectsData ? (otherProjectsData.projects.map((project, index) => {
                    console.log(project);
                    return (<OtherProjectCard key={index} techStack={project.techstack} title={project.name} link={project.repoLink}/>)
               })) 
               : 
               (null)}
            </div>
            <a href="https://github.com/N3nT?tab=repositories" className='bg-green-400 text-white p-5 font-bold text-lg rounded-2xl mt-10 hover:bg-green-700'>Check all projects</a>
        </section>
    )
}

export default Projects;