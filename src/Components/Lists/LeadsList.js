import List from '../List'
import LeadsListItem from '../ListItems/LeadsListItem'
import './LeadsList.css'

export default function LeadsList({ leads }) {
  return (
    <List className='list leads-list'>
      {leads.map(lead => {
        return <LeadsListItem key={lead.id} lead={lead} />
      })}
    </List>
  )
}
