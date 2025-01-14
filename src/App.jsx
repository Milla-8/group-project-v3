import { useState } from 'react'
import './styles/main.scss'

import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';
import Navbar from './pages/navbar/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Navbar />
      <div className="content">

      <Routes>
       
        <Route path="/about" element={<About />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
