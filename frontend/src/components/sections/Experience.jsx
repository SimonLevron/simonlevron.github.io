import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaExternalLinkAlt, FaCode, FaGraduationCap, FaAward, FaRocket, FaStar, FaLightbulb, FaTrophy } from 'react-icons/fa'
import '../../styles/components/experience.css'

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

const expandAnimation = {
  hidden: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.3 }
  },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: { duration: 0.3 }
  }
}

function Experience() {
  const [expandedItems, setExpandedItems] = useState(new Set())
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const experienceData = [
    {
      title: "Projet Automatisation IA",
      company: "Développement d'outil de gestion de ticket automatique",
      period: " Mars 2025 - JUILLET 2025",
      location: "France",
      icon: <FaStar />,
      color: "cyan",
      description: "Développement d'un outil de gestion de ticket (Jira, mantis etc) automatique via IA locale. Gestion des connexions utilisateurs et mise à jour automatique.",
      skills: ["Java", "React", "PostgreSQL", "Git", "JWT", "n8n"],
      achievements: [
        "Développement d'outil de gestion automatique",
        "Intégration IA locale",
        "Gestion des connexions utilisateurs",
        "Automatisation des processus"
      ],
     },
    {
      title: "Développeur Full Stack",
      company: "Projet ANVOL – Suivi des transports Biocoop (ASI)",
      period: "MAI 2024 - DÉCEMBRE 2024",
      location: "France",
      icon: <FaCode />,
      color: "blue",
      description: "Développement backend (Java 11, Spring Boot) : Création d'API pour la récupération des données de livraison et l'envoi d'informations à Biocoop. Gestion des connexions utilisateurs et conception d'une interface ergonomique pour le suivi en temps réel des transports.",
      skills: ["Java 11", "Spring Boot", "Angular", "Docker"],
      achievements: [
        "Création d'API pour la récupération des données de livraison",
        "Mise en place de l'authentification et des permissions d'accès",
        "Conception d'une interface ergonomique pour le suivi en temps réel",
        "Développement d'outils de suivi des transports"
      ],
    },
    {
      title: "Développeur Fullstack - TMA",
      company: "Tierce Maintenance Applicative - Biocoop (ASI)",
      period: "AVRIL 2024 - DÉCEMBRE 2024",
      location: "France",
      icon: <FaLightbulb />,
      color: "green",
      description: "Analyse et correction des anomalies signalées par les utilisateurs ou l'équipe support. Développement d'évolutions fonctionnelles et optimisation des performances. Accompagnement et support utilisateur.",
      skills: ["Java 11", "Spring Boot", "Angular", "ElasticSearch", "Docker"],
      achievements: [
        "Analyse et correction des anomalies utilisateurs",
        "Développement d'évolutions fonctionnelles",
        "Optimisation des performances",
        "Accompagnement et support utilisateur"
      ],
    },
    {
      title: "Développeur Efficy - CRM",
      company: "FRET SNCF, SWISSLIFE, CERFRANCE (ASI)",
      period: "AVRIL 2023 - AVRIL 2024",
      location: "France",
      icon: <FaGraduationCap />,
      color: "purple",
      description: "Paramétrage de l'outil et maintien de la documentation. Développement et documentation des API. Implémentation de règles métier et maintenance corrective et évolutive.",
      skills: ["Java", "JSP", "JavaScript", "APIRest", "PostgreSQL", "Docker", "Git", "Maven"],
      achievements: [
        "Paramétrage de l'outil CRM",
        "Développement et documentation des API",
        "Implémentation de règles métier",
        "Maintenance corrective et évolutive"
      ],
  
    },
    {
      title: "Développeur freelance",
      company: "Projets divers",
      period: "OCTOBRE 2021 - DÉCEMBRE 2022",
      location: "France",
      icon: <FaRocket />,
      color: "orange",
      description: "Développement d'applications web et mobile. Création de sites e-commerce et solutions personnalisées pour clients.",
      skills: ["JavaScript", "PHP", "MySQL", "Angular", "WordPress", "Shopify", "Suite Adobe"],
      achievements: [
        "Développement d'applications web personnalisées",
        "Création de sites e-commerce",
        "Solutions CMS WordPress et Shopify",
        "Design et développement frontend"
      ],
  
    },
  ]

  const portfolioHighlights = [
    {
      title: "Projet ANVOL",
      description: "Système de suivi des transports Biocoop avec API Java/Spring Boot",
      icon: <FaTrophy />,
      color: "#FFD700",
      stats: "Suivi temps réel"
    },
    {
      title: "Automatisation IA",
      description: "Outil de gestion de tickets automatique avec IA locale",
      icon: <FaRocket />,
      color: "#6366f1",
      stats: "IA - Automatisation"
    },
    {
      title: "Projets CRM",
      description: "Développement et maintenance CRM pour grandes entreprises",
      icon: <FaStar />,
      color: "#10b981",
      stats: "Multi-clients - API - CRM"
    }
  ]

  const toggleExpanded = (index) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(index)) {
      newExpanded.delete(index)
    } else {
      newExpanded.add(index)
    }
    setExpandedItems(newExpanded)
  }

  return (
    <section id="experience" className="experience-section">
      {/* Background Effects */}
      <div className="experience-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="experience-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="experience-header"
        >
          <div className="section-badge">
            <FaBriefcase className="badge-icon" />
            <span>Parcours</span>
          </div>
          <h2 className="section-title">
            Mon parcours
            <span className="title-gradient"> professionnel</span>
          </h2>
          <p className="section-subtitle">
            Découvrez mon expérience, mes réalisations et les projets qui ont façonné mon expertise
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="experience-timeline"
        >
          {experienceData.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-dot" aria-hidden="true"></div>
              <motion.div
                variants={fadeInUp}
                className={`experience-card ${exp.color}`}
                whileHover={{ scale: 1.02, y: -8 }}
              >
                <div className="card-header">
                  <div className={`card-icon ${exp.color}`}>
                    {exp.icon}
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">{exp.title}</h3>
                    <p className="card-company">{exp.company}</p>
                    <div className="card-meta">
                      <span className="card-period">
                        <FaCalendarAlt /> {exp.period}
                      </span>
                      <span className="card-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="card-content">
                  <p className="card-description">{exp.description}</p>
                  
                  <div className="skills-list">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  
                  <button 
                    className="expand-button"
                    onClick={() => toggleExpanded(index)}
                  >
                    {expandedItems.has(index) ? (
                      <>
                        <FaChevronUp />
                        Réduire
                      </>
                    ) : (
                      <>
                        <FaChevronDown />
                        En savoir plus
                      </>
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedItems.has(index) && (
                      <motion.div
                        variants={expandAnimation}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="expanded-content"
                      >
                        <h4 className="achievements-title">Réalisations clés</h4>
                        <ul className="achievement-list">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                        
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="card-glow"></div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Portfolio Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="portfolio-highlights"
        >
          <h3 className="highlights-title">Projets principaux</h3>
          <div className="highlights-grid">
            {portfolioHighlights.map((project, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="highlight-card"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="highlight-icon" style={{ color: project.color }}>
                  {project.icon}
                </div>
                <div className="highlight-content">
                  <h4 className="highlight-title">{project.title}</h4>
                  <p className="highlight-description">{project.description}</p>
                  <span className="highlight-stats">{project.stats}</span>
                </div>
                <div className="highlight-glow"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

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

export default Experience