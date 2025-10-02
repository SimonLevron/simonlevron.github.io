import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

// Composant Button moderne avec Aceternity UI
const Button = React.forwardRef(({ 
  className, 
  variant = "default",
  size = "default",
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800 shadow-lg hover:shadow-xl",
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-blue-500/25",
    secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-lg hover:shadow-xl",
    outline: "border border-slate-300 text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-700 hover:bg-slate-100",
    link: "text-blue-600 hover:text-blue-800 underline-offset-4 hover:underline"
  }
  
  const sizes = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 py-2",
    lg: "h-12 px-8 text-lg",
    xl: "h-14 px-10 text-xl"
  }
  
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
})

Button.displayName = "Button"

// Composant IconButton
const IconButton = React.forwardRef(({ 
  className, 
  children,
  ...props 
}, ref) => {
  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full p-3",
        "bg-white/10 backdrop-blur-sm border border-white/20 text-white",
        "hover:bg-white/20 transition-all duration-200",
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  )
})

IconButton.displayName = "IconButton"

export { Button, IconButton }
export default Button
