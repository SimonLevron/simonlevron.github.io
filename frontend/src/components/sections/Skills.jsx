import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaReact, FaJs, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaCode, FaServer, FaMobile, FaCloud, FaStar, FaRocket, FaLightbulb, FaCheck } from 'react-icons/fa'
import { SiTypescript, SiMongodb, SiPostgresql, SiDocker, SiFigma, SiVercel, SiNetlify, SiNextdotjs, SiTailwindcss, SiRedis, SiExpress, SiLinux, SiJenkins, SiKubernetes } from 'react-icons/si'
import { DraggableCardContainer, DraggableCardBody, ResetAllPositionsButton } from '../ui/draggable-card'
import '../../styles/components/skills.css'

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
      staggerChildren: 0.15
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

function Skills() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("skills")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Frontend",
      icon: <FaCode />,
      color: "blue",
      skills: [
        { name: "HTML", icon: <FaCode />, color: "#E34F26", description: "Structure et sémantique web" },
        { name: "CSS", icon: <FaCode />, color: "#1572B6", description: "Styles et mise en page" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E", description: "Langage de programmation polyvalent" },
        { name: "jQuery", icon: <FaJs />, color: "#0769AD", description: "Bibliothèque JavaScript" },
        { name: "Bootstrap", icon: <FaCode />, color: "#7952B3", description: "Framework CSS responsive" },
        { name: "React", icon: <FaReact />, color: "#61DAFB", description: "Bibliothèque JavaScript pour interfaces" },
        { name: "Vue.js", icon: <FaCode />, color: "#4FC08D", description: "Framework JavaScript progressif" }
      ]
    },
    {
      title: "Backend",
      icon: <FaServer />,
      color: "green",
      skills: [
        { name: "Java", icon: <FaCode />, color: "#007396", description: "Langage de programmation orienté objet" },
        { name: "PHP", icon: <FaCode />, color: "#777BB4", description: "Langage de script côté serveur" },
        { name: "Spring", icon: <FaCode />, color: "#6DB33F", description: "Framework Java" },
        { name: "Symfony", icon: <FaCode />, color: "#000000", description: "Framework PHP" },
        { name: "GraphQL", icon: <FaCode />, color: "#E10098", description: "Langage de requête pour API" }
      ]
    },
    {
      title: "Bases de données",
      icon: <FaDatabase />,
      color: "purple",
      skills: [
        { name: "MySQL", icon: <FaDatabase />, color: "#4479A1", description: "Base de données relationnelle" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", description: "Base de données relationnelle avancée" },
        { name: "Firebase", icon: <FaDatabase />, color: "#FFCA28", description: "Plateforme de développement mobile" }
      ]
    },
    {
      title: "Outils & DevOps",
      icon: <FaCloud />,
      color: "orange",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032", description: "Contrôle de version distribué" },
        { name: "GitLab", icon: <FaGitAlt />, color: "#FCA326", description: "Plateforme DevOps" },
        { name: "Docker", icon: <SiDocker />, color: "#2496ED", description: "Conteneurisation d'applications" },
        { name: "Linux", icon: <SiLinux />, color: "#FCC624", description: "Système d'exploitation open source" },
        { name: "Windows", icon: <FaCode />, color: "#0078D4", description: "Système d'exploitation Microsoft" }
      ]
    },
    {
      title: "Frameworks & CMS",
      icon: <FaMobile />,
      color: "cyan",
      skills: [
        { name: "Angular", icon: <FaCode />, color: "#DD0031", description: "Framework JavaScript" },
        { name: "Ionic", icon: <FaMobile />, color: "#3880FF", description: "Framework mobile hybride" },
        { name: "WordPress", icon: <FaCode />, color: "#21759B", description: "Système de gestion de contenu" },
        { name: "Shopify", icon: <FaCode />, color: "#96BF48", description: "Plateforme e-commerce" }
      ]
    },
    {
      title: "Outils d'analyse",
      icon: <FaStar />,
      color: "pink",
      skills: [
        { name: "Google Analytics", icon: <FaCode />, color: "#F4B400", description: "Analyse de trafic web" }
      ]
    }
  ]

  const techHighlights = [
    {
      name: "Java & Spring",
      icon: <FaCode />,
      color: "#007396",
      description: "Java 11, Spring Boot, APIs REST, Microservices",
      features: ["Développement backend", "APIs robustes", "Architecture scalable"]
    },
    {
      name: "Full-Stack Development",
      icon: <FaServer />,
      color: "#339933",
      description: "Frontend & Backend, CRM, E-commerce",
      features: ["Développement complet", "Solutions métier", "Intégration"]
    },
    {
      name: "DevOps & Outils",
      icon: <FaCloud />,
      color: "#FF9900",
      description: "Docker, Git, Linux, CI/CD, Monitoring",
      features: ["Conteneurisation", "Automatisation", "Déploiement"]
    }
  ]

  const handleResetAllPositions = () => {
    alert("Double-cliquez sur chaque carte pour la remettre en place !")
  }

  return (
    <section id="skills" className="skills-section">
      {/* Background Effects */}
      <div className="skills-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="skills-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="skills-header"
        >
          <div className="section-badge">
            <FaCode className="badge-icon" />
            <span>Compétences</span>
          </div>
          <h2 className="section-title">
            Technologies
            <span className="title-gradient"> & Expertise</span>
          </h2>
        </motion.div>

        {/* Draggable Skills Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="draggable-skills-container"
        >
          <DraggableCardContainer className="draggable-container">
            {/* Bouton pour tout remettre en place */}
            <div style={{ position: 'absolute', top: '10px', right: '10px', zIndex: 999 }}>
              <ResetAllPositionsButton onClick={handleResetAllPositions} />
            </div>

            {skillCategories.map((category, categoryIndex) => 
              category.skills.map((skill, skillIndex) => {
                const globalIndex = skillCategories
                  .slice(0, categoryIndex)
                  .reduce((acc, cat) => acc + cat.skills.length, 0) + skillIndex;
                
                const positions = [
                  { top: '8%', left: '3%', rotate: '-5deg' },
                  { top: '15%', left: '20%', rotate: '3deg' },
                  { top: '5%', left: '40%', rotate: '-8deg' },
                  { top: '18%', left: '60%', rotate: '6deg' },
                  { top: '12%', left: '80%', rotate: '-3deg' },
                  { top: '30%', left: '8%', rotate: '7deg' },
                  { top: '25%', left: '30%', rotate: '-4deg' },
                  { top: '35%', left: '50%', rotate: '5deg' },
                  { top: '28%', left: '70%', rotate: '-6deg' },
                  { top: '45%', left: '12%', rotate: '4deg' },
                  { top: '40%', left: '35%', rotate: '-7deg' },
                  { top: '50%', left: '55%', rotate: '3deg' },
                  { top: '42%', left: '75%', rotate: '-5deg' },
                  { top: '60%', left: '18%', rotate: '6deg' },
                  { top: '55%', left: '38%', rotate: '-4deg' },
                  { top: '65%', left: '58%', rotate: '3deg' },
                  { top: '58%', left: '78%', rotate: '-6deg' },
                  { top: '75%', left: '10%', rotate: '5deg' },
                  { top: '70%', left: '30%', rotate: '-3deg' },
                  { top: '80%', left: '50%', rotate: '4deg' },
                  { top: '72%', left: '70%', rotate: '-7deg' },
                  { top: '85%', left: '25%', rotate: '2deg' },
                  { top: '88%', left: '45%', rotate: '-5deg' },
                  { top: '90%', left: '65%', rotate: '3deg' }
                ];

                const position = positions[globalIndex % positions.length];
                
                return (
                  <DraggableCardBody
                    key={`skill-${categoryIndex}-${skillIndex}`}
                    cardId={`skill-${categoryIndex}-${skillIndex}`}
                    style={{
                      position: 'absolute',
                      top: position.top,
                      left: position.left,
                      transform: `rotate(${position.rotate})`
                    }}
                  >
                    <div className="card-icon" style={{ color: skill.color }}>
                      {skill.icon}
                    </div>
                    <h3 className="card-title">{skill.name}</h3>
                    <p className="card-description">{skill.description}</p>
                    <div className="card-tech">
                      <span className="tech-tag">{category.title}</span>
                    </div>
                    <div className="card-glow" style={{ background: `linear-gradient(135deg, ${skill.color}20, ${skill.color}10)` }}></div>
                  </DraggableCardBody>
                );
              })
            )}
          </DraggableCardContainer>
        </motion.div>

        {/* Tech Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="tech-highlights"
        >
          <h3 className="highlights-title">Expertise clés</h3>
          <div className="highlights-grid">
            {techHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="highlight-card"
                whileHover={{ scale: 1.03, y: -10 }}
              >
                <div className="highlight-header">
                  <div className="highlight-icon" style={{ color: highlight.color }}>
                    {highlight.icon}
                  </div>
                  <h4 className="highlight-name">{highlight.name}</h4>
                </div>
                <p className="highlight-description">{highlight.description}</p>
                <div className="highlight-features">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="feature-item">
                      <FaCheck className="tech-feature-icon" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="highlight-glow" style={{ background: `linear-gradient(135deg, ${highlight.color}20, ${highlight.color}10)` }}></div>
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

export default Skills