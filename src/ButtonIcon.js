import Excel from "./button-icons/Excel"
import Plus from "./button-icons/Plus"

function getIconComponent(iconName) {
    switch (iconName) {
        case "plus":
            return <Plus />
        case "excel":
            return <Excel />    
    }
}

export default function ButtonIcon({ iconName }) {
    const icon = getIconComponent(iconName)
    return (
        <>
        {icon}
        </>
    )
}

