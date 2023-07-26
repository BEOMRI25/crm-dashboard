import { formatDate, formatTime } from '../utilities'
import './TimeTag.css'

export default function TimeTag({ dateTime, displayTime }) {
  const date = formatDate(dateTime)
  let tagText = date
  if (displayTime) {
    const time = formatTime(dateTime)
    tagText += `, ${time}`
  }
  return <div className='time-tag'>{tagText}</div>
}
