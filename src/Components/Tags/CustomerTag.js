import { Link } from 'react-router-dom'
import './CustomerTag.css'
import { getCustomer } from '../../utilities'

export default function CustomerTag({ customerId }) {
  const customer = getCustomer(customerId)
  return (
    <Link className='tag customer' to={`/customer?id=${customerId}`} title={customer.name}>
      <span>{customer.name}</span>
    </Link>
  )
}
