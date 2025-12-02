import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Piercings = () => {
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

  const piercingTypes = [
    {
      category: 'Ear Piercings',
      piercings: [
        'Lobe', 'Helix', 'Tragus', 'Daith', 'Conch', 'Rook', 'Forward Helix', 'Industrial'
      ]
    },
    {
      category: 'Facial Piercings',
      piercings: [
        'Nose', 'Septum', 'Eyebrow', 'Lip', 'Labret', 'Medusa', 'Monroe', 'Cheek'
      ]
    },
    {
      category: 'Body Piercings',
      piercings: [
        'Navel', 'Nipple', 'Surface', 'Dermal', 'Microdermal', 'Corset', 'Scarification'
      ]
    }
  ]

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
              {t.services.bodyPiercings.title}
            </h1>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: '2rem',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: '400'
            }}>
              {t.services.bodyPiercings.basic} • {t.services.bodyPiercings.genital} • {t.services.bodyPiercings.microdermal} • {t.services.bodyPiercings.surface}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '3rem',
              maxWidth: '600px',
              margin: '0 auto 3rem',
              lineHeight: '1.6'
            }}>
              {t.about.servicesText1}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Images Section */}
      <section style={{ padding: '0', margin: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          width: '100%'
        }}>
          <img 
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9969.jpg"
            alt="Body Piercings"
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
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0928_edit.jpg"
            alt="Body Piercings"
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
            src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1016.jpg"
            alt="Body Piercings"
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

      {/* Piercing Types */}
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
              PIERCING TYPES
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Explore our comprehensive range of professional piercing services
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-3"
          >
            {piercingTypes.map((type, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
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
                  marginBottom: '1.5rem',
                  color: '#dc2626',
                  fontFamily: 'Poppins, sans-serif',
                  textAlign: 'center'
                }}>
                  {type.category}
                </h3>
                <div className="grid" style={{ gap: '0.5rem' }}>
                  {type.piercings.map((piercing, pierceIndex) => (
                    <div key={pierceIndex} className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: '#dc2626' }} />
                      <span>{piercing}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              OUR PROCESS
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              From consultation to aftercare, we ensure every step meets our high standards
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-4"
          >
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We discuss your goals, assess anatomy, and recommend the best approach'
              },
              {
                step: '02',
                title: 'Preparation',
                description: 'Sterile setup, jewelry selection, and marking the perfect placement'
              },
              {
                step: '03',
                title: 'Procedure',
                description: 'Professional piercing performed with precision and care'
              },
              {
                step: '04',
                title: 'Aftercare',
                description: 'Detailed instructions and ongoing support for optimal healing'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
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
          </motion.div>
        </div>
      </section>

      {/* Gauged Piercings Section */}
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
                {t.services.bodyPiercings.gauged.title}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.services.bodyPiercings.gauged.description}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 0,
                height: '500px'
              }}
            >
              <div
                style={{
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4285.JPG"
                  alt="Gauged Piercing"
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
              </div>
              <div
                style={{
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289.JPG"
                  alt="Gauged Piercing"
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
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Jewelry Section */}
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
                PREMIUM JEWELRY
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                We use only the highest quality jewelry from trusted manufacturers. 
                All pieces are made from implant-grade materials and come with 
                lifetime guarantees.
              </p>
              <div className="flex-column" style={{ gap: '1rem', marginBottom: '2rem' }}>
                {[
                  'Implant-grade titanium',
                  '14k and 18k gold options',
                  'Surgical steel alternatives',
                  'Custom sizing available',
                  'Lifetime warranty'
                ].map((feature, index) => (
                  <div key={index} className="flex" style={{ alignItems: 'center', gap: '0.5rem' }}>
                    <Star size={16} style={{ color: '#dc2626' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn">
                Learn More About Our Standards
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: 0,
                height: '500px'
              }}
            >
              <div
                style={{
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289(1).JPG"
                  alt="Premium Jewelry Collection"
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
              </div>
              <div
                style={{
                  overflow: 'hidden'
                }}
              >
                <img 
                  src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4381.jpg"
                  alt="Premium Jewelry Collection"
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
              </div>
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
              READY FOR YOUR NEW PIERCING?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              Book your consultation and let us help you choose the perfect piercing
            </p>
            <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{
                backgroundColor: '#dc2626',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                Book Consultation
              </a>
              <a href="mailto:vermelhosanguejewelry@gmail.com" className="btn btn-outline" style={{
                borderColor: 'white',
                color: 'white',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                Ask Questions
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Piercings
