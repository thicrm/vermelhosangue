import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Instagram } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Import WhatsApp SVG icon
const WhatsAppIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

// Import TikTok SVG icon
const TikTokIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

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
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ 
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
                <TikTokIcon size={24} />
              </a>
              <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" style={{ 
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
                <WhatsAppIcon size={24} />
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
                Piercing
              </Link>
              <Link to="/body-modification" style={{ 
                color: 'white', 
                textDecoration: 'none',
                transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              onMouseEnter={(e) => e.target.style.color = '#dc2626'}
              onMouseLeave={(e) => e.target.style.color = 'white'}>
                Modificações Corporais
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>{t.footer.contact}</h4>
            <div className="flex-column" style={{ gap: '0.5rem' }}>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <WhatsAppIcon size={16} />
                <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" style={{ 
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
              <p style={{ 
                marginTop: '0.75rem', 
                fontSize: '0.75rem', 
                color: '#dc2626',
                textAlign: 'center',
                lineHeight: '1.4'
              }}>
                Obs: Atendimento somente com hora marcada.
              </p>
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
