import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaPaperPlane, FaUser, FaComment, FaRocket, FaStar } from 'react-icons/fa'
import '../../styles/components/contact.css'

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

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "simon.levron56@gmail.com",
      link: "mailto:simon.levron56@gmail.com",
      color: "blue"
    },
    {
      icon: <FaPhone />,
      title: "Téléphone",
      value: "+33 06 74 28 28 53",
      link: "tel:+33674282853",
      color: "green"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Localisation",
      value: "Rennes, 35700 France",
      link: "#",
      color: "purple"
    }
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/simon-levron-335b69131/",
      color: "#0077B5"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/SimonLevron",
      color: "#333333"
    },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulation d'envoi (remplacez par votre service d'email)
    try {
      // Pour l'instant, on simule un envoi réussi
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
      alert('Message envoyé avec succès ! Je vous répondrai rapidement.')
    } catch (err) {
      alert("Échec de l'envoi. Vous pouvez me contacter directement par email.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact-section">
      {/* Background Effects */}
      <div className="contact-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
        <div className="gradient-orb gradient-orb-3"></div>
      </div>

      <div className="contact-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="contact-header"
        >
          <div className="section-badge">
            <FaPaperPlane className="badge-icon" />
            <span>Contact</span>
          </div>
          <h2 className="section-title">
            Travaillons
            <span className="title-gradient"> ensemble</span>
          </h2>
          <p className="section-subtitle">
            Une idée de projet ? Une collaboration ? N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="contact-content">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="contact-info"
          >
            <h3 className="info-title">Informations de contact</h3>
            <div className="info-grid">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`info-card ${info.color}`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className={`info-icon ${info.color}`}>
                    {info.icon}
                  </div>
                  <div className="info-content">
                    <h4 className="info-label">{info.title}</h4>
                    <a href={info.link} className="info-value">
                      {info.value}
                    </a>
                  </div>
                  <div className="info-glow"></div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="social-section">
              <h4 className="social-title">Réseaux</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{ color: social.color }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            className="contact-form-wrapper"
          >
            <div className="form-header">
              <h3 className="form-title">Envoyez-moi un message</h3>
              <p className="form-subtitle">Je réponds généralement dans les 24h</p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <FaUser className="label-icon" />
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <FaEnvelope className="label-icon" />
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="votre@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  <FaComment className="label-icon" />
                    Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Sujet de votre message"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FaComment className="label-icon" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="form-textarea"
                  placeholder="Décrivez votre projet ou votre demande..."
                  rows="6"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Envoyer le message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
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

export default Contact