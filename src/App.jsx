import './App.css'

import { useState } from 'react'
import Home from './pages/Home'
import Nav from './components/nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Errpage from './pages/Errpage'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Errpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
