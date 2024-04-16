import React from 'react'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './Home'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Home />} />
      </Routes>
      
    </Router>
  )
}

export default Routing
