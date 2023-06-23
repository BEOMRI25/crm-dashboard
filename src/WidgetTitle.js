import clipBoardIcon from "./img/Icon.png"

export default function WidgetTitle() {
    return (
        <div className="widget-title">
            <span>משימות</span>
            <button className="button primary">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 5.06H8.94V0.5H5.06V5.06H0.5V8.94H5.06V13.5H8.94V8.94H13.5V5.06Z" fill="currentColor"/>
                </svg>
            </button>
            <img src={clipBoardIcon} alt="" />
        </div>
    )
}