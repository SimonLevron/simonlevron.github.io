// Fonctions utilitaires pour le portfolio

/**
 * Formate une date au format français
 * @param {Date|string} date - La date à formater
 * @returns {string} - La date formatée
 */
export const formatDate = (date) => {
  const options = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(date).toLocaleDateString('fr-FR', options)
}

/**
 * Formate une période (début - fin)
 * @param {string} start - Date de début
 * @param {string} end - Date de fin (optionnel)
 * @returns {string} - Période formatée
 */
export const formatPeriod = (start, end = null) => {
  const startDate = new Date(start).getFullYear()
  const endDate = end ? new Date(end).getFullYear() : 'Présent'
  return `${startDate} - ${endDate}`
}

/**
 * Génère un ID unique
 * @returns {string} - ID unique
 */
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

/**
 * Détecte si l'utilisateur préfère le mode sombre
 * @returns {boolean} - True si mode sombre préféré
 */
export const prefersDarkMode = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Scroll fluide vers un élément
 * @param {string} elementId - ID de l'élément
 * @param {number} offset - Décalage en pixels (optionnel)
 */
export const scrollToElement = (elementId, offset = 0) => {
  const element = document.getElementById(elementId)
  if (element) {
    const elementPosition = element.offsetTop - offset
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
  }
}

/**
 * Vérifie si un élément est visible dans le viewport
 * @param {Element} element - L'élément à vérifier
 * @returns {boolean} - True si visible
 */
export const isElementVisible = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

/**
 * Délai avant exécution d'une fonction
 * @param {Function} func - Fonction à exécuter
 * @param {number} delay - Délai en millisecondes
 * @returns {Function} - Fonction avec délai
 */
export const debounce = (func, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => func.apply(null, args), delay)
  }
}

/**
 * Limite l'exécution d'une fonction
 * @param {Function} func - Fonction à limiter
 * @param {number} limit - Limite en millisecondes
 * @returns {Function} - Fonction limitée
 */
export const throttle = (func, limit) => {
  let inThrottle
  return (...args) => {
    if (!inThrottle) {
      func.apply(null, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

/**
 * Copie du texte dans le presse-papiers
 * @param {string} text - Texte à copier
 * @returns {Promise<boolean>} - True si succès
 */
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Erreur lors de la copie:', err)
    return false
  }
}

/**
 * Valide une adresse email
 * @param {string} email - Email à valider
 * @returns {boolean} - True si valide
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Génère des classes CSS conditionnelles
 * @param {Object} classes - Objet avec conditions et classes
 * @returns {string} - Classes CSS concaténées
 */
export const classNames = (classes) => {
  return Object.entries(classes)
    .filter(([key, value]) => value)
    .map(([key]) => key)
    .join(' ')
}

/**
 * Calcule la différence d'âge
 * @param {string} birthDate - Date de naissance
 * @returns {number} - Âge en années
 */
export const calculateAge = (birthDate) => {
  const today = new Date()
  const birth = new Date(birthDate)
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  
  return age
}

export default {
  formatDate,
  formatPeriod,
  generateId,
  prefersDarkMode,
  scrollToElement,
  isElementVisible,
  debounce,
  throttle,
  copyToClipboard,
  isValidEmail,
  classNames,
  calculateAge
}
