import React from 'react'
import NavBar from './Components/NavBar'
import HomePage from './Components/HomePage'
import AboutPage from './Components/AboutPage'

function App() {
  const name = 'joshua'
  return (
    <div>
      <NavBar/>
      <HomePage/>
      <AboutPage/>
    </div>
  )
}

export default App