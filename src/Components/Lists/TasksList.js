import List from '../List'
import TaskListItem from '../ListItems/TaskListItem'

export default function TasksList({ tasksToDisplay, fullScreen }) {
  return (
    <List>
      {tasksToDisplay.map(task => {
        return <TaskListItem key={task.id} task={task} fullScreen={fullScreen} />
      })}
    </List>
  )
}
