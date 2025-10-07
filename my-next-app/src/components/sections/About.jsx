'use client'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>About <span className={styles.gradientText}>Us</span></h2>
          <p>Pioneering digital innovation since 2015</p>
        </div>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h3>We craft digital experiences</h3>
            <p>
              We are a European design and innovation agency specializing in creating 
              cutting-edge IoT experiences and digital solutions. Our team of experts 
              combines creativity with technology to deliver products that make a difference.
            </p>
            <p>
              From smart home platforms to AI-powered analytics, we push the boundaries 
              of what's possible in the digital realm.
            </p>
          </div>
          
          <div className={styles.skills}>
            <h3>Our Expertise</h3>
            <div className={styles.skillGrid}>
              <div className={styles.skill}>IoT Development</div>
              <div className={styles.skill}>UI/UX Design</div>
              <div className={styles.skill}>Machine Learning</div>
              <div className={styles.skill}>Web Development</div>
              <div className={styles.skill}>Mobile Apps</div>
              <div className={styles.skill}>Cloud Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
