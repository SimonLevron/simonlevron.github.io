import React from 'react'

// Import des composants UI
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'

// Import des sections
import Profil from './components/sections/Profil'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Contact from './components/sections/Contact'

// Import des styles globaux (déjà dans main, conservé ici si usage direct)
import './styles/globals/index.css'
import './styles/components/index.css'

function App() {
  return (
    <div className="font-inter text-slate-900 overflow-x-hidden">
      {/* En-tête avec navigation */}
      <Header />
      
      {/* Contenu principal avec espacement pour la navbar fixe */}
      <div className="main-content">
        {/* Section profil avec nom, prénom et poste */}
        <Profil />
      
      {/* Présentation personnelle */}
      <About />
      
      {/* Compétences techniques */}
      <Skills />
      
      {/* Expériences professionnelles */}
      <Experience />
      
      {/* Formations */}
      <Education />
      
      
      {/* Formulaire de contact */}
      <Contact />
      
        {/* Pied de page avec liens sociaux */}
        <Footer />
      </div>
    </div>
  )
}

export default App


