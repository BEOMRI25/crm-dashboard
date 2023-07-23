import './Tab.css'

export default function Tab({ children, active, title, onClick }) {
  const styles = {
    backgroundColor: active ? 'var(--primary-double-positive-layer)' : 'none',
  }
  return (
    <div className='tab' style={styles} onClick={onClick}>
      {children}
      <span>{title}</span>
    </div>
  )
}
