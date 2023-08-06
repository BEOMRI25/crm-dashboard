import { Link } from 'react-router-dom'
import './CustomerTag.css'
import { customers } from '../../data'

export default function CustomerTag({ customerId }) {
  const customer = customers.find(customer => customer.id == customerId)
  return (
    <Link className='tag customer' to={`/customer?id=${customerId}`} title={customer.name}>
      <span>{customer.name}</span>
    </Link>
  )
}
