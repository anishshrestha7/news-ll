import React from 'react'
import Header from './component/Header'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Explore from './pages/Explore'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Explore" element={<Explore />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App