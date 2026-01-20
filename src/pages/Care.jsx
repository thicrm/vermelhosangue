import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, RefreshCw, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Care = () => {
  const { t } = useLanguage()
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #111 0%, #333 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '1rem',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.services.care.heroTitle}
            </h1>
            <p style={{
              fontSize: '1.2rem',
              maxWidth: '800px',
              margin: '0 auto',
              opacity: 0.9
            }}>
              {t.services.care.heroDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-2"
            style={{ gap: '3rem', marginBottom: '4rem' }}
          >
            {/* Jewelry Maintenance */}
            <motion.div
              variants={fadeInUp}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                color: '#dc2626',
                marginBottom: '1.5rem'
              }}>
                <Sparkles size={48} />
              </div>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#dc2626',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {t.services.care.jewelryMaintenance.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                {t.services.care.jewelryMaintenance.description}
              </p>
            </motion.div>

            {/* Downsize */}
            <motion.div
              variants={fadeInUp}
              style={{
                backgroundColor: 'white',
                padding: '2.5rem',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{
                color: '#dc2626',
                marginBottom: '1.5rem'
              }}>
                <RefreshCw size={48} />
              </div>
              <h3 style={{
                fontSize: '2rem',
                marginBottom: '1rem',
                color: '#dc2626',
                fontFamily: 'Poppins, sans-serif'
              }}>
                {t.services.care.downsize.title}
              </h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#333',
                marginBottom: '1.5rem'
              }}>
                {t.services.care.downsize.description}
              </p>
            </motion.div>
          </motion.div>

          {/* Additional Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: 'white',
              padding: '2.5rem',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}
          >
            <div style={{
              color: '#dc2626',
              marginBottom: '1.5rem',
              display: 'flex',
              justifyContent: 'center'
            }}>
              <CheckCircle size={48} />
            </div>
            <h3 style={{
              fontSize: '2rem',
              marginBottom: '1.5rem',
              color: '#dc2626',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.services.care.additionalServices}
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                color: '#333'
              }}>
                <CheckCircle size={20} color="#dc2626" />
                <span>{t.services.care.freeFollowUps}</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1.1rem',
                color: '#333'
              }}>
                <CheckCircle size={20} color="#dc2626" />
                <span>{t.services.care.guidance}</span>
              </div>
            </div>
          </motion.div>
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
              {t.services.care.ctaTitle}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              {t.services.care.ctaDescription}
            </p>
            <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{
                backgroundColor: '#dc2626',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                {t.home.whatsappBooking}
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </a>
              <a href="mailto:vermelhosanguejewelry@gmail.com" className="btn btn-outline" style={{
                borderColor: 'white',
                color: 'white',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                {t.home.emailConsultation}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Care

