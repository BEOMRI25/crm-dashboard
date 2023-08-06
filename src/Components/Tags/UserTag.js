import { Link } from 'react-router-dom'
import './tag.css'
import './UserTag.css'

export default function UserTag({ user }) {
  return (
    <div className='tag user' title={user}>
      <span>{user}</span>
    </div>
  )
}
