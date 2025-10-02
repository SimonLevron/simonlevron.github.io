import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGamepad, FaMusic, FaCamera, FaBook, FaRunning, FaCode, FaHeart, FaStar, FaRocket, FaPalette, FaPlane, FaCoffee } from 'react-icons/fa'
import '../../styles/components/hobbies.css'

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

function Hobbies() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

}

export default Hobbies