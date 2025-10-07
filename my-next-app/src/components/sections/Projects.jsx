'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from '@/components/ui/ProjectCard'
import GradientText from '@/components/ui/GradientText'
import styles from './Projects.module.css'

const projectsData = [
  {
    id: 1,
    number: '01',
    title: 'Smart Home IoT Platform',
    description: 'Revolutionary IoT ecosystem connecting homes with intelligent automation and seamless user experience.',
    tags: ['React', 'Node.js', 'IoT'],
    gradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
    image: '/images/project1.jpg'
  },
  {
    id: 2,
    number: '02',
    title: 'AI-Powered Analytics',
    description: 'Machine learning dashboard providing real-time insights and predictive analytics for enterprise clients.',
    tags: ['Python', 'TensorFlow', 'Next.js'],
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    image: '/images/project2.jpg'
  },
  {
    id: 3,
    number: '03',
    title: 'E-Commerce Revolution',
    description: 'Next-generation shopping experience with AR integration and personalized recommendations.',
    tags: ['Vue.js', 'WebXR', 'GraphQL'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    image: '/images/project3.jpg'
  }
]

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section className={styles.projects} id="projects" ref={ref}>
      <motion.div 
        className={styles.sectionHeader}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2>Featured <GradientText>Projects</GradientText></h2>
        <p>Innovative solutions that define tomorrow's digital landscape</p>
      </motion.div>

      <motion.div 
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </section>
  )
}

export default Projects