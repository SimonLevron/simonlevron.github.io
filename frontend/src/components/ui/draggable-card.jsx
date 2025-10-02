import { useState, useRef, useEffect } from "react"

// 🏗️ CONTAINER : Simple wrapper pour les cartes draggables
export const DraggableCardContainer = ({ children, className = "" }) => {
  return <div className={`draggable-card-container ${className}`}>{children}</div>
}

// 🎯 CARTE DRAGGABLE : Le composant principal avec toute la logique de drag & drop
export const DraggableCardBody = ({ children, className = "", style = {}, cardId, ...props }) => {
  // 📍 ÉTATS : Gestion des états de la carte
  const [isDragging, setIsDragging] = useState(false)        // Si on est en train de dragger
  const [hasBeenDragged, setHasBeenDragged] = useState(false) // Si la carte a déjà été déplacée

  // 🎯 POSITION : State local pour la position en temps réel (x, y en pixels)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // 🔗 RÉFÉRENCES : Pour accéder au DOM et stocker des valeurs persistantes
  const cardRef = useRef(null)                              // Référence vers l'élément DOM
  const dragOffset = useRef({ x: 0, y: 0 })                 // Offset pour calculer la position relative

  // 🖱️ MOUSE DOWN : Début du drag (quand on clique sur la carte)
  const handleMouseDown = (e) => {
    if (e.button !== 0) return  // Seulement le clic gauche (bouton 0)
    e.preventDefault()          // Empêche la sélection de texte
    e.stopPropagation()        // Empêche la propagation de l'événement

    // 🚀 DÉMARRAGE : On commence le drag
    setIsDragging(true)
    setHasBeenDragged(true)

    // 📐 CALCUL OFFSET : On calcule la différence entre le clic et la position actuelle
    // C'est crucial pour que la carte ne "saute" pas au clic
    dragOffset.current = {
      x: e.clientX - position.x,  // Position de la souris - position de la carte
      y: e.clientY - position.y,
    }
  }

  // 🖱️ MOUSE MOVE : Pendant le drag (mouvement fluide en temps réel)
  const handleMouseMove = (e) => {
    if (!isDragging) return  // On ne fait rien si on ne drag pas
    e.preventDefault()        // Empêche le scroll
    e.stopPropagation()      // Empêche la propagation

    // 🎯 CALCUL POSITION : Nouvelle position = position souris - offset
    const newX = e.clientX - dragOffset.current.x
    const newY = e.clientY - dragOffset.current.y

    // ⚡ MISE À JOUR TEMPS RÉEL : On met à jour immédiatement la position
    // C'est ça qui donne l'effet fluide !
    setPosition({ x: newX, y: newY })
  }

  // 🖱️ MOUSE UP : Fin du drag (quand on relâche le clic)
  const handleMouseUp = (e) => {
    if (!isDragging) return  // On ne fait rien si on ne drag pas
    e.preventDefault()
    e.stopPropagation()

    // 🏁 FIN : On arrête le drag
    setIsDragging(false)
  }

  // 🔄 DOUBLE CLICK : Reset de la position (double-clic pour remettre en place)
  const handleDoubleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setPosition({ x: 0, y: 0 })      // Remet à la position initiale
    setHasBeenDragged(false)         // Marque comme non déplacée
  }

  // 🎧 EVENT LISTENERS : Gestion des événements globaux pendant le drag
  useEffect(() => {
    if (isDragging) {
      // 📡 ÉCOUTE GLOBALE : On écoute sur le document pour capturer même si la souris sort de la carte
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)

      // 🧹 NETTOYAGE : On supprime les listeners quand on arrête de drag
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isDragging])

  // 🎨 STYLE FINAL : Application de la position et des styles visuels
  const finalStyle = {
    ...style,  // Styles passés en props (position initiale, rotation, etc.)
    // 🔄 TRANSFORM : On combine la rotation initiale avec la translation du drag
    transform: style.transform
      ? `${style.transform} translate(${position.x}px, ${position.y}px)`  // Rotation + translation
      : `translate(${position.x}px, ${position.y}px)`,                   // Juste translation
    // 🖱️ CURSOR : Curseur qui change selon l'état
    cursor: isDragging ? "grabbing" : "grab",
    // 📚 Z-INDEX : Priorité d'affichage (carte en cours de drag au-dessus)
    zIndex: isDragging ? 1000 : hasBeenDragged ? 100 : "auto",
  }

  return (
    <div
      ref={cardRef}
      // 🏷️ CLASSES : Classes CSS dynamiques selon l'état
      className={`draggable-skill-card ${isDragging ? "dragging" : ""} ${hasBeenDragged ? "has-been-dragged" : ""} ${className}`}
      style={finalStyle}  // Styles avec position appliquée
      onMouseDown={handleMouseDown}      // Début du drag
      onDoubleClick={handleDoubleClick}   // Reset de position
      title={hasBeenDragged ? "Double-clic pour remettre en place" : "Clique et déplace moi !"}
      {...props}
    >
      {children}
      {/* 🟢 INDICATEUR VISUEL : Point vert pour les cartes déplacées */}
      {hasBeenDragged && (
        <div
          style={{
            position: "absolute",
            top: "-8px",
            right: "-8px",
            width: "16px",
            height: "16px",
            backgroundColor: "#00ff88",
            borderRadius: "50%",
            border: "2px solid white",
            boxShadow: "0 0 8px rgba(0, 255, 136, 0.6)",
            pointerEvents: "none",  // N'interfère pas avec le drag
            zIndex: 1,
          }}
        />
      )}
    </div>
  )
}

// 🔄 BOUTON RESET : Bouton pour remettre toutes les cartes en place
export const ResetAllPositionsButton = ({ className = "", onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`reset-positions-btn ${className}`}
      style={{
        padding: "8px 16px",
        backgroundColor: "#ff4757",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "500",
        boxShadow: "0 2px 8px rgba(255, 71, 87, 0.3)",
        transition: "all 0.2s ease",
      }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "#ff3742")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4757")}
    >
      🔄 Remettre tout en place
    </button>
  )
}