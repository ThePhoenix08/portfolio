import { useState } from 'react'
import './scss/App.scss'
import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'
import { IconContext } from "react-icons";
import Projects from './sections/projects/Projects'
import { useMediaQuery } from 'react-responsive';

function App() {
  const mode = useMediaQuery({
    query: '(prefers-color-scheme: dark)'
  })
  const [darkMode, setDarkMode] = useState(mode);

  const toggleDarkMode = () => {
    setDarkMode((state) => (!state));
  };

  const root_classes = document.documentElement.classList;
  if (darkMode) {
    root_classes.add('dark-mode');
  } else {
    root_classes.remove('dark-mode');
  }

  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Header mode={darkMode} toggleFunc={toggleDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default App
