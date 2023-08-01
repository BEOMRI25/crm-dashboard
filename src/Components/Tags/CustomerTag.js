import { Link } from 'react-router-dom'
import './CustomerTag.css'

export default function CustomerTag({ customer }) {
  return <Link className='tag customer'>{customer}</Link>
}
