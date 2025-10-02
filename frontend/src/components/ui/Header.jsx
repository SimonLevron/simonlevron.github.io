import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaHome, FaUser, FaCode, FaBriefcase, FaGraduationCap, FaEnvelope, FaRocket } from 'react-icons/fa'
import '../../styles/components/header.css'

// Animations
const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

const slideIn = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
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

function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleSectionChange = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'hobbies', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleSectionChange)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleSectionChange)
    }
  }, [])

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <FaHome /> },
    { id: 'about', label: 'À propos', icon: <FaUser /> },
    { id: 'skills', label: 'Compétences', icon: <FaCode /> },
    { id: 'experience', label: 'Expérience', icon: <FaBriefcase /> },
    { id: 'education', label: 'Formation', icon: <FaGraduationCap /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope /> }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={fadeInDown}
      className={`header ${isScrolled ? 'scrolled' : ''}`}
    >
      {/* Background Effects */}
      <div className="header-background">
        <div className="gradient-orb"></div>
      </div>

      <div className="header-container">
        {/* Logo - Cliquable pour retourner en haut */}
        <motion.div
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
          style={{ cursor: 'pointer' }}
        >
          <FaRocket className="logo-icon" />
          <span className="logo-text">Simon Levron</span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <motion.ul
            variants={staggerChildren}
            className="nav-links"
          >
            {navItems.map((item) => (
              <motion.li
                key={item.id}
                variants={slideIn}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="nav-link"
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
                {activeSection === item.id && (
                  <motion.div
                    className="nav-indicator"
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="mobile-menu-button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaBars />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="mobile-nav-content">
              <motion.ul
                variants={staggerChildren}
                initial="hidden"
                animate="visible"
                className="mobile-nav-links"
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    variants={slideIn}
                    className={`mobile-nav-item ${activeSection === item.id ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="mobile-nav-link"
                    >
                      <span className="mobile-nav-icon">{item.icon}</span>
                      <span className="mobile-nav-label">{item.label}</span>
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header