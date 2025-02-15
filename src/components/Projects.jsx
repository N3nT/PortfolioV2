import post from '../assets/post.png'
import react from '../assets/react.svg'
import vite from '../assets/vite.svg'
const Projects = () => {

    return(
        <section className="flex flex-col items-center">
            <h2 className="text-white text-center text-3xl">Projekty</h2>
            {/* data */}
            <div className='flex flex-col md:flex-row items-center'>
                <div className="w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10">
                    <img src={post} alt="" className=''/>
                    <div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50 flex flex-col items-center justify-center'>
                        <p className='text-center text-white text-2xl font-bold fon'>Portfolio <span className='text-green-400'>V2</span></p>
                        <div className='flex mt-10'>
                            <img src={react} alt="" className='mr-5'/>
                            <img src={vite} alt="" />
                        </div>
                        <div>
                            <button className='w-[100px] py-3 bg-green-400 text-white mt-10 rounded-l-lg cursor-pointer'>Live</button>
                            <button className='w-[100px] py-3 bg-white text-black mt-10 rounded-r-lg cursor-pointer'>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10">
                    <img src={post} alt="" className=''/>
                    <div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50 flex flex-col items-center justify-center'>
                        <p className='text-center text-white text-2xl font-bold fon'>Portfolio <span className='text-green-400'>V2</span></p>
                        <div className='flex mt-10'>
                            <img src={react} alt="" className='mr-5'/>
                            <img src={vite} alt="" />
                        </div>
                        <div>
                            <button className='w-[100px] py-3 bg-green-400 text-white mt-10 rounded-l-lg cursor-pointer'>Live</button>
                            <button className='w-[100px] py-3 bg-white text-black mt-10 rounded-r-lg cursor-pointer'>GitHub</button>
                        </div>
                    </div>
                </div>
                <div className="w-[300px] h-[400px] border-2 border-stone-700 rounded-2xl overflow-hidden relative animate-comeFromLeft mt-10">
                    <img src={post} alt="" className=''/>
                    <div className='absolute top-0 w-full h-full bg-black opacity-0 hover:opacity-100 transition-opacity transition-discrete ease-in-out duration-300 delay-50 flex flex-col items-center justify-center'>
                        <p className='text-center text-white text-2xl font-bold fon'>Portfolio <span className='text-green-400'>V2</span></p>
                        <div className='flex mt-10'>
                            <img src={react} alt="" className='mr-5'/>
                            <img src={vite} alt="" />
                        </div>
                        <div>
                            <button className='w-[100px] py-3 bg-green-400 text-white mt-10 rounded-l-lg cursor-pointer'>Live</button>
                            <button className='w-[100px] py-3 bg-white text-black mt-10 rounded-r-lg cursor-pointer'>GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;