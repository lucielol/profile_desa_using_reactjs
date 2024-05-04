import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import components
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
