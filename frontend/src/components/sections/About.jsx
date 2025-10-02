import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaUsers, FaAward, FaRocket, FaLightbulb, FaHeart, FaStar, FaGithub, FaLinkedin } from 'react-icons/fa'
import { Rocket, Star, Users } from 'lucide-react'
import FlipWords from '../ui/flip-words'
import '../../styles/components/about.css'

// Animations Aceternity
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

function About() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const stats = [
    { 
      number: "4+", 
      label: "Années d'expérience", 
      icon: <FaRocket />,
      color: "purple",
      description: "Développement professionnel"
    },
    { 
      number: "5+", 
      label: "Projets majeurs", 
      icon: <FaAward />,
      color: "blue",
      description: "ANVOL, CRM, Freelance"
    },
    { 
      number: "100%", 
      label: "Adaptabilité", 
      icon: <FaHeart />,
      color: "pink",
      description: "Divers environnements"
    }
  ]

  const values = [
    {
      icon: <FaCode />,
      title: "Communicatif et à l'écoute",
      description: "Je m'attache à comprendre les besoins des clients afin de proposer des solutions adaptées.",
      color: "blue"
    },
    {
      icon: <FaUsers />,
      title: "Adaptabilité",
      description: "Grâce à mon expérience, je fais preuve d'adaptabilité face à divers environnements et situations.",
      color: "green"
    },
    {
      icon: <FaLightbulb />,
      title: "Sérieux et motivé",
      description: "Sérieux, appliqué et motivé, je suis prêt à m'investir pleinement dans de nouveaux projets.",
      color: "yellow"
    }
  ]


  // Features: keep only 4+ years and 3 qualities (Motivé, Sérieux, Adaptable)
  const features = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Années d'expérience",
      description: "Expérience professionnelle",
      color: "purple",
      badge: "4+",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Motivé",
      description: "Toujours impliqué",
      color: "yellow",
      badge: null,
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Sérieux",
      description: "Fiable et appliqué",
      color: "blue",
      badge: null,
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Adaptable",
      description: "À l'aise en équipe",
      color: "green",
      badge: null,
    },
  ]

  return (
    <section id="about" className="about-section">
      {/* Background Effects */}
      <div className="about-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="about-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="about-header"
        >
          <div className="section-badge">
            <FaStar className="badge-icon" />
            <span>À propos</span>
          </div>
          <h2 className="section-title">
          <span className="title-gradient">Développeur fullstack{' '}
            <FlipWords 
              words={["motivé", "sérieux", "curieux"]} 
              interval={2000}
              className="flip-words-title"
            />
          </span>
          </h2>
          <h3 className="title-gradient">
            <FlipWords 
              words={["4+ ans expérience", "5+ projets réalisés", "100% adaptable"]} 
              interval={2500}
              className="flip-words-subtitle"
            />
          </h3>
          
          {/* Fallback text au cas où FlipWords ne fonctionne pas */}
          <div style={{ display: 'none' }} className="fallback-text">
            <p>Développeur fullstack motivé, sérieux et curieux</p>
            <p>4+ ans d'expérience • 5+ projets réalisés • 100% adaptable</p>
          </div>

        </motion.div>

        {/* Main Content */}
        <div className="about-content">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="about-text"
          >
            <motion.div variants={fadeInUp} className="text-block">
              <p className="about-paragraph">
                Communicatif et à l'écoute, je m'attache à comprendre les besoins des clients afin de
                <span className="highlight purple"> proposer des solutions adaptées</span>. 
                Grâce à mon expérience, je fais preuve d'adaptabilité face à divers environnements et situations.
              </p>
            </motion.div>
            
            <motion.div variants={fadeInUp} className="text-block">
              <p className="about-paragraph">
                Sérieux, appliqué et motivé, je suis prêt à <span className="highlight blue">m'investir pleinement</span> dans de nouveaux projets, 
                tout en <span className="highlight green">développant et consolidant</span> mes compétences.
              </p>
            </motion.div>
            
  

            {/* Social Links */}
            <motion.div variants={fadeInUp} className="social-links">
            <a href="https://linkedin.com" className="hero-social-link">
              <FaLinkedin />
            </a>
            <a href="https://github.com" className="hero-social-link">
              <FaGithub />
            </a>
            </motion.div> 
          </motion.div>
          
          {/* Profile Image */}
          <motion.div 
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="profile-image-container"
          >
            <div className="profile-image-wrapper">
              <img 
                src="/images/profil.jpg" 
                alt="Photo de profil" 
                className="profile-image"
              />
              <div className="image-glow"></div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Unified Features Grid (Stats + Valeurs) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="features-section"
        >
        </motion.div>
      </div>
    </section>
  )
}

export default About