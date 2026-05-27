import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Scene3D from './components/Scene3D';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="app">
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Scene3D />
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
