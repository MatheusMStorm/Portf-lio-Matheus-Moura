
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Navbar />
      <main>
        <section id="home">
          <Home />
        </section>
        <div className="bg-white">
          <section id="about" className="py-20 md:py-32 px-6 container mx-auto">
            <About />
          </section>
          <section id="experience" className="py-20 md:py-32 px-6 container mx-auto bg-gray-50">
            <Experience />
          </section>
          <section id="skills" className="py-20 md:py-32 px-6 container mx-auto">
            <Skills />
          </section>
           <section id="projects" className="py-20 md:py-32 px-6 container mx-auto bg-gray-50">
            <Projects />
          </section>
        </div>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default App;
