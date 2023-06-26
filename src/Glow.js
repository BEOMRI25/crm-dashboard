import { motion } from "framer-motion"
import { useRef, useEffect } from "react"

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
    useEffect(() => {
        console.log(glowContainer)
    })
    return (
        <motion.div className="glow-container" variants={glowVariants} ref={glowContainer}>
            <div></div>
            <div></div>
            <div></div>
        </motion.div>
    )
}

