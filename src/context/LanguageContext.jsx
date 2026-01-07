import React, { createContext, useState, useContext, useEffect } from 'react'
import { en } from '../translations/en'
import { pt } from '../translations/pt'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or default to 'pt'
    const savedLanguage = localStorage.getItem('websiteLanguage')
    return savedLanguage || 'pt'
  })

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem('websiteLanguage', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'pt' : 'en')
  }

  const t = language === 'en' ? en : pt

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageContext

