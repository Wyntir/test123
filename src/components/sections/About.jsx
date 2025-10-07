'use client'

import styles from './About.module.css'

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2>About <span className={styles.gradientText}>Me</span></h2>
          <p>Kimono Accesory Designer and Upcoming Software Engineer</p>
        </div>
        
<div className={styles.content}>
  <div className={styles.textContent}>
    <h3>Where Tradition Meets Technology</h3>
    <p>
      I'm Mirai Cho a designer specializing in handcrafted kimono accessories, 
      blending cultural artistry with a passion for technology. As I grow into 
      my journey as a software engineer, I bring a unique perspective shaped by 
      attention to detail, tradition, and storytelling through design.
    </p>
    <p>
      Currently exploring the world of full stack development, I'm excited to 
      create digital experiences that are as thoughtfully crafted as my physical designs.
    </p>
  </div>
  
  <div className={styles.skills}>
    <h3>My Skills</h3>
    <div className={styles.skillGrid}>
      <div className={styles.skill}>HTML & CSS</div>
      <div className={styles.skill}>JavaScript / React</div>
      <div className={styles.skill}>UI/UX Design</div>
      <div className={styles.skill}>Figma & Prototyping</div>
      <div className={styles.skill}>Handcrafted Design</div>
      <div className={styles.skill}>Cultural Storytelling</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
