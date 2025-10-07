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
  title: 'Kimono Accessory Store',
  description: 'TabibitoTree.com Digital marketing and e-commerce for patented, handcrafted kimono accessories with a focus on cultural heritage.',
  tags: ['Digital Marketing', 'Patented Designs', 'Handcrafting'],
  gradient: 'linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)',
  image: '/images/project1.jpg'
},
{
  id: 2,
  number: '02',
  title: 'ASB Auto Group',
  description: 'ASBAutoGroup.com Auto sales and vehicle repair which made 19k in revenue over the last quarter',
  tags: ['Auto Sales', 'Vehicle Repair', 'Simple Sales'],
  gradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
  image: '/images/project2.jpg'
},
{
  id: 3,
  number: '03',
  title: 'Koala Site',
  description: 'A fun and educational website all about koalas, built with HTML and CSS, hosted using Cloudflare Pages.',
  tags: ['HTML', 'CSS', 'Cloudflare'],
  gradient: 'linear-gradient(135deg, #22c55e 0%, #10b981 100%)',
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
        <h2>Featured Projects</h2>
        <p>Some of my more interesting projects</p>
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