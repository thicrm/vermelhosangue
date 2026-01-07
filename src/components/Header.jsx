import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  const navigation = [
    { name: 'Home', href: '/' }, // Keep "Home" as is - not translated
    { name: t.nav.about, href: '/about' },
    { name: t.nav.piercings, href: '/piercings' },
    { name: t.nav.care, href: '/care' },
    { name: t.nav.genitalPiercing, href: '/genital-piercing' }
  ]

  const isActive = (path) => location.pathname === path

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid #e5e5e5'
    }}>
      {/* Top bar with contact info */}
      <div style={{
        backgroundColor: '#dc2626',
        color: 'white',
        padding: '8px 0',
        fontSize: '0.9rem'
      }}>
        <div className="container flex-between">
          <div className="flex" style={{ gap: '2rem', alignItems: 'center' }}>
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '0.9rem',
                cursor: 'pointer',
                padding: '4px 8px',
                fontFamily: 'Inter, sans-serif',
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.target.style.opacity = '0.8'}
              onMouseLeave={(e) => e.target.style.opacity = '1'}
            >
              <span style={{ 
                fontWeight: language === 'pt' ? '600' : '400',
                opacity: language === 'pt' ? '1' : '0.7'
              }}>
                PT-BR
              </span>
              <span style={{ margin: '0 4px', opacity: 0.7 }}>|</span>
              <span style={{ 
                fontWeight: language === 'en' ? '600' : '400',
                opacity: language === 'en' ? '1' : '0.7'
              }}>
                EN-US
              </span>
            </button>
            
            <a href="tel:+5511979826688" className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              (11) 97982-6688
            </a>
            <a href="mailto:vermelhosanguejewelry@gmail.com" className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              vermelhosanguejewelry@gmail.com
            </a>
          </div>
          <div>
            <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              color: '#dc2626',
              padding: '4px 12px',
              borderRadius: '4px',
              fontWeight: '600',
              fontSize: '0.8rem'
            }}>
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav style={{ padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link to="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              {/* Solo Logo */}
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20red%20background.png" 
                alt="Vermelho Sangue Body Jewelry" 
                style={{
                  height: '50px',
                  width: 'auto'
                }}
                onError={(e) => {
                  // Fallback to text if logo not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Text Content */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '0.2rem'
              }}>
                <div style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#dc2626',
                  fontFamily: 'Poppins, sans-serif',
                  lineHeight: '1'
                }}>
                  VERMELHO SANGUE
                </div>
                <div style={{
                  fontSize: '0.9rem',
                  fontWeight: '400',
                  color: '#666',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  body jewelry
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="flex" style={{ gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                style={{
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#dc2626' : '#333',
                  fontWeight: isActive(item.href) ? '600' : '400',
                  fontSize: '1rem',
                  position: 'relative',
                  padding: '0.5rem 0'
                }}
              >
                {item.name}
                {isActive(item.href) && (
                  <motion.div
                    layoutId="activeTab"
                    style={{
                      position: 'absolute',
                      bottom: '-1rem',
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#dc2626'
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              flexShrink: 0
            }}
            className="mobile-menu-btn"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              backgroundColor: 'white',
              borderTop: '1px solid #e5e5e5',
              padding: '1rem 0'
            }}
          >
            <div className="container">
              <div className="flex-column" style={{ gap: '1rem' }}>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      color: isActive(item.href) ? '#dc2626' : '#333',
                      fontWeight: isActive(item.href) ? '600' : '400',
                      fontSize: '1.1rem',
                      padding: '0.5rem 0'
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e5e5' }}>
                  <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          
          nav > div > div:first-of-type {
            display: none !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
