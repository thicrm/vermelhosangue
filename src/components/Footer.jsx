import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Footer = () => {
  const { t } = useLanguage()
  return (
    <footer style={{
      backgroundColor: '#111',
      color: 'white',
      padding: '3rem 0 1rem'
    }}>
      <div className="container">
        <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
          {/* Company Info */}
          <div>
            {/* Footer Logo */}
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20red%20background.png" 
                alt="Vermelho Sangue Body Jewelry" 
                style={{
                  height: '40px',
                  width: 'auto'
                }}
                onError={(e) => {
                  // Fallback to text if logo not found
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <h3 style={{ 
                color: '#dc2626', 
                marginBottom: '1rem',
                fontFamily: 'Poppins, sans-serif',
                display: 'none' // Hidden by default, shown if logo fails to load
              }}>
                VERMELHO SANGUE
              </h3>
            </div>
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              {t.footer.description}
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ 
                color: '#dc2626',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#b91c1c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#dc2626';
                e.target.style.transform = 'translateY(0)';
              }}>
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ 
                color: '#dc2626',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = '#b91c1c';
                e.target.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#dc2626';
                e.target.style.transform = 'translateY(0)';
              }}>
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>{t.footer.services}</h4>
            <div className="flex-column" style={{ gap: '0.5rem' }}>
              <Link to="/piercings" style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.target.style.color = '#dc2626'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>
                Body Piercings
              </Link>
              <Link to="/genital-piercing" style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.target.style.color = '#dc2626'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>
                Genital Piercing
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>{t.footer.contact}</h4>
            <div className="flex-column" style={{ gap: '0.5rem' }}>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <a href="tel:+5511979826688" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                  (11) 97982-6688
                </a>
              </div>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <a href="mailto:vermelhosanguejewelry@gmail.com" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
                onMouseEnter={(e) => e.target.style.color = '#dc2626'}
                onMouseLeave={(e) => e.target.style.color = 'white'}>
                  vermelhosanguejewelry@gmail.com
                </a>
              </div>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>{t.footer.address}</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>{t.footer.hours}</h4>
            <div className="flex-column" style={{ gap: '0.5rem', fontSize: '0.9rem' }}>
              <div className="flex-between">
                <span>{t.footer.mondayFriday}</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex-between">
                <span>{t.footer.saturday}</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex-between">
                <span>{t.footer.sunday}</span>
                <span>{t.footer.closed}</span>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                {t.footer.bookViaWhatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #333',
          paddingTop: '1rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
            {t.footer.copyright}
          </p>
          <div className="flex" style={{ gap: '2rem', fontSize: '0.9rem' }}>
            <Link to="/about" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              opacity: 0.7,
              transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '1';
              e.target.style.color = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '0.7';
              e.target.style.color = 'white';
            }}>
              {t.footer.privacyPolicy}
            </Link>
            <Link to="/about" style={{ 
              color: 'white', 
              textDecoration: 'none', 
              opacity: 0.7,
              transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              e.target.style.opacity = '1';
              e.target.style.color = '#dc2626';
            }}
            onMouseLeave={(e) => {
              e.target.style.opacity = '0.7';
              e.target.style.color = 'white';
            }}>
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
