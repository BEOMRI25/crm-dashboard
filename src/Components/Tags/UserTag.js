import { Link } from 'react-router-dom'
import './tag.css'
import './UserTag.css'

export default function UserTag({ user }) {
  return (
    <Link className='tag user'>
      <span>{user}</span>
    </Link>
  )
}
