import { Link } from 'react-router-dom'
import './ProductTag.css'

export default function ProductTag({ product }) {
  return (
    <Link className='tag product'>
      <span>{product}</span>
    </Link>
  )
}
