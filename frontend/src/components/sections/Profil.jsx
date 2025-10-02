import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaLinkedin, FaGithub, FaArrowDown, FaCode, FaRocket } from 'react-icons/fa'
import { cn } from '../../lib/utils'

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
      staggerChildren: 0.2
    }
  }
}

function Profil() {
  return (
    <section 
      id="home"
      className="profil-section"
    >
      {/* Background Effects */}
      <div className="profil-background" />
      
      {/* Gradient Orbs */}
      <div className="profil-orb profil-orb-1" />
      <div className="profil-orb profil-orb-2" />
      
      <div className="profil-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="profil-content"
        >
          {/* Main Title */}
          <motion.h1 
            variants={fadeInUp}
            className="profil-title"
          >
            <span className="profil-title-gradient">
              Développeur
            </span>
            <br />
            <span className="profil-title-white">
              Full Stack
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            variants={fadeInUp}
            className="profil-subtitle"
          >
            A la recherche d'un projet stimulant et motivant,
            je souhaite vous apporter mon expertise.
          </motion.p>
          
          {/* Tech Stack Pills */}
          <motion.div 
            variants={fadeInUp}
            className="profil-tech-stack"
          >
            {['React', 'Node.js', 'TypeScript', 'AWS', 'Docker'].map((tech, index) => (
              <span 
                key={tech}
                className="profil-tech-pill"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            variants={fadeInUp}
            className="profil-buttons"
          >
            <button className="profil-btn profil-btn-primary">
              <FaDownload />
              Télécharger CV
            </button>
            
            <button className="profil-btn profil-btn-secondary">
              <span>
                Voir mes projets
                <FaArrowDown className="profil-btn-icon" />
              </span>
            </button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            variants={fadeInUp}
            className="profil-social"
          >
            <a href="https://linkedin.com" className="profil-social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="profil-social-link">
              <FaGithub />
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="profil-scroll-indicator"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="profil-scroll-dot"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="profil-scroll-inner"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Profil
