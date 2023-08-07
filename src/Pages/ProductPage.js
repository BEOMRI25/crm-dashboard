import { getProduct } from '../utilities'

export default function ProductPage() {
  const searchParams = new URLSearchParams(window.location.search)
  const productId = searchParams.get('id')
  const product = getProduct(productId)
  return <>{product.name}</>
}
