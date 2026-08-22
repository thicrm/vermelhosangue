import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import AppLink from './AppLink'
import { ROUTES } from '../constants/routes'

const HEADER_LOGO_SRC =
  'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/vermelho%20sangue%20png%20header.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()

  const navigation = [
    { id: 'home', name: 'Home', href: ROUTES.home },
    { id: 'gallery', name: t.nav.gallery, href: ROUTES.gallery },
    { id: 'piercings', name: t.nav.piercings, href: ROUTES.piercings },
    { id: 'genital', name: t.nav.genitalPiercing, href: ROUTES.genitalPiercing },
    { id: 'care', name: t.nav.care, href: ROUTES.care },
    { id: 'about', name: t.nav.about, href: ROUTES.about }
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
                transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
            
            <a href="tel:+5511979826688" className="flex top-bar-contact" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <Phone size={16} />
              <span className="contact-text">(11) 97982-6688</span>
            </a>
            <a href="mailto:vermelhosanguejewelry@gmail.com" className="flex top-bar-email" style={{ alignItems: 'center', gap: '0.5rem' }}>
              <Mail size={16} />
              vermelhosanguejewelry@gmail.com
            </a>
          </div>
          <div>
            <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              color: '#dc2626',
              padding: '4px 12px',
              borderRadius: '10px',
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
          <AppLink to={ROUTES.home} style={{ textDecoration: 'none', flexShrink: 0 }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <img
                src={HEADER_LOGO_SRC}
                alt="Vermelho Sangue Body Jewelry"
                decoding="async"
                className="header-brand-logo-sizer"
                style={{
                  height: '50px',
                  width: 'auto',
                  display: 'block',
                  flexShrink: 0
                }}
                onError={(e) => {
                  e.target.style.display = 'none'
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
          </AppLink>

          {/* Desktop Navigation - Centered */}
          <div className="flex desktop-nav" style={{ gap: '2rem', alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            {navigation.map((item) => (
              <AppLink
                key={item.id}
                to={item.href}
                style={{
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#dc2626' : '#333',
                  fontWeight: isActive(item.href) ? '600' : '400',
                  fontSize: '1rem',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
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
              </AppLink>
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
              <div className="flex-column" style={{ gap: '1rem', alignItems: 'center' }}>
                {navigation.map((item) => (
              <AppLink
                key={item.id}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  color: isActive(item.href) ? '#dc2626' : '#333',
                  fontWeight: isActive(item.href) ? '600' : '400',
                  fontSize: '1.1rem',
                  padding: '0.5rem 0',
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  textAlign: 'center'
                }}
              >
                    {item.name}
                  </AppLink>
                ))}
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #e5e5e5', width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '80%', maxWidth: '300px', textAlign: 'center' }}>
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
          
          .desktop-nav {
            display: none !important;
          }
        }
        
        /* Responsive fixes for top bar */
        @media (max-width: 1024px) {
          .top-bar-email {
            display: none !important;
          }
        }
        
        @media (max-width: 768px) {
          .top-bar-contact .contact-text {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          .top-bar-contact {
            display: none !important;
          }
        }
        
        /* Responsive logo and title */
        @media (max-width: 768px) {
          header .header-brand-logo-sizer {
            height: 35px !important;
          }
          
          header div[style*="1.8rem"] {
            font-size: 1.2rem !important;
          }
          
          header div[style*="0.9rem"][style*="body jewelry"] {
            font-size: 0.7rem !important;
          }
        }
        
        @media (max-width: 480px) {
          header .header-brand-logo-sizer {
            height: 30px !important;
          }
          
          header div[style*="1.8rem"], 
          header div[style*="1.2rem"] {
            font-size: 1rem !important;
          }
          
          header div[style*="body jewelry"] {
            font-size: 0.65rem !important;
          }
        }
      `}</style>
    </header>
  )
}

export default Header
