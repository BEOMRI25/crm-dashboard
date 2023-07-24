import Badge from './Badge'
import './Tab.css'

export default function Tab({ children, active, title, onClick, badge }) {
  return (
    <div className={`tab ${active && 'active'}`} onClick={onClick}>
      {children}
      <span>
        {title}
        {badge && <Badge badge={badge} />}
      </span>
    </div>
  )
}
