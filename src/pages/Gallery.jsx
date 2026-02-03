import React, { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'

// Gallery Item Component for better performance
const GalleryItem = React.memo(({ imageUrl, index, activeFilter, isLoaded, onLoad, observer, onClick }) => {
  const imageRef = useRef(null)
  const isVideo = imageUrl.includes('.mp4') || imageUrl.includes('.mov')

  useEffect(() => {
    if (imageRef.current && observer && !isVideo && !isLoaded) {
      observer.observe(imageRef.current)
    }
    return () => {
      if (imageRef.current && observer) {
        observer.unobserve(imageRef.current)
      }
    }
  }, [observer, isLoaded, isVideo])

  return (
    <motion.div
      layout
      layoutId={imageUrl}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ 
        layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.3 },
        scale: { duration: 0.3 }
      }}
      style={{
        width: '100%',
        aspectRatio: '1/1',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#f5f5f5',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {isVideo ? (
        <motion.video
          src={imageUrl}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          muted
          loop
          playsInline
          preload="metadata"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          onMouseEnter={(e) => e.target.play()}
          onMouseLeave={(e) => e.target.pause()}
        />
      ) : (
        <>
          {/* Loading Skeleton */}
          {!isLoaded && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isLoaded ? 0 : 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1
              }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#dc2626',
                  opacity: 0.3
                }}
              />
            </motion.div>
          )}
          {/* Actual Image */}
          <motion.img
            ref={imageRef}
            data-src={!isLoaded ? imageUrl : undefined}
            src={isLoaded ? imageUrl : undefined}
            alt={`Gallery ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
            loading={index < 24 ? 'eager' : 'lazy'}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            onLoad={() => {
              onLoad(imageUrl)
            }}
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.parentElement.style.backgroundColor = '#f5f5f5'
            }}
          />
        </>
      )}
    </motion.div>
  )
})

const Gallery = () => {
  const { t } = useLanguage()
  const [loadedImages, setLoadedImages] = useState(new Set())
  const observerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedMedia, setSelectedMedia] = useState(null)
  
  // Gallery images organized by category
  const galleryImages = {
    all: [
      // PIERCINGS
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/15-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/16-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/2-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/20221203_202519-01.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/20230802_190838-01.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/21-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/25-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/26-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/28-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/31-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/34-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/D4582A04-5AEC-4FFC-9903-35449C29CC94.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0074.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0165.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0529.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0681.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0847.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0880.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0921_EDIT.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0928_edit.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0947.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0948.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0949.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0950.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0954.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0971(1).JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0971.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0980.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1016.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1017.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1021.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1087.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1384.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1717.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_2142.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_2994.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3072.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3073.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3962.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4138.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4146.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4284.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4285.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289(1).JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4381.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4435.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4445.HEIC',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4809.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5098.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5293.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5750.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6083_jpg.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6124.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6564.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7266.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7301.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7691.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_8515.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_8586.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9124.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9259.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9334.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9969.jpg',
      // MODIFICAÇOES CORPORAIS
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/20230812_143205.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/20230812_154044.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_0987.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_1336.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_2892.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3407.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3408.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3410.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3413.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3834.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3857.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3869(1).jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3869.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4047.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4051.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4064.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4091.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4288.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4331.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4333.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_6645.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_6666.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_8127.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_8301.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/f1eea2d2-fe31-4595-8b11-08ea44ec828e.jpg',
      // LOBULOPLASTIA
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_111156.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_130945-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_131202-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/2B7F2E13-C5A8-4D3D-922D-3EEB777FE349.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/544C7F23-6D52-440E-B535-BC17247816CD.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/8F67C077-03A6-4830-BACA-E01B0C4DBED7.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/9BAD853D-DE28-4181-8E12-B5584D9A551E.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/BFA8DE43-E122-4D53-8475-F4A290BBBB82.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/D00BB1F3-367A-43A6-A208-21FC0563B253.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2847.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2848.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2849.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2850.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3018.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3019.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3020.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3021.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3022.JPG',
      // PERFURAÇOES GENITAIS
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_0067.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_2887_jpg.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/20220913_132720.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/20230330_200711-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/D6DB1715-EFDF-4971-BBDD-D1F5BAE35B2E.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/F33EF9BB-B3AC-4AA6-8595-DA27F00ECD64.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_20211029_192804_297-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_2883.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8167.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8174.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8178.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/PicsArt_10-15-02.33.28.jpeg'
    ],
    piercings: [
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/15-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/16-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/2-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/20221203_202519-01.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/20230802_190838-01.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/21-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/25-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/26-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/28-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/31-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/34-2.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/D4582A04-5AEC-4FFC-9903-35449C29CC94.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0074.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0165.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0529.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0681.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0847.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0880.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0921_EDIT.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0928_edit.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0947.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0948.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0949.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0950.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0954.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0971(1).JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0971.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_0980.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1016.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1017.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1021.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1087.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1384.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_1717.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_2142.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_2994.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3072.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3073.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_3962.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4138.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4146.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4284.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4285.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289(1).JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4289.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4381.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4435.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4445.HEIC',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_4809.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5098.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5293.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_5750.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6083_jpg.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6124.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_6564.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7266.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7301.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_7691.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_8515.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_8586.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9124.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9259.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9334.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Piercings%20/IMG_9969.jpg'
    ],
    bodyMods: [
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/20230812_143205.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/20230812_154044.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_0987.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_1336.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_2892.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3407.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3408.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3410.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3413.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3834.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3857.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3869(1).jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_3869.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4047.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4051.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4064.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4091.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4288.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4331.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_4333.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_6645.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_6666.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_8127.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/IMG_8301.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Modifica%C3%A7%C3%B5es%20corporais/f1eea2d2-fe31-4595-8b11-08ea44ec828e.jpg'
    ],
    lobuloplasty: [
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_111156.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_130945-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/20230628_131202-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/2B7F2E13-C5A8-4D3D-922D-3EEB777FE349.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/544C7F23-6D52-440E-B535-BC17247816CD.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/8F67C077-03A6-4830-BACA-E01B0C4DBED7.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/9BAD853D-DE28-4181-8E12-B5584D9A551E.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/BFA8DE43-E122-4D53-8475-F4A290BBBB82.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/D00BB1F3-367A-43A6-A208-21FC0563B253.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2847.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2848.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2849.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_2850.PNG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3018.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3019.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3020.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3021.JPG',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Lobuloplastia%20/IMG_3022.JPG'
    ],
    genitalPiercings: [
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_0067.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_2887_jpg.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/20220913_132720.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/20230330_200711-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/D6DB1715-EFDF-4971-BBDD-D1F5BAE35B2E.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/F33EF9BB-B3AC-4AA6-8595-DA27F00ECD64.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_20211029_192804_297-01.jpeg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_2883.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8167.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8174.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/IMG_8178.jpg',
      'https://pub-a0f122baf81d4b6e8169b6d13eebf12f.r2.dev/Perfura%C3%A7%C3%B5es%20em%20vulva-penis/PicsArt_10-15-02.33.28.jpeg'
    ]
  }

  const filters = [
    { id: 'all', label: t.gallery.filters.all },
    { id: 'piercings', label: t.gallery.filters.piercings },
    { id: 'bodyMods', label: t.gallery.filters.bodyMods },
    { id: 'lobuloplasty', label: t.gallery.filters.lobuloplasty },
    { id: 'genitalPiercings', label: t.gallery.filters.genitalPiercings }
  ]

  const filteredImages = galleryImages[activeFilter] || []

  // Pre-load first batch of images immediately on mount or filter change
  useEffect(() => {
    // Load first 24 images immediately (first 4 rows in 6-column grid)
    const initialImages = filteredImages.slice(0, 24)
    const newLoadedImages = new Set(loadedImages)
    let hasNewImages = false
    
    initialImages.forEach((imageUrl) => {
      if (!newLoadedImages.has(imageUrl)) {
        newLoadedImages.add(imageUrl)
        hasNewImages = true
      }
    })
    
    if (hasNewImages) {
      setLoadedImages(newLoadedImages)
    }
  }, [activeFilter]) // Only run when filter changes

  // Intersection Observer for better lazy loading
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target
          const imageUrl = img.dataset.src || img.src
          if (img.dataset.src && !loadedImages.has(imageUrl)) {
            img.src = img.dataset.src
            img.removeAttribute('data-src')
            setLoadedImages(prev => new Set([...prev, imageUrl]))
          }
        }
      })
    }, observerOptions)

    // Check visible images immediately after observer is created
    setTimeout(() => {
      if (observerRef.current) {
        const images = document.querySelectorAll('[data-src]')
        images.forEach((img) => {
          observerRef.current.observe(img)
        })
      }
    }, 100)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loadedImages])

  // Image loading handler
  const handleImageLoad = useCallback((imageUrl) => {
    setLoadedImages(prev => new Set([...prev, imageUrl]))
  }, [])

  // Handle media click to open lightbox
  const handleMediaClick = useCallback((mediaUrl) => {
    setSelectedMedia(mediaUrl)
  }, [])

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setSelectedMedia(null)
  }, [])

  // Handle ESC key to close lightbox
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedMedia) {
        closeLightbox()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [selectedMedia, closeLightbox])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (selectedMedia) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedMedia])

  return (
    <div style={{ paddingTop: '120px' }}>
      {/* Filter Section */}
      <section style={{ padding: '2rem 0', backgroundColor: '#fff' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: activeFilter === filter.id ? '600' : '400',
                  color: activeFilter === filter.id ? '#dc2626' : '#666',
                  backgroundColor: 'transparent',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative'
                }}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '0', margin: 0 }}>
        <motion.div
          layout
          className="gallery-grid"
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <AnimatePresence>
            {filteredImages.map((imageUrl, index) => (
              <GalleryItem
                key={imageUrl}
                imageUrl={imageUrl}
                index={index}
                activeFilter={activeFilter}
                isLoaded={loadedImages.has(imageUrl)}
                onLoad={handleImageLoad}
                observer={observerRef.current}
                onClick={() => handleMediaClick(imageUrl)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.85)'
            }}
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              style={{
                position: 'absolute',
                top: '2rem',
                right: '2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'white',
                zIndex: 10000,
                transition: 'all 0.3s ease'
              }}
              whileHover={{ 
                background: 'rgba(255, 255, 255, 0.2)',
                scale: 1.1
              }}
            >
              <X size={24} />
            </motion.button>

            {/* Media Container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              {selectedMedia.includes('.mp4') || selectedMedia.includes('.mov') ? (
                <video
                  src={selectedMedia}
                  controls
                  autoPlay
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
                  }}
                />
              ) : (
                <img
                  src={selectedMedia}
                  alt="Gallery view"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '90vh',
                    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                    objectFit: 'contain'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none'
                  }}
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery

