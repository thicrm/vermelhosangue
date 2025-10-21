import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AgeVerification from './components/AgeVerification'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Piercings from './pages/Piercings'
import About from './pages/About'
import Lobuloplasty from './pages/Lobuloplasty'
import GenitalPiercing from './pages/GenitalPiercing'
import BodyModification from './pages/BodyModification'

function App() {
  const [isVerified, setIsVerified] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check if user has already verified their age
    const verified = localStorage.getItem('ageVerified')
    if (verified === 'true') {
      setIsVerified(true)
    }
    setIsLoading(false)
  }, [])

  const handleAgeVerification = (verified) => {
    if (verified) {
      localStorage.setItem('ageVerified', 'true')
      setIsVerified(true)
    }
  }

  if (isLoading) {
    return (
      <div className="flex-center" style={{ height: '100vh' }}>
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      </div>
    )
  }

  if (!isVerified) {
    return <AgeVerification onVerify={handleAgeVerification} />
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/piercings" element={<Piercings />} />
            <Route path="/about" element={<About />} />
            <Route path="/lobuloplasty" element={<Lobuloplasty />} />
            <Route path="/genital-piercing" element={<GenitalPiercing />} />
            <Route path="/body-modification" element={<BodyModification />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
