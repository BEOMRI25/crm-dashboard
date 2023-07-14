import { createContext, useReducer } from "react"
import Glow from "./Glow"
import WidgetTitle from "./WidgetTitle"
import { motion } from "framer-motion"
import WidgetContent from "./WidgetContent"
import WidgetContentControls from "./WidgetContentControls"

export const WidgetSizeContext = createContext()
export const widgetSizeDispatchContext = createContext()

function reducer(widgetSize, actions) {
    switch (actions.type) {
        case "shrink":
            return "small"
        case "expand":
            return "large"
        case "toggle":
            return widgetSize === "small" ? "large" : "small"
        default: 
            return widgetSize
    }
}

export default function OldWidget() {
    const [widgetSize, dispatch] = useReducer(reducer, "small")
    const styles = widgetSize === "large" ? {maxWidth: "initial", maxHeight: "initial"} : {}
    return (
        <motion.div className="widget" style={styles} whileHover='hover'>
            <WidgetSizeContext.Provider value={widgetSize}>
                <widgetSizeDispatchContext.Provider value={dispatch}>
                    <Glow />
                    <WidgetTitle />
                    <WidgetContent>
                        <WidgetContentControls>
                        </WidgetContentControls>
                    </WidgetContent>
                </widgetSizeDispatchContext.Provider>
            </WidgetSizeContext.Provider>
        </motion.div>
    )
}

