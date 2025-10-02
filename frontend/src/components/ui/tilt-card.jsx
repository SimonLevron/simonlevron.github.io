import React, { useRef } from 'react'

export function CardContainer({ className = '', children, maxTilt = 12, perspective = 900 }) {
  const containerRef = useRef(null)
  const bodyRef = useRef(null)

  const handleMove = (e) => {
    const el = containerRef.current
    const body = bodyRef.current
    if (!el || !body) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rx = (maxTilt / 2 - px * maxTilt).toFixed(2)
    const ry = (py * maxTilt - maxTilt / 2).toFixed(2)
    body.style.transform = `perspective(${perspective}px) rotateX(${ry}deg) rotateY(${rx}deg)`
  }

  const handleLeave = () => {
    const body = bodyRef.current
    if (!body) return
    body.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {React.Children.map(children, (child) =>
        child?.type?.displayName === 'CardBody'
          ? React.cloneElement(child, { _ref: bodyRef })
          : child
      )}
    </div>
  )
}

export function CardBody({ className = '', children, _ref }) {
  return (
    <div
      ref={_ref}
      className={className}
      style={{
        transform: 'perspective(900px) rotateX(0deg) rotateY(0deg)',
        transformStyle: 'preserve-3d',
        transition: 'transform 150ms ease',
      }}
    >
      {children}
    </div>
  )
}

CardBody.displayName = 'CardBody'

export function CardItem({ translateZ = 0, className = '', as: Tag = 'div', children, ...rest }) {
  const style = {
    transform: `translateZ(${translateZ}px)`,
    transformStyle: 'preserve-3d',
    willChange: 'transform',
  }
  return (
    <Tag className={className} style={style} {...rest}>
      {children}
    </Tag>
  )
}

CardItem.displayName = 'CardItem'


