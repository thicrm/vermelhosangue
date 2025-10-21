import React from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

const Footer = () => {
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
              Professional body piercing and modification studio. 
              Ethically crafted experiences with the highest standards of safety and artistry.
            </p>
            <div className="flex" style={{ gap: '1rem' }}>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626' }}>
                <Instagram size={24} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626' }}>
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>Services</h4>
            <div className="flex-column" style={{ gap: '0.5rem' }}>
              <Link to="/piercings" style={{ color: 'white', textDecoration: 'none' }}>
                Body Piercings
              </Link>
              <Link to="/lobuloplasty" style={{ color: 'white', textDecoration: 'none' }}>
                Lobuloplasty
              </Link>
              <Link to="/genital-piercing" style={{ color: 'white', textDecoration: 'none' }}>
                Genital Piercing
              </Link>
              <Link to="/body-modification" style={{ color: 'white', textDecoration: 'none' }}>
                Body Modification
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>Contact</h4>
            <div className="flex-column" style={{ gap: '0.5rem' }}>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <Phone size={16} />
                <a href="tel:+1234567890" style={{ color: 'white', textDecoration: 'none' }}>
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} />
                <a href="mailto:info@vermelhosangue.com" style={{ color: 'white', textDecoration: 'none' }}>
                  info@vermelhosangue.com
                </a>
              </div>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                <MapPin size={16} />
                <span>123 Studio Street, City, State 12345</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 style={{ marginBottom: '1rem', color: '#dc2626' }}>Hours</h4>
            <div className="flex-column" style={{ gap: '0.5rem', fontSize: '0.9rem' }}>
              <div className="flex-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex-between">
                <span>Saturday</span>
                <span>10:00 AM - 6:00 PM</span>
              </div>
              <div className="flex-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
            <div style={{ marginTop: '1rem' }}>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{ width: '100%', textAlign: 'center' }}>
                Book via WhatsApp
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
            © 2024 Vermelho Sangue. All rights reserved.
          </p>
          <div className="flex" style={{ gap: '2rem', fontSize: '0.9rem' }}>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>
              Privacy Policy
            </Link>
            <Link to="/about" style={{ color: 'white', textDecoration: 'none', opacity: 0.7 }}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
