import { useState } from 'react'
import './scss/App.scss'
import Header from './sections/header/Header'
import Footer from './sections/footer/Footer'
import Hero from './sections/hero/Hero'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  )
}

export default App
