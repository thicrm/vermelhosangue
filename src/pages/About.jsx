import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Images Below Banner */}
      <section style={{ padding: '0', margin: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          width: '100%'
        }}>
          <img 
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/40-2.jpeg"
            alt="Gallery"
            style={{
              width: '100%',
              height: '650px',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <img 
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/41-2.jpeg"
            alt="Gallery"
            style={{
              width: '100%',
              height: '650px',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <img 
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/42-2.jpeg"
            alt="Gallery"
            style={{
              width: '100%',
              height: '650px',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                color: '#dc2626',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {t.about.studioTitle}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText1}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText2}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText3}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText4}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#dc2626',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                {t.about.studioText5}
              </p>
            </motion.div>
            
            {/* Row 1, Col 2: First Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', width: '100%', aspectRatio: '3/4' }}
            >
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/IMG_4290.JPG"
                alt="Gallery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundColor = '#f5f5f5';
                }}
              />
            </motion.div>

            {/* Row 2, Col 1: About Me */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={{
                fontSize: '3rem',
                marginBottom: '1.5rem',
                color: '#dc2626',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {t.about.aboutMeTitle}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333',
                fontWeight: '500'
              }}>
                {t.about.aboutMeText1}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText2}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText3}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#dc2626',
                fontStyle: 'italic'
              }}>
                {t.about.aboutMeText4}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText5}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText6}
              </p>
            </motion.div>

            {/* Row 2, Col 2: Second Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', width: '100%', aspectRatio: '3/4' }}
            >
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/IMG_4295.JPG"
                alt="Gallery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.backgroundColor = '#f5f5f5';
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: 'linear-gradient(135deg, #111 0%, #333 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.about.experienceTitle}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              {t.about.experienceText}
            </p>
            <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{
              backgroundColor: '#dc2626',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}>
              Book Consultation
              <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
