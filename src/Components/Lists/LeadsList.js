import LeadsListItem from '../ListItems/LeadsListItem'
import TwoColumnList from '../TwoColumnList'

export default function LeadsList({ leads }) {
  return (
    <TwoColumnList>
      {leads.map(lead => {
        return <LeadsListItem key={lead.id} lead={lead} />
      })}
    </TwoColumnList>
  )
}
