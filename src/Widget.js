import { useState } from "react"
import Glow from "./Glow"
import WidgetTitle from "./WidgetTitle"
import { motion } from "framer-motion"

export default function Widget() {
    const [isExpanded, setIsExpended] = useState(false)
    const styles = isExpanded ? {maxWidth: "initial", maxHeight: "initial"} : {}
    return (
        <motion.div className="widget" style={styles} whileHover='hover' >
            <Glow borderRadius="calc(1.5rem + 1px)" />
            <WidgetTitle />
            <button onClick={() => setIsExpended(!isExpanded)}>Toggle Expand</button>
        </motion.div>
    )
}