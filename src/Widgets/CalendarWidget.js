import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import './CalendarWidget.css'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitleNavigation'
import calendarIcon from '../img/calendar-icon.png'
import WidgetTitleIcon from '../Components/WidgetTitleIcon'
import BackButton from '../Components/BackButton'
import WidgetContent from '../Components/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContentNavigation'

export default function CalendarWidget({ fullScreen }) {
  return (
    <Widget id='calendar'>
      <WidgetTitle>
        {fullScreen && (
          <WidgetTitleNavigation>
            <BackButton />
          </WidgetTitleNavigation>
        )}
        <WidgetTitleHeading heading='יומן' />
        <WidgetTitleActions>
          {fullScreen && <SearchField />}
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
        {!fullScreen && <WidgetTitleIcon icon={calendarIcon} />}
      </WidgetTitle>
      <WidgetContent>
        <WidgetContentNavigation />
        <Link to='/calendar'>Go To Calendar</Link>
        <Link to='/'>Go Home</Link>
      </WidgetContent>
    </Widget>
  )
}
