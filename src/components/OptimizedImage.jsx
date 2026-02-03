import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const OptimizedImage = ({ 
  src, 
  alt, 
  style = {}, 
  whileHover = {},
  transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  loading = 'lazy',
  onError,
  className
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const imageRef = useRef(null)
  const observerRef = useRef(null)

  useEffect(() => {
    // For eager loading, load immediately
    if (loading === 'eager') {
      setIsLoaded(true)
      return
    }

    // Intersection Observer for lazy loading
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          if (observerRef.current) {
            observerRef.current.unobserve(entry.target)
          }
        }
      })
    }, observerOptions)

    if (imageRef.current) {
      observerRef.current.observe(imageRef.current)
    }

    return () => {
      if (observerRef.current && imageRef.current) {
        observerRef.current.unobserve(imageRef.current)
      }
    }
  }, [loading])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = (e) => {
    setHasError(true)
    if (onError) {
      onError(e)
    } else {
      e.target.style.display = 'none'
      if (e.target.parentElement) {
        e.target.parentElement.style.backgroundColor = '#f5f5f5'
      }
    }
  }

  // Extract container-specific styles
  const {
    width,
    height,
    objectFit,
    display,
    borderRadius,
    ...imageStyles
  } = style

  return (
    <div
      ref={imageRef}
      style={{
        width: width || '100%',
        height: height || '100%',
        position: 'relative',
        backgroundColor: '#f5f5f5',
        overflow: 'hidden'
      }}
      className={className}
    >
      {/* Loading Skeleton */}
      {!isLoaded && !hasError && (
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
      {!hasError && (
        <motion.img
          src={isLoaded ? src : undefined}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: objectFit || 'cover',
            display: display || 'block',
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            borderRadius: borderRadius,
            ...imageStyles
          }}
          whileHover={whileHover}
          transition={transition}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
        />
      )}
    </div>
  )
}

export default OptimizedImage

