import './Badge.css'

export default function Badge({ badge }) {
  return <span className={`badge ${badge.semantic ? badge.semantic : ''}`}>{badge.count}</span>
}
