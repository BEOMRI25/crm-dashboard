import ListItem from '../ListItem'
import TypeTag from '../TypeTag'

export default function TaskListItem({ task }) {
  return (
    <ListItem>
      <span>{task.description}</span>
      <TypeTag type={task.type} />
    </ListItem>
  )
}
