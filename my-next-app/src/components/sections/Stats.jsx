'use client'

import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import styles from './Stats.module.css'

const statsData = [
  { number: 120, label: 'Projects Delivered', suffix: '+' },
  { number: 50, label: 'Happy Clients', suffix: '+' },
  { number: 15, label: 'Team Members', suffix: '' },
  { number: 8, label: 'Years Experience', suffix: '' },
]

const AnimatedCounter = ({ target, suffix, inView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return

    let current = 0
    const increment = target / 100
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 20)

    return () => clearInterval(timer)
  }, [inView, target])

  return (
    <div className={styles.statNumber}>
      {count}{suffix}
    </div>
  )
}

const Stats = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <section className={styles.stats} ref={ref}>
      <div className={styles.statsContainer}>
        {statsData.map((stat, index) => (
          <div key={index} className={styles.statItem}>
            <AnimatedCounter 
              target={stat.number} 
              suffix={stat.suffix}
              inView={inView}
            />
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats