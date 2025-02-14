import post from '../assets/post.png'
const Projects = () => {

    return(
        <section className="mt-10 flex flex-col items-center">
            <h2 className="text-white text-center text-3xl mb-10">Projekty</h2>
            {/* data */}
            <div className="w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative">
                <img src={post} alt="" className=''/>
                <div className='absolute top-0 w-full h-full bg-green-400 opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50'>
                    <p className='text-center text-white text-2xl font-bold'>Portfolio V2</p>
                    <div>
                        <button className='px-9 py-3 bg-black text-white'>Live</button>
                        <button className='px-9 py-3 bg-white text-black'>GitHub</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;