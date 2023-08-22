import List from '../List'
import TaskListItem from '../ListItems/TaskListItem'
import './TasksList.css'

export default function TasksList({ tasksToDisplay, fullScreen }) {
  return (
    <List className='list tasks-list'>
      {tasksToDisplay.map(task => {
        return <TaskListItem key={task.id} task={task} fullScreen={fullScreen} />
      })}
    </List>
  )
}
