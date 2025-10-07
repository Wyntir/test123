// app/layout.jsx
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/layout/AnimatedBackground'

export const metadata = {
  title: 'Portfolio - Digital Agency',
  description: 'European design & innovation agency pioneering in IoT experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AnimatedBackground />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}