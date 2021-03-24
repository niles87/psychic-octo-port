import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { sections } from './utils/sections';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [titles] = useState([...sections]);
  const [currentSection, setCurrentSection] = useState(titles[0]);
  return (
    <div className='App'>
      <Header
        sections={titles}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>
        {currentSection === 'about me' && <About />}
        {currentSection === 'contact' && <ContactForm />}
        {currentSection === 'portfolio' && <Portfolio />}
        {currentSection === 'resume' && <Resume />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
