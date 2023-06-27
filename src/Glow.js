import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"

const glowVariants = {
    hover: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export default function Glow() {
    const glowContainer = useRef(null)
    const [borderRadius, setBorderRadius] = useState(null)
    useEffect(() => {
        const parentStyles = getComputedStyle(glowContainer.current.parentElement)
        setBorderRadius(`calc(${parentStyles.getPropertyValue("border-radius")} + 1px)`)
    }, [])
    return (
        <motion.div className="glow-container" variants={glowVariants} ref={glowContainer}>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
        </motion.div>
    )
}

