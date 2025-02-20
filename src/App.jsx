import Nav from './components/Nav';
import Hello from './components/Hello';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {  
  return (
    <div className="cursor-crosshair bg-radial-[at_40%_40%] from-stone-900 to-stone-950 to-70% h-screen overflow-x-hidden relative z-20 font-[Red_Hat_Display]">
      <Nav/>
      <Hello/>
      <Projects/>
      <Contact/>
      {/* <div className='h-[1000px]'>
        <p className='text-white'>dupa</p>
      </div> */}
      <Footer/>
    </div>
  )
}

export default App
