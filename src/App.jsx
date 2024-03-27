import { useState } from 'react'
import './scss/App.scss'
import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'
import Skills from './sections/skills/Skills'
import Contact from './sections/contact/Contact'
import { IconContext } from "react-icons";

function App() {
  return (
    <>
      <IconContext.Provider value={{ className: 'react-icons' }}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Contact />
        <Footer />
      </IconContext.Provider>
    </>
  )
}

export default App
