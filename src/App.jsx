import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Project from './pages/Project'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    
<div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/project" element={<Project />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
