import { useState } from "react"

export default function Widget() {
    const [isExpanded, setIsExpended] = useState(false)
    const styles = isExpanded ? {maxWidth: "initial", maxHeight: "initial"} : {}
    return (
        <div className="widget" style={styles} >
            <button onClick={() => setIsExpended(!isExpanded)}>Toggle Expand</button>
        </div>
    )
}