import React, { useEffect, useState } from 'react'

export function FlipWords({ words = [], interval = 1500, className = '' }) {
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (!words.length) return
    const id = setInterval(() => {
      setShow(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length)
        setShow(true)
      }, 180)
    }, interval)
    return () => clearInterval(id)
  }, [words, interval])

  return (
    <span className={`inline-block relative ${className}`}>
      <span
        style={{
          display: 'inline-block',
          transition: 'transform 180ms ease, opacity 180ms ease',
          transform: show ? 'translateY(0)' : 'translateY(12px)',
          opacity: show ? 1 : 0,
          willChange: 'transform, opacity',
        }}
      >
        {words[index]}
      </span>
    </span>
  )
}

export default FlipWords


