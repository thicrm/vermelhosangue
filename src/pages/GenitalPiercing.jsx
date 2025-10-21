import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Shield, Lock, CheckCircle } from 'lucide-react'

const GenitalPiercing = () => {
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)',
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '700'
            }}>
              GENITAL PIERCING
            </h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              Professional intimate piercing services
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Safe, professional genital piercing services performed in a sterile, 
              private environment with the highest standards of care and discretion.
            </p>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.1)',
              padding: '1rem 2rem',
              borderRadius: '8px',
              display: 'inline-block',
              marginBottom: '2rem'
            }}>
              <div className="flex" style={{ alignItems: 'center', gap: '0.5rem', justifyContent: 'center' }}>
                <Lock size={20} />
                <span style={{ fontWeight: '600' }}>18+ ONLY • PRIVATE CONSULTATIONS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              OUR SERVICES
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Professional genital piercing services with complete privacy and discretion
            </p>
          </motion.div>

          <div className="grid grid-2">
            {[
              {
                title: 'Male Genital Piercings',
                piercings: [
                  'Prince Albert', 'Ampallang', 'Apadravya', 'Dydoe',
                  'Frenum', 'Guiche', 'Hafada', 'Lorum'
                ]
              },
              {
                title: 'Female Genital Piercings',
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: '#f9f9f9',
                  padding: '2rem',
                  borderRadius: '12px',
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
                SAFETY & PRIVACY
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Your safety and privacy are our top priorities. All procedures are 
                performed in a completely private, sterile environment with the 
                highest standards of hygiene and discretion.
              </p>
              <div className="flex-column" style={{ gap: '1rem' }}>
                {[
                  'Completely private consultation rooms',
                  'Sterile, medical-grade equipment',
                  'Implant-grade jewelry only',
                  'Strict confidentiality protocols',
                  'Experienced, certified practitioners'
                ].map((feature, index) => (
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
                borderRadius: '12px',
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
              borderRadius: '12px',
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
              IMPORTANT INFORMATION
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Genital piercings require special consideration and longer healing times. 
              We provide detailed aftercare instructions and follow-up support.
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6'
            }}>
              All clients must be 18+ with valid ID. Consultation required before any procedure.
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
              PRIVATE CONSULTATION
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book a private consultation to discuss your options in complete confidence
            </p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{
              backgroundColor: '#dc2626',
              fontSize: '1.1rem',
              padding: '15px 30px'
            }}>
              Book Private Consultation
              <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default GenitalPiercing
