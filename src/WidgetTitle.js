import clipBoardIcon from "./img/Icon.png"
import Button from "./Button"

export default function WidgetTitle({ isExpanded }) {
    return (
        <div className="widget-title" data-expanded={isExpanded}>
            <span>משימות</span>
            <div className="actions">
                {isExpanded && <Button level="secondary" icon="excel"/>}
                <Button level="primary" icon="plus"/>
            </div>
            {!isExpanded && <img src={clipBoardIcon} alt="" />}
        </div>
    )
}
