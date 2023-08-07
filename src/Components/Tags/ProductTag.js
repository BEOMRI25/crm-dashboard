import { Link } from 'react-router-dom'
import './ProductTag.css'
import { getProduct } from '../../utilities'

export default function ProductTag({ productId }) {
  const product = getProduct(productId)
  return (
    <Link className='tag product' to={`/product?id=${productId}`} title={product.name}>
      <span>{product.name}</span>
    </Link>
  )
}
