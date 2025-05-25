import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  
  return (
    <>
    <BrowserRouter>
      <div className='bg-zinc-900 min-h-screen w-full text-white'>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App