'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        Portfolio.
      </Link>
      
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <button 
        className={styles.menuToggle}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}

export default Navbar