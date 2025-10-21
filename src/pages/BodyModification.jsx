import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Palette, Award } from 'lucide-react'

const BodyModification = () => {
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
              BODY MODIFICATION
            </h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              Advanced body modification artistry
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Explore the art of body modification with our experienced practitioners. 
              From implants to scarification, we create unique expressions of individuality.
            </p>
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
              MODIFICATION SERVICES
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Advanced body modification procedures performed by certified practitioners
            </p>
          </motion.div>

          <div className="grid grid-3">
            {[
              {
                icon: <Zap size={40} />,
                title: 'Subdermal Implants',
                description: 'Surgical placement of custom implants beneath the skin for unique body art',
                features: ['Custom shapes', 'Medical-grade materials', 'Professional placement']
              },
              {
                icon: <Palette size={40} />,
                title: 'Scarification',
                description: 'Artistic scarification techniques for permanent body art',
                features: ['Custom designs', 'Sterile procedures', 'Expert aftercare']
              },
              {
                icon: <Award size={40} />,
                title: 'Surface Piercings',
                description: 'Advanced surface piercing techniques for unique placements',
                features: ['Specialized jewelry', 'Precision placement', 'Long-term stability']
              }
            ].map((service, index) => (
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
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #e5e5e5',
                  textAlign: 'center'
                }}
              >
                <div style={{ color: '#dc2626', marginBottom: '1rem' }}>
                  {service.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  marginBottom: '1.5rem',
                  color: '#666',
                  lineHeight: '1.6'
                }}>
                  {service.description}
                </p>
                <div className="flex-column" style={{ gap: '0.5rem' }}>
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} style={{ fontSize: '0.9rem', color: '#666' }}>
                      • {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
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
              THE PROCESS
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Every modification begins with careful planning and consultation
            </p>
          </motion.div>

          <div className="grid grid-4">
            {[
              {
                step: '01',
                title: 'Initial Consultation',
                description: 'Detailed discussion of goals, anatomy assessment, and procedure planning'
              },
              {
                step: '02',
                title: 'Design & Planning',
                description: 'Custom design creation and detailed procedure planning'
              },
              {
                step: '03',
                title: 'Procedure',
                description: 'Professional modification performed in sterile environment'
              },
              {
                step: '04',
                title: 'Aftercare',
                description: 'Comprehensive aftercare instructions and follow-up support'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center' }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#dc2626',
                  marginBottom: '1rem',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {step.step}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {step.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
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
              IMPORTANT CONSIDERATIONS
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6',
              marginBottom: '1rem'
            }}>
              Body modifications are permanent procedures that require careful consideration. 
              We provide extensive consultation to ensure you make informed decisions.
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#856404',
              lineHeight: '1.6'
            }}>
              All clients must be 18+ with valid ID. Multiple consultations may be required 
              for complex procedures.
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
              EXPLORE POSSIBILITIES
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book a consultation to discuss your body modification goals
            </p>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{
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

export default BodyModification
