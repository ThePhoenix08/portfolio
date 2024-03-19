import { useState } from 'react'
import './scss/App.scss'
import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import Hero from './sections/hero/Hero'
import About from './sections/about/About'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Footer />
    </>
  )
}

export default App
