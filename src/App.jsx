import { useState } from 'react'
import './styles/main.scss'

import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <Routes>   
        <Route path="/about" element={<About />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
