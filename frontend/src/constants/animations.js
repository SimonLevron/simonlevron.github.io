// Animations Framer Motion pour le portfolio
export const animations = {
  // Animations de base
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  // Animations avec délai
  staggerChildren: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  },
  
  staggerChildrenFast: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  },
  
  // Animations d'interaction
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  },
  
  // Animations d'expansion
  expand: {
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
  },
  
  // Animations de rotation
  rotate: {
    hidden: { rotate: -180, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  },
  
  // Animations de glissement
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  
  slideDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }
}

// Variantes d'animation pour les sections
export const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
}

// Variantes pour les cartes
export const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: {
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" }
  }
}

// Variantes pour les boutons
export const buttonVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2 }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1 }
  }
}

export default animations
