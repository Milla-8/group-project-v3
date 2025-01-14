import { useState } from 'react'
import './styles/main.scss'

import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/about/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>

      <Routes>
       
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App
