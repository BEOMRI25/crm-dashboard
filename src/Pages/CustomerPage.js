import { customers } from '../data'

export default function CustomerPage() {
  const searchParams = new URLSearchParams(window.location.search)
  const customerId = searchParams.get('id')
  const customer = customers.find(customer => customer.id == customerId)
  return <>{`שלום ${customer.name}`}</>
}
