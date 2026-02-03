import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import OptimizedImage from '../components/OptimizedImage'

const About = () => {
  const { t } = useLanguage()
  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Images Below Banner */}
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
            <OptimizedImage
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/40-2.jpeg"
              alt="Gallery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              loading="eager"
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '650px',
              overflow: 'hidden'
            }}
          >
            <OptimizedImage
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/41-2.jpeg"
              alt="Gallery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              loading="eager"
            />
          </div>
          <div
            style={{
              width: '100%',
              height: '650px',
              overflow: 'hidden'
            }}
          >
            <OptimizedImage
              src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/42-2.jpeg"
              alt="Gallery"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'flex-start', gap: '3rem' }}>
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
                {t.about.studioTitle}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText1}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText2}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText3}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.studioText4}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#dc2626',
                fontWeight: '600',
                fontStyle: 'italic'
              }}>
                {t.about.studioText5}
              </p>
            </motion.div>
            
            {/* Row 1, Col 2: First Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', width: '100%', aspectRatio: '3/4' }}
            >
              <OptimizedImage
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/IMG_4290.JPG"
                alt="Gallery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
            </motion.div>

            {/* Row 2, Col 1: About Me */}
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
                {t.about.aboutMeTitle}
              </h2>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333',
                fontWeight: '500'
              }}>
                {t.about.aboutMeText1}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText2}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText3}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#dc2626',
                fontStyle: 'italic'
              }}>
                {t.about.aboutMeText4}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '1.5rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText5}
              </p>
              <p style={{
                fontSize: '1.1rem',
                marginBottom: '2rem',
                lineHeight: '1.7',
                color: '#333'
              }}>
                {t.about.aboutMeText6}
              </p>
            </motion.div>

            {/* Row 2, Col 2: Second Image */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ overflow: 'hidden', width: '100%', aspectRatio: '3/4' }}
            >
              <OptimizedImage
                src="https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Fotos%20giulia%20/IMG_4295.JPG"
                alt="Gallery"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {/* Review 1 - Marcela Vieira */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #dc2626'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              {/* Review Text */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#333',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300'
              }}>
                "Fiz lobuloplastia nas duas orelhas com a Giulia e estou muito satisfeita com o trabalho! Ela arrasa demais, confiança total em algo tão delicado. Além de ser uma ótima profissional ela é muito gente boa e o studo é lindo 💕"
              </p>
              {/* Author */}
              <p style={{
                fontSize: '0.9rem',
                color: '#dc2626',
                textAlign: 'right',
                fontStyle: 'normal',
                marginTop: '1rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700'
              }}>
                - Marcela Vieira
              </p>
            </motion.div>

            {/* Review 2 - Milena Bottega */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #dc2626'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              {/* Review Text */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#333',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300'
              }}>
                "Furei minhas duas sobrancelhas com a Giulia e foi mto fofo ver toda a preocupação dela em deixar os piercings certinhos na assimetria. Fiquei realmente mto feliz com o cuidado com todo o processo! Acabei de conhecer e já considero pakas com certeza voltarei ❤️‍🔥"
              </p>
              {/* Author */}
              <p style={{
                fontSize: '0.9rem',
                color: '#dc2626',
                textAlign: 'right',
                fontStyle: 'normal',
                marginTop: '1rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700'
              }}>
                - Milena Bottega
              </p>
            </motion.div>

            {/* Review 3 - Artthur Sampaio */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#f9f9f9',
                padding: '2rem',
                borderRadius: '10px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #dc2626'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              {/* Review Text */}
              <p style={{
                fontSize: '0.95rem',
                lineHeight: '1.7',
                color: '#333',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300'
              }}>
                "Fiz minha bifurcação de língua com a Giulia e estou extremamente satisfeito com o resultado! Desde o primeiro contato, ela foi super atenciosa, tirou todas as minhas dúvidas e me passou muita segurança. O procedimento foi realizado com muito cuidado, técnica e profissionalismo. Ambiente limpo, bem preparado e com todo o suporte necessário. O resultado ficou excelente, exatamente como eu esperava — e o acompanhamento no pós foi impecável, com todas as orientações e suporte que precisei. A Giulia é uma profissional dedicada, responsável e apaixonada pelo que faz. Recomendo de olhos fechados pra quem busca um trabalho sério, seguro e de qualidade. Obrigado por tudo!"
              </p>
              {/* Author */}
              <p style={{
                fontSize: '0.9rem',
                color: '#dc2626',
                textAlign: 'right',
                fontStyle: 'normal',
                marginTop: '1rem',
                fontFamily: 'Inter, sans-serif',
                fontWeight: '700'
              }}>
                - Artthur Sampaio
              </p>
            </motion.div>
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
              {t.about.experienceTitle}
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
              opacity: 0.9
            }}>
              {t.about.experienceText}
            </p>
            <a href="https://wa.me/5511979826688" target="_blank" rel="noopener noreferrer" className="btn" style={{
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
