import { useRef, useState, useLayoutEffect } from 'react'
import './Glow.css'

export default function Glow() {
  const glowContainer = useRef()
  const [borderRadius, setBorderRadius] = useState()
  useLayoutEffect(() => {
    const parentStyles = getComputedStyle(glowContainer.current.parentElement)
    setBorderRadius(`calc(${parentStyles.getPropertyValue('border-radius')} + 1px)`)
    if (parentStyles.getPropertyValue('position') === 'static') {
      glowContainer.current.parentElement.style.position = 'relative'
    }
  }, [])
  return (
    <div className='glow-container' ref={glowContainer}>
      <div style={{ borderRadius: borderRadius }}></div>
      <div style={{ borderRadius: borderRadius }}></div>
      <div style={{ borderRadius: borderRadius }}></div>
    </div>
  )
}
