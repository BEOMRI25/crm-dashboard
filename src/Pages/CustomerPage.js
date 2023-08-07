import { getCustomer } from '../utilities'

export default function CustomerPage() {
  const searchParams = new URLSearchParams(window.location.search)
  const customerId = searchParams.get('id')
  const customer = getCustomer(customerId)
  return <>{`שלום ${customer.name}`}</>
}
