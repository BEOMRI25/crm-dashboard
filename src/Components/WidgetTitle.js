import './WidgetTitle.css'

export default function WidgetTitle({ title }) {
    return (
        <div className="widget-title">
            <span>{title}</span>
        </div>
    )
}