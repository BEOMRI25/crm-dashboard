import { forwardRef } from 'react'
import './ListItem.css'

const ListItem = forwardRef(({ children }, ref) => {
  return (
    <li className='list-item' ref={ref}>
      {children}
    </li>
  )
})

export default ListItem
