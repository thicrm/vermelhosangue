import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Shield, Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

const Home = () => {
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
      {/* Hero Section with Video Background */}
      <section style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
        margin: 0,
        padding: 0
      }}>
        {/* Three Videos as Background */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 0,
          width: '100%',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Video 1 (Video 2 moved to first position) */}
          <video 
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none'
            }}
            poster="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20%2B%20tilte%20%2B%20subtitle.jpg"
            onLoadedData={(e) => {
              e.target.play().catch(() => {});
            }}
          >
            <source src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/presentation%20video%202.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video 2 (Video 1 moved to middle position) */}
          <video 
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none'
            }}
            poster="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/centered%20red%20background%20title%20on%20top%20logo%20below.jpg"
            onLoadedData={(e) => {
              e.target.play().catch(() => {});
            }}
          >
            <source src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/presentation%20video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video 3 (Duplicate of Video 2) */}
          <video 
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              pointerEvents: 'none'
            }}
            poster="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/logo%20%2B%20tilte%20%2B%20subtitle.jpg"
            onLoadedData={(e) => {
              e.target.play().catch(() => {});
            }}
          >
            <source src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/id%20visual%20/presentation%20video%202.MOV" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
              marginBottom: '3rem',
              color: '#dc2626',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.home.ourWork}
            </h2>
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
                borderRadius: '10px',
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
                borderRadius: '10px',
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

      {/* Images Above Services */}
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
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/28-2.jpeg"
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
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/31-2.jpeg"
              alt="Lobuloplasty"
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
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1017.jpg"
              alt="Body Modification"
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
              marginBottom: '2rem',
              color: '#dc2626',
              fontFamily: 'Poppins, sans-serif'
            }}>
              {t.home.ourServices}
            </h2>
            <div style={{ fontSize: '1.1rem', color: '#666', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7', textAlign: 'justify' }}>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#666', lineHeight: '1.7', fontFamily: 'Inter, sans-serif', fontWeight: 'normal', textAlign: 'justify' }}>
                {t.about.servicesText1}
              </p>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: '#666', lineHeight: '1.7', fontFamily: 'Inter, sans-serif', fontWeight: 'normal', textAlign: 'justify' }}>
                {t.about.servicesText2}
              </p>
              <p style={{ marginBottom: '0', fontSize: '1.1rem', color: '#666', lineHeight: '1.7', fontFamily: 'Inter, sans-serif', fontWeight: 'normal', textAlign: 'justify' }}>
                {t.about.servicesText3}
              </p>
            </div>
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
                title: t.home.serviceCards.bodyPiercings.title,
                description: t.home.serviceCards.bodyPiercings.description,
                link: '/piercings',
                icon: <Star size={40} />,
                image: 'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_2142.JPG'
              },
              {
                title: t.home.serviceCards.lobuloplasty.title,
                description: t.home.serviceCards.lobuloplasty.description,
                link: '/lobuloplasty',
                icon: <Award size={40} />,
                image: 'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2850.PNG'
              },
              {
                title: t.home.serviceCards.bodyModification.title,
                description: t.home.serviceCards.bodyModification.description,
                link: '/body-modification',
                icon: <Shield size={40} />,
                image: 'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/f1eea2d2-fe31-4595-8b11-08ea44ec828e.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{
                  position: 'relative',
                  borderRadius: '10px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                  textAlign: 'center',
                  overflow: 'hidden',
                  minHeight: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                {/* Background Image */}
                <img 
                  src={service.image}
                  alt={service.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#f5f5f5';
                  }}
                />
                
                {/* Dark Overlay for Text Readability */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  zIndex: 1
                }} />
                
                {/* Content Overlay */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  padding: '2rem',
                  color: 'white'
                }}>
                  <div style={{ color: '#dc2626', marginBottom: '1rem' }}>
                    {service.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.5rem',
                    marginBottom: '1rem',
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    textShadow: '0 2px 8px rgba(0,0,0,0.7)'
                  }}>
                    {service.title}
                  </h3>
                  <p style={{ 
                    marginBottom: '1.5rem', 
                    color: 'white', 
                    lineHeight: '1.6',
                    textShadow: '0 2px 4px rgba(0,0,0,0.7)'
                  }}>
                    {service.description}
                  </p>
                  <Link to={service.link} style={{
                    color: 'white',
                    fontWeight: '600',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#dc2626',
                    padding: '10px 20px',
                    borderRadius: '10px',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    textShadow: 'none',
                    boxShadow: '0 4px 15px rgba(220, 38, 38, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = '#b91c1c';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = '#dc2626';
                    e.target.style.transform = 'translateY(0)';
                  }}
                  >
                    {t.home.serviceCards.learnMore}
                    <ArrowRight size={16} />
                  </Link>
                </div>
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
                {t.home.craftedByHand}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.home.craftedDescription1}
              </p>
              {t.home.craftedDescription2 && (
                <p style={{
                  fontSize: '1.1rem',
                  marginBottom: '2rem',
                  lineHeight: '1.7',
                  color: '#333'
                }}>
                  {t.home.craftedDescription2}
                </p>
              )}
              <Link to="/about" className="btn">
                {t.home.ourStory}
                <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{
                borderRadius: '10px',
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
              {t.home.heroTitle}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              {t.home.heroDescription}
            </p>
            <div className="flex" style={{ gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/piercings" className="btn" style={{
                backgroundColor: '#dc2626',
                fontSize: '1.1rem',
                padding: '15px 30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                {t.home.exploreServices}
                <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                borderColor: 'white',
                color: 'white',
                fontSize: '1.1rem',
                padding: '15px 30px'
              }}>
                {t.home.bookConsultation}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
