import ListItem from '../ListItem'
import TimeTag from '../Tags/TimeTag'
import './LeadsListItem.css'

export default function LeadsListItem({ lead }) {
  return (
    <ListItem className='list-item'>
      <span className='description' title={lead.description}>
        {lead.name}
      </span>
      <TimeTag dateTime={lead.dateTime} displayTime={lead.displayTime} />
    </ListItem>
  )
}
