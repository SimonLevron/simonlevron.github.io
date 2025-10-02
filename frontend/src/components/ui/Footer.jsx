import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaRocket, FaCode, FaArrowUp, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa'
import '../../styles/components/footer.css'

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

function Footer() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/SimonLevron",
      color: "#333333"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/simon-levron-335b69131/",
      color: "#0077B5"
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:contact@simon-dev.com",
      color: "#6366f1"
    }
  ]

  const quickLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Expérience", href: "#experience" },
    { name: "Formation", href: "#education" },
    { name: "Contact", href: "#contact" }
  ]

  return (
    <footer className="footer">
      {/* Background Effects */}
      <div className="footer-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="footer-container">
        {/* Main Footer Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="footer-content"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="footer-brand">
            <div className="brand-logo">
              <FaRocket className="logo-icon" />
              <span className="logo-text">Simon Levron</span>
            </div>
            <p className="brand-description">
              Développeur fullstack à la recherche d'un projet stimulant et motivant.
              Spécialisé dans les technologies modernes et l'innovation, j'espère pouvoir vous apporter mon expertise.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  style={{ color: social.color }}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="footer-section">
            <h3 className="section-title">Navigation</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

       
          {/* Contact Info */}
          <motion.div variants={fadeInUp} className="footer-section">
            <h3 className="section-title">Contact</h3>
            <div className="contact-info">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>contact@simon-dev.com</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>+33 6 12 34 56 78</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Paris, France</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="footer-bottom"
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Simon Levron. Tous droits réservés.
            </p>
            <p className="made-with">
              Fait avec <FaHeart className="heart-icon" />
            </p>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={scrollToTop}
            className="scroll-to-top"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1"></div>
        <div className="floating-element element-2"></div>
        <div className="floating-element element-3"></div>
      </div>
    </footer>
  )
}

export default Footer