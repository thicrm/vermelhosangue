import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Clock, Shield } from 'lucide-react'

const Lobuloplasty = () => {
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
              LOBULOPLASTY
            </h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              Expert ear lobe repair and reconstruction
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              Professional ear lobe repair services for torn, stretched, or damaged lobes. 
              Restore your ears to their natural beauty with our expert techniques.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is Lobuloplasty */}
      <section style={{ padding: '4rem 0' }}>
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
                WHAT IS LOBULOPLASTY?
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Lobuloplasty is a surgical procedure to repair, reconstruct, or reshape 
                damaged ear lobes. This includes repairing torn lobes, reducing stretched 
                lobes, and correcting deformities.
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Our experienced practitioners use advanced techniques to ensure minimal 
                scarring and optimal healing, restoring your ears to their natural appearance.
              </p>
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
              [Before/After Images]
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
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
              OUR SERVICES
            </h2>
          </motion.div>

          <div className="grid grid-3">
            {[
              {
                title: 'Torn Lobe Repair',
                description: 'Surgical repair of split or torn ear lobes using advanced suturing techniques',
                features: ['Minimal scarring', 'Quick recovery', 'Natural appearance']
              },
              {
                title: 'Stretched Lobe Reduction',
                description: 'Reduction of stretched lobes to restore natural size and shape',
                features: ['Custom sizing', 'Preserve piercing', 'Professional results']
              },
              {
                title: 'Deformity Correction',
                description: 'Correction of congenital or acquired ear lobe deformities',
                features: ['Expert assessment', 'Customized approach', 'Optimal outcomes']
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '12px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  border: '1px solid #e5e5e5'
                }}
              >
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#dc2626',
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
                    <div key={featureIndex} className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: '#dc2626' }} />
                      <span style={{ fontSize: '0.9rem' }}>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
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
              THE PROCESS
            </h2>
          </motion.div>

          <div className="grid grid-4">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Assessment of your lobes and discussion of goals'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Custom treatment plan and procedure scheduling'
              },
              {
                step: '03',
                title: 'Procedure',
                description: 'Professional surgical repair in sterile environment'
              },
              {
                step: '04',
                title: 'Recovery',
                description: 'Follow-up care and healing guidance'
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
              READY TO RESTORE YOUR LOBES?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book your consultation and let us help you achieve the perfect ear lobe repair
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

export default Lobuloplasty
