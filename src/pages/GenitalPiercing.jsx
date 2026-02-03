import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, CheckCircle } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const GenitalPiercing = () => {
  const { t } = useLanguage()
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Services */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '3rem' }}
          >
            <h2 style={{
              fontSize: '3rem',
              marginBottom: '1rem',
              color: '#dc2626',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.genitalPiercing.ourServices}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              {t.genitalPiercing.ourServicesDescription}
            </p>
          </motion.div>

          <div className="grid grid-2">
            {[
              {
                title: t.genitalPiercing.maleTitle,
                piercings: [
                  'Prince Albert', 'Ampallang', 'Apadravya', 'Dydoe',
                  'Frenum', 'Guiche', 'Hafada', 'Lorum'
                ]
              },
              {
                title: t.genitalPiercing.femaleTitle,
                piercings: [
                  'Clitoral Hood', 'Inner Labia', 'Outer Labia', 'Triangle',
                  'Fourchette', 'Christina', 'Isabella', 'Princess Albertina'
                ]
              }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: '#f9f9f9',
                  padding: '2rem',
                  borderRadius: '10px',
                  border: '1px solid #e5e5e5'
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem',
                  color: '#dc2626',
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center'
                }}>
                  {category.title}
                </h3>
                <div className="grid" style={{ gap: '0.5rem' }}>
                  {category.piercings.map((piercing, pierceIndex) => (
                    <div key={pierceIndex} className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: '#dc2626' }} />
                      <span>{piercing}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Privacy */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'center', gap: '3rem' }}>
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
                {t.genitalPiercing.safetyTitle}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.genitalPiercing.safetyDescription}
              </p>
              <div className="flex-column" style={{ gap: '1rem' }}>
                {t.genitalPiercing.safetyFeatures.map((feature, index) => (
                  <div key={index} className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                    <Shield size={16} style={{ color: '#dc2626' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#f5f5f5',
                height: '400px',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#999',
                fontSize: '1.1rem'
              }}
            >
              [Private Consultation Room]
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#fff3cd',
              border: '1px solid #ffeaa7',
              borderRadius: '10px',
              padding: '2rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: '1rem',
              color: '#856404',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.genitalPiercing.importantTitle}
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              {t.genitalPiercing.importantText1}
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6'
            }}>
              {t.genitalPiercing.importantText2}
            </p>
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
              {t.genitalPiercing.consultationTitle}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              {t.genitalPiercing.consultationDescription}
            </p>
            <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{
              backgroundColor: '#dc2626',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}>
              {t.genitalPiercing.bookConsultation}
              <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GenitalPiercing
