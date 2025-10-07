'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ project, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div variants={cardVariants}>
      <Link href={`/projects/${project.id}`} className={styles.projectCard}>
        <div 
          className={styles.projectImage}
          style={{ background: project.gradient }}
        >
          {project.image && (
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              style={{ objectFit: 'cover' }}
            />
          )}
          <div className={styles.projectNumber}>{project.number}</div>
        </div>
        
        <div className={styles.projectInfo}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          
          <div className={styles.projectTags}>
            {project.tags.map((tag, i) => (
              <span key={i} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard