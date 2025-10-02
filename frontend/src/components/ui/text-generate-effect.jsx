import React, { useEffect, useState } from 'react'

export function TextGenerateEffect({ words = '', speed = 18, className = '' }) {
  const [output, setOutput] = useState('')

  useEffect(() => {
    let i = 0
    setOutput('')
    const id = setInterval(() => {
      setOutput((prev) => prev + words.charAt(i))
      i += 1
      if (i >= words.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [words, speed])

  return (
    <span className={className} aria-label={words}>
      {output}
      <span className="tge-caret">\u00A0</span>
    </span>
  )
}

export default TextGenerateEffect


