import List from '../List'
import TrackedCustomerListItem from '../ListItems/TrackedCustomerListItem'

export default function TrackedCustomerList({ trackedCustomers }) {
  return (
    <List>
      {trackedCustomers.map(trackedCustomer => {
        return <TrackedCustomerListItem key={trackedCustomer.id} trackedCustomer={trackedCustomer} />
      })}
    </List>
  )
}
