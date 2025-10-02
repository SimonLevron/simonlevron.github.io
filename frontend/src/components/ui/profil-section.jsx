import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaLinkedin, FaGithub, FaArrowDown } from 'react-icons/fa'
import { cn } from '../../lib/utils'

// Composant Profil moderne avec Aceternity UI
const ProfilSection = ({ className, ...props }) => {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
        className
      )}
      {...props}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Développeur
            </span>
            <br />
            <span className="text-white">
              Full Stack
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Créateur d'expériences web modernes avec React, Node.js et les dernières technologies
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-purple-600 px-8 font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
              <span className="flex items-center gap-2">
                <FaDownload />
                Télécharger CV
              </span>
            </button>
            
            <button className="group relative inline-flex h-12 items-center justify-center rounded-md border border-gray-600 bg-transparent px-8 font-medium text-white transition-all hover:bg-white/10 hover:scale-105">
              <span className="flex items-center gap-2">
                Voir mes projets
                <FaArrowDown className="group-hover:translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-6"
          >
            <a 
              href="https://www.linkedin.com/in/simon-levron-335b69131/" 
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110"
              target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Simon Levron"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/SimonLevron" 
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white transition-all hover:bg-white/20 hover:scale-110"
              target="_blank" rel="noopener noreferrer" aria-label="GitHub de Simon Levron"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default ProfilSection
