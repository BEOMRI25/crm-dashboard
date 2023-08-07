import ListHeader from '../ListHeader'
import ListHeaders from '../ListHeaders'
import './TaskListHeaders.css'

export default function TaskListHeaders() {
  const listHeaders = [
    { id: 1, title: 'סוג', isSortable: true },
    { id: 2, title: 'משימה', isSortable: false },
    { id: 3, title: 'מועד', isSortable: true },
    { id: 4, title: 'משתמש מטפל', isSortable: true },
    { id: 5, title: 'לקוח', isSortable: true },
    { id: 6, title: 'מוצר', isSortable: true },
    { id: 7, title: 'הערות', isSortable: false },
  ]
  return (
    <ListHeaders>
      {listHeaders.map(listHeader => {
        return <ListHeader title={listHeader.title} isSortable={listHeader.isSortable} key={listHeader.id} />
      })}
    </ListHeaders>
  )
}
