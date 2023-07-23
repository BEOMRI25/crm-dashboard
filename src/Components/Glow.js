import { useRef, useState, useLayoutEffect } from 'react'
import './Glow.css'

export default function Glow() {
  const glowContainer = useRef()
  const [borderRadius, setBorderRadius] = useState()
  useLayoutEffect(() => {
    const styleSheets = document.styleSheets
    for (let sheet of styleSheets) {
      if (!sheet.href) {
        for (let rule of sheet.cssRules) {
          if (rule.selectorText === `.${glowContainer.current.parentElement.className}`) {
            setBorderRadius(`calc(${rule.style.borderRadius} + 1px)`)
            if (rule.style.position === 'static' || rule.style.position === '') {
              glowContainer.current.parentElement.style.position = 'relative'
            }
            break
          }
        }
      }
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
