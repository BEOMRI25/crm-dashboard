import { useEffect, useState } from 'react'
import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import './ClockWidget.css'
import { formatClockDate, formatClockDay, formatTime } from '../utilities'

export default function ClockWidget() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date())
  useEffect(() => {
    setInterval(() => {
      setCurrentDateTime(new Date())
    }, 1000)
  }, [])
  const formattedTime = formatTime(currentDateTime)
  const formattedDate = formatClockDate(currentDateTime)
  const formattedDay = formatClockDay(currentDateTime)
  return (
    <Widget id='clock'>
      <WidgetContent>
        <span className='time'>{formattedTime}</span>
        <div className='day-and-date'>
          <span>{formattedDay}</span>
          <span>{formattedDate}</span>
        </div>
      </WidgetContent>
    </Widget>
  )
}
