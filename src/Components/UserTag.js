import { Link } from 'react-router-dom'
import './UserTag.css'

export default function UserTag({ user }) {
  return <Link className='user-tag'>{user}</Link>
}
