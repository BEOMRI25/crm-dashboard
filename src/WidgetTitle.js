import clipBoardIcon from "./img/Icon.png"
import Button from "./Button"
import BackButton from "./BackButton"
import SearchField from "./SearchField"

export default function WidgetTitle({ isExpanded, shrinkWidget }) {
    return (
        <div className="widget-title" data-expanded={isExpanded}>
            {isExpanded && <div className="navigation">
                <BackButton onClick={shrinkWidget}/>
            </div>}
            <span>משימות</span>
            <div className="actions">
                {isExpanded && <>
                    <SearchField />
                    <Button level="secondary" icon="excel"/>
                </>}
                <Button level="primary" icon="plus"/>
            </div>
            {!isExpanded && <img src={clipBoardIcon} alt="" />}
        </div>
    )
}
