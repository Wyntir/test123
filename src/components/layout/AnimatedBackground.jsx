'use client'

import { useEffect, useRef } from 'react'
import styles from './AnimatedBackground.module.css'

const AnimatedBackground = () => {
  const orbsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      
      orbsRef.current.forEach((orb, index) => {
        if (orb) {
          const speed = 0.5 + (index * 0.2)
          orb.style.transform = `translateY(${scrolled * speed}px)`
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={styles.bgAnimation}>
      <div 
        ref={(el) => orbsRef.current[0] = el}
        className={`${styles.gradientOrb} ${styles.orb1}`}
      />
      <div 
        ref={(el) => orbsRef.current[1] = el}
        className={`${styles.gradientOrb} ${styles.orb2}`}
      />
      <div 
        ref={(el) => orbsRef.current[2] = el}
        className={`${styles.gradientOrb} ${styles.orb3}`}
      />
    </div>
  )
}

export default AnimatedBackground