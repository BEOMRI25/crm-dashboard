import Button from '../Components/Button'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import './CalendarWidget.css'

export default function CalendarWidget() {
  return (
    <Widget id='calendar'>
      <WidgetTitle>
        <WidgetTitleHeading heading='יומן' />
        <WidgetTitleActions>
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
      </WidgetTitle>
    </Widget>
  )
}
