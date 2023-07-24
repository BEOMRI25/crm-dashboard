import './Badge.css'

export default function Badge({ badge }) {
  return <span className={`badge ${badge.danger && 'danger'}`}>{badge.count}</span>
}
