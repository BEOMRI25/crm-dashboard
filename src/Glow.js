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
    const [borderRadius, setBorderRadius] = useState(0)
    useEffect(() => {
        const parentComputedStyle = getComputedStyle(glowContainer.current.parentElement)
        setBorderRadius(parseFloat(parentComputedStyle.getPropertyValue('border-radius').replace('px', '')))
    }, [borderRadius])
    return (
        <motion.div className="glow-container" variants={glowVariants} ref={glowContainer}>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
        </motion.div>
    )
}

