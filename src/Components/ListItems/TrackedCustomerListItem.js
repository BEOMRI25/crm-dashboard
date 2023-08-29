import { Link } from 'react-router-dom'
import { getCustomer } from '../../utilities'
import ListItem from '../ListItem'
import TimeTag from '../Tags/TimeTag'

export default function TrackedCustomerListItem({ trackedCustomer }) {
  const customer = getCustomer(trackedCustomer.customerId)
  return (
    <ListItem>
      <Link className='link-list-item' to={`/customer?id=${trackedCustomer.customerId}`} title={customer.name}>
        <span className='description'>{customer.name}</span>
        <TimeTag dateTime={trackedCustomer.dateTime} />
      </Link>
    </ListItem>
  )
}
