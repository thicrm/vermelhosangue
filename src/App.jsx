import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import AgeVerification from './components/AgeVerification'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Piercings from './pages/Piercings'
import About from './pages/About'
import Care from './pages/Care'
import GenitalPiercing from './pages/GenitalPiercing'
import { lazy, Suspense } from 'react'

// Code splitting for Gallery page to improve initial load
const Gallery = lazy(() => import('./pages/Gallery'))

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

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          {/* Render homepage behind age verification when not verified */}
          {!isVerified && (
            <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              overflow: 'hidden',
              filter: 'blur(15px)',
              transform: 'scale(1.05)',
              zIndex: 1
            }}>
              <Header />
              <main style={{ paddingTop: '120px' }}>
                <Home />
              </main>
              <Footer />
            </div>
          )}
          
          {/* Age verification overlay */}
          {!isVerified && (
            <AgeVerification onVerify={handleAgeVerification} />
          )}

          {/* Normal app content when verified */}
          {isVerified && (
            <>
              <Header />
              <main>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/piercings" element={<Piercings />} />
                  <Route path="/care" element={<Care />} />
                  <Route path="/genital-piercing" element={<GenitalPiercing />} />
                  <Route 
                    path="/gallery" 
                    element={
                      <Suspense fallback={
                        <div style={{ 
                          paddingTop: '120px', 
                          minHeight: '80vh', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center' 
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            border: '3px solid #f3f3f3',
                            borderTop: '3px solid #dc2626',
                            animation: 'spin 1s linear infinite'
                          }} />
                          <style>{`
                            @keyframes spin {
                              0% { transform: rotate(0deg); }
                              100% { transform: rotate(360deg); }
                            }
                          `}</style>
                        </div>
                      }>
                        <Gallery />
                      </Suspense>
                    } 
                  />
                </Routes>
              </main>
              <Footer />
            </>
          )}
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
