// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About'
import Projects from './routes/Projects'
import Contact from './routes/Contact'
import Skills from './routes/Skills'

function App() {

  return (
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/project" element={<Projects/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/skills" element={<Skills/>}/>
      </Routes>
  )
}

export default App
