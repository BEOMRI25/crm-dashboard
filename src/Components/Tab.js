import './Tab.css'

export default function Tab({ children, active, title }) {
  const styles = {
    backgroundColor: active ? 'var(--primary-double-positive-layer)' : 'none',
  }
  return (
    <div className='tab' style={styles}>
      {children}
      <span>{title}</span>
    </div>
  )
}
