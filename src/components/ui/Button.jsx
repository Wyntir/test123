'use client'

import Link from 'next/link'
import styles from './Button.module.css'

const Button = ({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={buttonClass} {...props}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}

export default Button