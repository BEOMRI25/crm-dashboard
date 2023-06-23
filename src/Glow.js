import { motion } from "framer-motion"

export default function Glow({ borderRadius }) {
    return (
        <div className="glow-container">
            <motion.div style={{ borderRadius: borderRadius }} whileHover={{ opacity: 1 }}></motion.div>
            <motion.div style={{ borderRadius: borderRadius }} whileHover={{ opacity: 1 }}></motion.div>
            <motion.div style={{ borderRadius: borderRadius }} whileHover={{ opacity: 0.5 }}></motion.div>
        </div>
    )
}