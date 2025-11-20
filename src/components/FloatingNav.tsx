'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState('');
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const y = useTransform(scrollY, [0, 100], [-100, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      style={{ opacity, y }}
      className="fixed left-1/2 top-6 z-40 -translate-x-1/2"
    >
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="flex gap-2 rounded-full border border-zinc-200 bg-white/80 p-2 backdrop-blur-lg dark:border-zinc-800 dark:bg-zinc-900/80"
      >
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              activeSection === item.href.slice(1)
                ? 'text-zinc-900 dark:text-zinc-50'
                : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50'
            }`}
          >
            {activeSection === item.href.slice(1) && (
              <motion.span
                layoutId="activeSection"
                className="absolute inset-0 rounded-full bg-zinc-100 dark:bg-zinc-800"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{item.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.nav>
  );
}
