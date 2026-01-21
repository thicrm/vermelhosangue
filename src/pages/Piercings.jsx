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
      category: t.services.bodyPiercings.piercingTypes.categories.ear,
      piercings: t.services.bodyPiercings.piercingTypes.piercings.ear
    },
    {
      category: t.services.bodyPiercings.piercingTypes.categories.facial,
      piercings: t.services.bodyPiercings.piercingTypes.piercings.facial
    },
    {
      category: t.services.bodyPiercings.piercingTypes.categories.body,
      piercings: t.services.bodyPiercings.piercingTypes.piercings.body
    }
  ]

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Images Section */}
      <section style={{ padding: '0', margin: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          width: '100%'
        }}>
          <div
            style={{
              width: '100%',
              height: '650px',
              overflow: 'hidden'
            }}
          >
            <motion.img 
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9969.jpg"
              alt="Body Piercings"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1, filter: 'brightness(1.15)' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '650px',
              overflow: 'hidden'
            }}
          >
            <motion.img 
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0928_edit.jpg"
              alt="Body Piercings"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1, filter: 'brightness(1.15)' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '650px',
              overflow: 'hidden'
            }}
          >
            <motion.img 
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1016.jpg"
              alt="Body Piercings"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1, filter: 'brightness(1.15)' }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
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
              {t.services.bodyPiercings.piercingTypes.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              {t.services.bodyPiercings.piercingTypes.description}
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
                  borderRadius: '10px',
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
              {t.services.bodyPiercings.process.title}
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              {t.services.bodyPiercings.process.description}
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
                title: t.services.bodyPiercings.process.steps.consultation.title,
                description: t.services.bodyPiercings.process.steps.consultation.description
              },
              {
                step: '02',
                title: t.services.bodyPiercings.process.steps.preparation.title,
                description: t.services.bodyPiercings.process.steps.preparation.description
              },
              {
                step: '03',
                title: t.services.bodyPiercings.process.steps.procedure.title,
                description: t.services.bodyPiercings.process.steps.procedure.description
              },
              {
                step: '04',
                title: t.services.bodyPiercings.process.steps.aftercare.title,
                description: t.services.bodyPiercings.process.steps.aftercare.description
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

      {/* Jewelry Images Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9f9f9' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '2rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}
          >
            <div style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', aspectRatio: '1/1' }}>
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
            <div style={{ overflow: 'hidden', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', aspectRatio: '1/1' }}>
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
