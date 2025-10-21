import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award } from 'lucide-react'

const Home = () => {
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
      {/* Hero Section with Video */}
      <section style={{
        padding: '2rem 0',
        textAlign: 'center',
        backgroundColor: '#f9f9f9'
      }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Hero Videos */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '2rem',
              maxWidth: '1000px',
              margin: '0 auto 2rem'
            }}>
              {/* Video 1 */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <video 
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  poster="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/centered%20red%20background%20title%20on%20top%20logo%20below.jpg"
                >
                  <source src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/presentation%20video.mov" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {/* Video 2 */}
              <div style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}>
                <video 
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                  poster="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20%2B%20tilte%20%2B%20subtitle.jpg"
                >
                  <source src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/presentation%20video%202.MOV" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            
            {/* Text below video */}
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '1rem',
              color: '#dc2626',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              Designed with love. Crafted by hand.
            </h2>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              lineHeight: '1.6',
              color: '#333'
            }}>
              Professional body piercing and modification services with the highest standards 
              of safety, artistry, and ethical practice.
            </p>
            <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/piercings" className="btn" style={{
                fontSize: '1.1rem',
                padding: '15px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Media Gallery */}
      <section style={{ padding: '2rem 0' }}>
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
              OUR WORK
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Professional body piercing and modification artistry
            </p>
          </motion.div>

          {/* Media Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '3rem'
            }}
          >
            {/* Pierced Model Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/ad%20picture%20with%20pierced%20model.jpg"
                alt="Professional piercing work"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </motion.div>

            {/* Second Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
              }}
            >
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/c216534c-6dba-4819-b0bf-71b0984fb863.jpg"
                alt="Studio work"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
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
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Professional body modification services with uncompromising standards
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-3"
          >
            {[
              {
                title: 'Body Piercings',
                description: 'Professional piercing services for all body parts with premium jewelry',
                link: '/piercings',
                icon: <Star size={40} />
              },
              {
                title: 'Lobuloplasty',
                description: 'Expert ear lobe repair and reconstruction services',
                link: '/lobuloplasty',
                icon: <Award size={40} />
              },
              {
                title: 'Body Modification',
                description: 'Advanced body modification procedures with artistic vision',
                link: '/body-modification',
                icon: <Shield size={40} />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
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
                <p style={{ marginBottom: '1.5rem', color: '#666', lineHeight: '1.6' }}>
                  {service.description}
                </p>
                <Link to={service.link} style={{
                  color: '#dc2626',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  Learn More
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
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
                CRAFTED BY HAND
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                Every piercing is performed with meticulous attention to detail, using only 
                the highest quality materials and following strict safety protocols. Our 
                experienced artists combine technical expertise with artistic vision.
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                We believe in ethical practices, sustainable materials, and creating 
                meaningful experiences that celebrate individual expression.
              </p>
              <Link to="/about" className="btn">
                Our Story
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                aspectRatio: '4/3'
              }}
            >
              <img 
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20%2B%20tilte%20%2B%20subtitle.jpg"
                alt="Vermelho Sangue Studio"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
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
              READY TO BEGIN YOUR JOURNEY?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book your consultation today and discover the art of professional body modification
            </p>
            <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="btn" style={{
                backgroundColor: '#dc2626',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                WhatsApp Booking
              </a>
              <a href="mailto:info@vermelhosangue.com" className="btn btn-outline" style={{
                borderColor: 'white',
                color: 'white',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                Email Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
