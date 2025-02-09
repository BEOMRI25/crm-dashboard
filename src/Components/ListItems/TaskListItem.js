import { useLayoutEffect, useRef } from 'react'
import ListItem from '../ListItem'
import TimeTag from '../Tags/TimeTag'
import TypeTag from '../Tags/TypeTag'
import './TaskListItem.css'
import { isPastDate } from '../../utilities'
import Divider from '../Divider'
import UserTag from '../Tags/UserTag'
import CustomerTag from '../Tags/CustomerTag'
import ProductTag from '../Tags/ProductTag'

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
      {fullScreen && <Divider />}
      <span className='description' title={task.description}>
        {task.description}
      </span>
      {fullScreen && <Divider />}
      {task.dateTime ? <TimeTag dateTime={task.dateTime} displayTime={task.displayTime} /> : <div></div>}
      {fullScreen && (
        <>
          <Divider />
          <UserTag user={task.assignedUser} />
          <Divider />
          {task.customerId ? <CustomerTag customerId={task.customerId} /> : <div></div>}
          <Divider />
          {task.productId ? <ProductTag productId={task.productId} /> : <div></div>}
          <Divider />
          <span className='comment' title={task.comment}>
            {task.comment}
          </span>
        </>
      )}
      <TypeTag type={task.type} />
    </ListItem>
  )
}
