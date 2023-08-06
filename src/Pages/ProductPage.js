import { products } from '../data'

export default function ProductPage() {
  const searchParams = new URLSearchParams(window.location.search)
  const productId = searchParams.get('id')
  const product = products.find(product => product.id == productId)
  return <>{product.name}</>
}
