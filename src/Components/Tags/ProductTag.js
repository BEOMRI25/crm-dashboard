import { Link } from 'react-router-dom'
import './ProductTag.css'
import { products } from '../../data'

export default function ProductTag({ productId }) {
  const product = products.find(product => product.id == productId)
  return (
    <Link className='tag product' to={`/product?id=${productId}`} title={product.name}>
      <span>{product.name}</span>
    </Link>
  )
}
