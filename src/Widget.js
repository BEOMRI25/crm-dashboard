import { useState } from "react"
import Glow from "./Glow"
import WidgetTitle from "./WidgetTitle"
import { motion } from "framer-motion"

export default function Widget() {
    const [isExpanded, setIsExpended] = useState(false)
    const styles = isExpanded ? {maxWidth: "initial", maxHeight: "initial"} : {}
    return (
        <motion.div className="widget" style={styles} whileHover='hover'>
            <Glow />
            <WidgetTitle isExpanded={isExpanded}/>
            <button onClick={() => setIsExpended(!isExpanded)}>Toggle Expand</button>
        </motion.div>
    )
}