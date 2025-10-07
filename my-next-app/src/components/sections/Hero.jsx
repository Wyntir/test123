'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import FloatingCard from '@/components/ui/FloatingCard'
import GradientText from '@/components/ui/GradientText'
import styles from './Hero.module.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <motion.div 
          className={styles.heroText}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={itemVariants} className={styles.subtitle}>
            Agency Things • Year 2025
          </motion.span>
          
          <motion.h1 variants={itemVariants}>
            Creative <GradientText>Digital</GradientText> Agency
          </motion.h1>
          
          <motion.p variants={itemVariants}>
            European design & innovation agency pioneering in IoT experience for humans. 
            We craft digital experiences that push boundaries and create meaningful connections.
          </motion.p>
          
          <motion.div variants={itemVariants}>
            <Button href="#projects" variant="primary">
              Visit Projects
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Button>
          </motion.div>
        </motion.div>

        <div className={styles.heroVisual}>
          <FloatingCard type="main">
            <div className={styles.mainCardContent}>T</div>
          </FloatingCard>
          
          <FloatingCard type="small" delay={1}>
            <div className={styles.smallCardContent}>
              <div>Innovation</div>
              <div className={styles.year}>2025</div>
            </div>
          </FloatingCard>
          
          <FloatingCard type="medium" delay={2}>
            <div className={styles.mediumCardContent}>
              <div className={styles.number}>03</div>
              <div className={styles.label}>Projects</div>
            </div>
          </FloatingCard>
        </div>
      </div>
    </section>
  )
}

export default Hero