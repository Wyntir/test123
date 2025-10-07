import styles from './GradientText.module.css'

const GradientText = ({ children, gradient = 'default' }) => {
  return (
    <span className={`${styles.gradientText} ${styles[gradient]}`}>
      {children}
    </span>
  )
}

export default GradientText