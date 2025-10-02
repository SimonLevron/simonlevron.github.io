import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// Composant Section moderne avec Aceternity UI
const Section = ({ 
  children, 
  className, 
  background = "default",
  padding = "default",
  ...props 
}) => {
  const backgroundClasses = {
    default: "bg-white",
    dark: "bg-slate-900 text-white",
    gradient: "bg-gradient-to-br from-slate-50 to-slate-100",
    purple: "bg-gradient-to-br from-purple-50 to-purple-100",
    blue: "bg-gradient-to-br from-blue-50 to-blue-100"
  }
  
  const paddingClasses = {
    sm: "py-16",
    default: "py-24",
    lg: "py-32"
  }
  
  return (
    <section 
      className={cn(
        "relative overflow-hidden",
        backgroundClasses[background],
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-[radial-gradient(circle_at_1px_1px,rgba(156,146,172,0.05)_1px,transparent_0)] bg-[length:60px_60px]" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  )
}

// Composant Container
const Container = ({ children, className, ...props }) => {
  return (
    <div 
      className={cn("max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// Composant Section Header
const SectionHeader = ({ 
  title, 
  subtitle, 
  className,
  titleClassName,
  subtitleClassName,
  ...props 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("text-center mb-16", className)}
      {...props}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
        "bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 bg-clip-text text-transparent",
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-lg text-slate-600 max-w-2xl mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

// Composant Card moderne
const Card = ({ 
  children, 
  className,
  hover = false,
  gradient = false,
  ...props 
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={cn(
        "relative rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm",
        "shadow-lg shadow-slate-200/50",
        gradient && "bg-gradient-to-br from-white to-slate-50",
        hover && "hover:shadow-xl hover:shadow-slate-300/50",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Composant Grid moderne
const Grid = ({ 
  children, 
  className,
  cols = "auto",
  gap = "default",
  ...props 
}) => {
  const colsClasses = {
    auto: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }
  
  const gapClasses = {
    sm: "gap-4",
    default: "gap-6",
    lg: "gap-8"
  }
  
  return (
    <div 
      className={cn(
        "grid",
        colsClasses[cols],
        gapClasses[gap],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Section, Container, SectionHeader, Card, Grid }
export default Section
