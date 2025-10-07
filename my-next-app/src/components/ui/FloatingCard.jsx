'use client'

import { motion } from 'framer-motion'
import styles from './FloatingCard.module.css'

const FloatingCard = ({ children, type = 'main', delay = 0 }) => {
  const floatAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      delay: delay,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  }

  return (
    <motion.div 
      className={`${styles.floatingCard} ${styles[type]}`}
      animate={floatAnimation}
    >
      {children}
    </motion.div>
  )
}

export default FloatingCard