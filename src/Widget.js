import { useState } from "react"
import Glow from "./Glow"

export default function Widget() {
    const [isExpanded, setIsExpended] = useState(false)
    const styles = isExpanded ? {maxWidth: "initial", maxHeight: "initial"} : {}
    return (
        <div className="widget" style={styles} >
            <Glow borderRadius="1.5rem" />
            <button onClick={() => setIsExpended(!isExpanded)}>Toggle Expand</button>
        </div>
    )
}