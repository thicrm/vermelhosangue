import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users, Award, Heart } from 'lucide-react'

const About = () => {
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
              ABOUT US
            </h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              Crafted by hand. Designed with love.
            </h2>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
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
                OUR STORY
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Founded with a passion for artistry and a commitment to safety, 
                Vermelho Sangue has been serving the body modification community 
                with uncompromising standards for over a decade.
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Our studio combines traditional techniques with modern innovations, 
                ensuring every client receives personalized care and exceptional results.
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
              [Studio Interior Image]
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid grid-3">
            {[
              {
                icon: <Heart size={40} />,
                title: 'Safety First',
                description: 'Every procedure follows strict safety protocols and uses only implant-grade materials'
              },
              {
                icon: <Award size={40} />,
                title: 'Artistic Excellence',
                description: 'We combine technical expertise with artistic vision to create beautiful, meaningful modifications'
              },
              {
                icon: <Users size={40} />,
                title: 'Personalized Care',
                description: 'Each client receives individual attention and customized treatment plans'
              }
            ].map((value, index) => (
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
                  textAlign: 'center',
                  border: '1px solid #e5e5e5'
                }}
              >
                <div style={{ color: '#dc2626', marginBottom: '1rem' }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: '#333',
                  fontFamily: 'Poppins, sans-serif'
                }}>
                  {value.title}
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  {value.description}
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
              EXPERIENCE THE DIFFERENCE
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book your consultation and discover why clients choose Vermelho Sangue
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

export default About
