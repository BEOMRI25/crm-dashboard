import { useLayoutEffect, useRef } from 'react'
import ListItem from '../ListItem'
import TimeTag from '../TimeTag'
import TypeTag from '../TypeTag'
import './TaskListItem.css'
import { isPastDate } from '../../utilities'
import Divider from '../Divider'
import UserTag from '../UserTag'

export default function TaskListItem({ task, fullScreen }) {
  const isExpired = isPastDate(task.dateTime)
  const listItem = useRef()
  useLayoutEffect(() => {
    if (isExpired) {
      listItem.current.classList.add('danger')
    }
  })
  return (
    <ListItem ref={listItem}>
      <span className='description'>{task.description}</span>
      {fullScreen && <Divider />}
      {task.dateTime ? <TimeTag dateTime={task.dateTime} displayTime={task.displayTime} /> : <div></div>}
      {fullScreen && (
        <>
          <Divider />
          <UserTag user={task.assignedUser} />
          <Divider />
        </>
      )}
      <TypeTag type={task.type} />
    </ListItem>
  )
}
