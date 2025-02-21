import { useState } from 'react';

import Nav from './components/Nav';
import Hello from './components/Hello';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {  
  const [homeActive, setHomeActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  return (
    <div className="cursor-crosshair bg-radial-[at_40%_40%] from-stone-900 to-stone-950 to-70% h-screen overflow-x-hidden relative z-20 font-[Red_Hat_Display]">
      <Nav homeActive={homeActive} projectsActive={projectsActive} contactActive={contactActive} />
      <Hello setHomeActive={setHomeActive}/>
      <Projects setProjectsActive={setProjectsActive}/>
      <Contact setContactActive={setContactActive}/>
      {/* <MyComponent/> */}
      {/* <div className='h-[1000px]'>
        <p className='text-white'>dupa</p>
      </div> */}
      <Footer/>
    </div>
  )
}

export default App
