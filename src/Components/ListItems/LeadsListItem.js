import { Link } from 'react-router-dom'
import SocialIcon from '../../social-icons/SocialIcon'
import { getCustomer } from '../../utilities'
import ListItem from '../ListItem'

export default function LeadsListItem({ lead }) {
  const customer = getCustomer(lead.customerId)
  return (
    <ListItem>
      <Link className='link-list-item' to={`/customer?id=${lead.customerId}`} title={customer.name}>
        <span className='description'>{customer.name}</span>
        <SocialIcon iconName={lead.source} />
      </Link>
    </ListItem>
  )
}
