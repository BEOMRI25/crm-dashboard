import { Link } from 'react-router-dom'
import { getCustomer } from '../../utilities'
import ListItem from '../ListItem'

export default function RecentViewsListItem({ recentView }) {
  const customer = getCustomer(recentView.customerId)
  return (
    <ListItem>
      <Link className='link-list-item' to={`/customer?id=${recentView.customerId}`} title={customer.name}>
        <span className='description'>{customer.name}</span>
      </Link>
    </ListItem>
  )
}
