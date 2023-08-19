import ListHeader from '../ListHeader'
import ListHeaders from '../ListHeaders'
import './TaskListHeaders.css'

export default function TaskListHeaders({ setSortedBy }) {
  const listHeaders = [
    { id: 1, title: 'סוג', sortTitle: 'type', isSortable: true },
    { id: 2, title: 'משימה', sortTitle: 'description', isSortable: true },
    { id: 3, title: 'מועד', sortTitle: 'dateTime', isSortable: true },
    { id: 4, title: 'משתמש מטפל', sortTitle: 'assignedUser', isSortable: true },
    { id: 5, title: 'לקוח', sortTitle: 'customerId', isSortable: true },
    { id: 6, title: 'מוצר', sortTitle: 'productId', isSortable: true },
    { id: 7, title: 'הערות', sortTitle: 'comment', isSortable: false },
  ]
  return (
    <ListHeaders>
      {listHeaders.map(listHeader => {
        return (
          <ListHeader
            title={listHeader.title}
            isSortable={listHeader.isSortable}
            key={listHeader.id}
            onClick={() => {
              setSortedBy(listHeader.sortTitle)
            }}
          />
        )
      })}
    </ListHeaders>
  )
}
