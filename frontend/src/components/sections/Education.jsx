import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaRocket, FaStar, FaTrophy, FaCertificate, FaBook, FaUniversity, FaCode, FaDatabase, FaServer, FaCloud, FaMobile, FaCog, FaLaptop, FaGlobe, FaLock, FaChartLine, FaTools, FaGithub, FaDocker, FaLinux, FaWindows, FaJs, FaReact, FaAngular, FaBootstrap, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaPython, FaNodeJs, FaGitAlt, FaNpm } from 'react-icons/fa'
import { SiSpring, SiSymfony, SiGraphql, SiMysql, SiPostgresql, SiMongodb, SiRedis, SiElasticsearch, SiKubernetes, SiJenkins, SiGitlab, SiJira, SiConfluence, SiSlack, SiDiscord, SiFigma, SiAdobephotoshop, SiAdobexd, SiSketch, SiInvision, SiNotion, SiTrello, SiAsana, SiClickup, SiLinear } from 'react-icons/si'
import '../../styles/components/education.css'

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

// Slider animations
const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 300 : -300, opacity: 0, scale: 0.95 }),
  center: { zIndex: 1, x: 0, opacity: 1, scale: 1 },
  exit: (direction) => ({ zIndex: 0, x: direction < 0 ? 300 : -300, opacity: 0, scale: 0.95 })
}

function Education() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setDirection(1)
        setCurrentIndex((prev) => (prev + 1) % educationData.length)
      }, 4000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  const handleNext = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % educationData.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + educationData.length) % educationData.length)
  }

  const educationData = [
    {
      title: "DIPLÔME INGÉNIEUR",
      institution: "Spécialisation informatique",
      period: "2020",
      location: "France",
      icon: <FaGraduationCap />,
      color: "blue",
      description: "Formation d'ingénieur spécialisée en informatique avec focus sur le développement logiciel, les systèmes d'information et les technologies émergentes.",
      achievements: [
        "Formation complète en ingénierie informatique",
        "Spécialisation en développement logiciel",
        "Projets d'ingénierie complexes",
        "Approche systémique des technologies"
      ],
      skills: [
        { name: "Ingénierie logicielle", icon: <FaCode /> },
        { name: "Architecture système", icon: <FaServer /> },
        { name: "Développement avancé", icon: <FaLaptop /> },
        { name: "Gestion de projet", icon: <FaChartLine /> }
      ]
    },
    {
      title: "FIRST CERTIFICATE OF CAMBRIDGE",
      institution: "Cambridge English",
      period: "2016",
      location: "International",
      icon: <FaCertificate />,
      color: "green",
      description: "Certification d'anglais de niveau B2 reconnue internationalement. Validation des compétences en communication professionnelle en anglais.",
      achievements: [
        "Niveau B2 validé",
        "Compétences en communication professionnelle",
        "Reconnaissance internationale",
        "Anglais technique et commercial"
      ],
      skills: [
        { name: "Communication professionnelle", icon: <FaGlobe /> },
        { name: "Anglais technique", icon: <FaBook /> },
        { name: "Rédaction commerciale", icon: <FaCertificate /> },
        { name: "Présentation orale", icon: <FaStar /> }
      ]
    }
  ]

  const certifications = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      icon: <FaCertificate />,
      color: "#FF9900",
      description: "Certification professionnelle en architecture cloud AWS"
    },
    {
      title: "React Developer",
      issuer: "Meta",
      date: "2022",
      icon: <FaRocket />,
      color: "#61DAFB",
      description: "Certification en développement React avancé"
    },
    {
      title: "Docker Certified",
      issuer: "Docker Inc.",
      date: "2021",
      icon: <FaTrophy />,
      color: "#2496ED",
      description: "Certification en containerisation et orchestration"
    },
    {
      title: "TypeScript Mastery",
      issuer: "Microsoft",
      date: "2020",
      icon: <FaStar />,
      color: "#3178C6",
      description: "Maîtrise avancée de TypeScript"
    }
  ]

  const achievements = [
    {
      title: "Prix du meilleur projet",
      description: "Hackathon TechCrunch 2023",
      icon: <FaTrophy />,
      color: "#FFD700"
    },
    {
      title: "Bourse d'excellence",
      description: "Université de Technologie",
      icon: <FaAward />,
      color: "#8B5CF6"
    },
    {
      title: "Publication scientifique",
      description: "Journal of Computer Science",
      icon: <FaBook />,
      color: "#10B981"
    }
  ]

  return (
    <section id="education" className="education-section">
      {/* Background Effects */}
      <div className="education-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="education-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="education-header"
        >
          <div className="section-badge">
            <FaGraduationCap className="badge-icon" />
            <span>Formation</span>
          </div>
          <h2 className="section-title">
            Parcours académique
            <span className="title-gradient"> & Certifications</span>
          </h2>
          <p className="section-subtitle">
            Un parcours d'apprentissage continu pour rester à la pointe des technologies
          </p>
        </motion.div>
        
        {/* Education Slider */}
        <div 
          className="relative education-slider"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Nav buttons */}
          <button onClick={handlePrev} className="edu-nav prev" aria-label="Précédent">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={handleNext} className="edu-nav next" aria-label="Suivant">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
          </button>

          <div className="edu-panel">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.25 } }}
                className="edu-slide"
              >
                {(() => {
                  const edu = educationData[currentIndex]
                  return (
                    <div className={`education-card ${edu.color}`}>
                      <div className="card-header">
                        <div className={`card-icon ${edu.color}`}>{edu.icon}</div>
                        <div className="card-info">
                          <h3 className="card-title">{edu.title}</h3>
                          <p className="card-institution">{edu.institution}</p>
                          <div className="card-meta">
                            <span className="card-period"><FaCalendarAlt /> {edu.period}</span>
                            <span className="card-location"><FaMapMarkerAlt /> {edu.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-content">
                        <p className="card-description">{edu.description}</p>
                        <div className="skills-section highlighted">
                          <div className="skills-header">
                            <FaRocket className="skills-icon" />
                            <h4 className="skills-title">Compétences acquises</h4>
                          </div>
                          <div className="skills-grid">
                            {edu.skills.map((skill, i) => (
                              <div key={i} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                                <div className="skill-indicator"></div>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="achievements-section">
                          <h4 className="achievements-title">Réalisations</h4>
                          <ul className="achievement-list">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="card-glow"></div>
                    </div>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="edu-dots">
            {educationData.map((_, index) => (
              <button
                key={index}
                onClick={() => { setDirection(index > currentIndex ? 1 : -1); setCurrentIndex(index) }}
                className={`edu-dot ${index === currentIndex ? 'active' : ''}`}
                aria-label={`Aller à l'élément ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
      
        {/* Floating Elements */}
        <div className="floating-elements">
          <div className="floating-element element-1"></div>
          <div className="floating-element element-2"></div>
          <div className="floating-element element-3"></div>
          <div className="floating-element element-4"></div>
        </div>
                </div>
    </section>
  )
}

export default Education