import { useState } from 'react'
import './styles/main.scss'

import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Navbar from './pages/navbar/Navbar';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header.jsx'
import Beans from './pages/beans/Beans'
import Facts from './pages/facts/Facts'
//https://jellybellywikiapi.onrender.com/api/Beans/?pageIndex=1&pageSize=20

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <Routes>   
        <Route path="/about" element={<About />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/beans" element={<Beans />} />
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
