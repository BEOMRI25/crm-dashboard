import { useLayoutEffect, useRef } from 'react'
import './Glow.css'

export default function Glow() {
  const glowContainer = useRef()
  useLayoutEffect(() => {
    const parent = glowContainer.current.parentElement
    if (parent.style.position !== 'static') parent.style.position = 'relative'
  }, [])
  return (
    <div className='glow-container' ref={glowContainer}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
