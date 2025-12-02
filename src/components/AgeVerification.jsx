import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

const AgeVerification = ({ onVerify }) => {
  const [isVisible, setIsVisible] = useState(true)
  const { t } = useLanguage()

  const handleConfirm = () => {
    setIsVisible(false)
    setTimeout(() => {
      onVerify(true)
    }, 300)
  }

  const handleDeny = () => {
    window.location.href = 'https://www.google.com'
  }

  if (!isVisible) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="age-verification"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#333'
      }}
    >
      {/* Blur overlay - blurs the homepage behind */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backdropFilter: 'blur(20px)',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        zIndex: 1
      }} />

      {/* Content */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="verification-content"
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '600px',
          padding: '3rem',
          backgroundColor: 'rgba(255, 255, 255, 0.98)',
          borderRadius: '16px',
          border: '2px solid #dc2626',
          boxShadow: '0 20px 60px rgba(220, 38, 38, 0.3)',
          backdropFilter: 'blur(10px)'
        }}
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '2rem' }}
        >
          <img 
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20red%20background.png"
            alt="Vermelho Sangue Body Jewelry"
            style={{
              height: '120px',
              width: 'auto',
              marginBottom: '1rem'
            }}
            onError={(e) => {
              // Fallback to text if logo not found
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'block';
            }}
          />
          <div style={{ display: 'none' }}>
          <h1 style={{ 
            fontSize: '3rem', 
            marginBottom: '1rem',
            color: '#dc2626',
            fontFamily: 'Poppins, sans-serif'
          }}>
            VERMELHO SANGUE
          </h1>
          <h2 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '2rem',
            color: '#dc2626',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '400'
          }}>
            BODY JEWELRY
          </h2>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '2rem',
            fontFamily: 'Poppins, sans-serif',
            color: '#dc2626',
            fontWeight: '700'
          }}>
            {t.ageVerification.title}
          </h2>
          
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            lineHeight: '1.6',
            color: '#333'
          }}>
            {t.ageVerification.description}
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#b91c1c' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfirm}
              style={{
                padding: '15px 30px',
                backgroundColor: '#dc2626',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                minWidth: '150px',
                fontFamily: 'Poppins, sans-serif',
                transition: 'all 0.3s ease'
              }}
            >
              {t.ageVerification.confirm}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#dc2626', color: 'white' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDeny}
              style={{
                padding: '15px 30px',
                backgroundColor: 'transparent',
                color: '#dc2626',
                border: '2px solid #dc2626',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                minWidth: '150px',
                fontFamily: 'Poppins, sans-serif',
                transition: 'all 0.3s ease'
              }}
            >
              {t.ageVerification.deny}
            </motion.button>
          </div>
          
          <p style={{ 
            fontSize: '0.9rem', 
            marginTop: '2rem',
            opacity: 0.7,
            color: '#666'
          }}>
            {t.ageVerification.disclaimer}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default AgeVerification
