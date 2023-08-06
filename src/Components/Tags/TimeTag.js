import { formatDate, formatTime } from '../../utilities'
import './tag.css'
import './TimeTag.css'

export default function TimeTag({ dateTime, displayTime }) {
  const date = formatDate(dateTime)
  let tagText = date
  if (displayTime) {
    const time = formatTime(dateTime)
    tagText += `, ${time}`
  }
  return (
    <div className='tag time'>
      <span>{tagText}</span>
    </div>
  )
}
