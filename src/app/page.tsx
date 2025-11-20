'use client';

import { motion } from 'framer-motion';
import AnimatedSection from '@/components/AnimatedSection';
import ProjectCard from '@/components/ProjectCard';
import SkillBadge from '@/components/SkillBadge';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma'],
      icon: '🛍️',
      color: '#3b82f6'
    },
    {
      title: 'Real-Time Chat App',
      description: 'WebSocket-based chat application with rooms, direct messaging, and file sharing',
      tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      icon: '💬',
      color: '#10b981'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered tool for generating marketing copy, blog posts, and social media content',
      tags: ['TypeScript', 'OpenAI', 'Next.js', 'Tailwind'],
      icon: '🤖',
      color: '#8b5cf6'
    },
    {
      title: 'Project Management SaaS',
      description: 'Collaborative project management tool with kanban boards, time tracking, and team analytics',
      tags: ['React', 'GraphQL', 'PostgreSQL', 'AWS'],
      icon: '📊',
      color: '#f59e0b'
    }
  ];

  const skills = [
    'TypeScript', 'React', 'Next.js', 'Node.js', 
    'Tailwind CSS', 'PostgreSQL', 'Python', 'Docker',
    'AWS', 'GraphQL', 'MongoDB', 'Redis',
    'Jest', 'Cypress', 'Git', 'CI/CD'
  ];

  return (
    <div className="min-h-screen" style={{ background: '#c4e2f5' }}>
      <FloatingNav />

      {/* Hero Section */}
      <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.05),transparent_50%)]"
          animate={{
            backgroundPosition: [`0% 0%`, `100% 100%`],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        
        <div className="relative z-10 max-w-4xl space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block rounded-full bg-zinc-900/5 px-4 py-2 text-sm font-medium text-zinc-600 dark:bg-zinc-100/5 dark:text-zinc-400"
          >
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-2 inline-block h-2 w-2 rounded-full bg-green-500"
            />
            Available for opportunities
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Mirai Cho
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
          >
            Full-stack developer and creative technologist crafting exceptional digital experiences 
            with modern web technologies
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-sm font-medium text-zinc-50 transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View Projects
              <motion.svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </motion.svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex h-12 items-center justify-center rounded-full border border-zinc-200 px-8 text-sm font-medium text-zinc-900 transition-all hover:border-zinc-300 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-50 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-10"
        >
          <svg className="h-6 w-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            <AnimatedSection>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  About Me
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-gradient-to-r from-zinc-900 to-zinc-400 dark:from-zinc-50 dark:to-zinc-600"
                />
              </div>
            </AnimatedSection>
            
            <div className="grid gap-8 md:grid-cols-2">
              <AnimatedSection delay={0.2}>
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    I&apos;m a passionate developer who loves building things for the web. 
                    With a focus on clean code, intuitive design, and optimal performance, 
                    I bring ideas to life through technology.
                  </p>
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    Currently exploring the intersection of design and development, 
                    creating seamless experiences that users love.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={0.4}>
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                    Skills & Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <SkillBadge key={skill} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative bg-zinc-50 px-6 py-20 dark:bg-zinc-900/50 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-12">
            <AnimatedSection>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  Featured Projects
                </h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 80 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-1 bg-gradient-to-r from-zinc-900 to-zinc-400 dark:from-zinc-50 dark:to-zinc-600"
                />
              </div>
            </AnimatedSection>

            <div className="grid gap-8 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 py-20 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                  Let&apos;s Work Together
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
                  I&apos;m always interested in hearing about new projects and opportunities.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <motion.a
                  href="mailto:hello@miraicho.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 text-base font-medium text-zinc-50 transition-all hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
                >
                  <motion.svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </motion.svg>
                  Email Me
                </motion.a>
                
                <div className="flex gap-4">
                  {[
                    { name: 'GitHub', href: 'https://github.com', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
                    { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
                    { name: 'Twitter', href: 'https://twitter.com', icon: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' }
                  ].map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                    >
                      <span className="sr-only">{social.name}</span>
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ background: '#c4e2f5' }}
        className="border-t border-zinc-200 px-6 py-12"
      >
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              © 2025 Mirai Cho. All rights reserved.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm text-zinc-600 dark:text-zinc-400"
            >
              Built with Next.js & Tailwind CSS
            </motion.p>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
