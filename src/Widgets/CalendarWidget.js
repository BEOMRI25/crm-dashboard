import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import './CalendarWidget.css'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitleNavigation'

export default function CalendarWidget({ fullScreen }) {
  return (
    <Widget id='calendar'>
      <WidgetTitle>
        {fullScreen && <WidgetTitleNavigation />}
        <WidgetTitleHeading heading='יומן' />
        <WidgetTitleActions>
          {fullScreen && <SearchField />}
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
      </WidgetTitle>
      <Link to='/calendar'>Go To Calendar</Link>
      <Link to='/'>Go Home</Link>
    </Widget>
  )
}
