import React, { useEffect, useState } from 'react'

const FlipWords = ({ words = [], interval = 1500, className = '' }) => {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!words || words.length === 0) return
    
    const timer = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setShow(true)
      }, 200)
    }, interval)
    
    return () => clearInterval(timer)
  }, [words, interval])

  if (!words || words.length === 0) {
    return <span className={className}>Loading...</span>
  }

  return (
    <span className={`inline-block relative ${className}`}>
      <span
        className="flip-word"
        style={{
          display: 'inline-block',
          transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
          transform: show ? 'translateY(0px)' : 'translateY(20px)',
          opacity: show ? 1 : 0,
        }}
      >
        {words[index]}
      </span>
    </span>
  )
}

export default FlipWords


