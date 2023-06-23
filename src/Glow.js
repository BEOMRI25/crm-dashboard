import { motion } from "framer-motion"

const glowVariants = {
    hover: {
        opacity: 1
    }
}

export default function Glow({ borderRadius }) {
    return (
        <motion.div className="glow-container" variants={glowVariants}>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
            <div style={{ borderRadius: borderRadius }}></div>
        </motion.div>
    )
}