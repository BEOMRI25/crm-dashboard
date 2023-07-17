import { Link } from 'react-router-dom'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import './TasksWidget.css'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import Button from '../Components/Button'

export default function TasksWidget() {
  return (
    <Widget id='tasks'>
      <WidgetTitle>
        <WidgetTitleHeading heading='משימות' />
        <WidgetTitleActions>
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
      </WidgetTitle>
      <Link to='/tasks'>Go To Tasks</Link>
      <Link to='/'>Go Home</Link>
    </Widget>
  )
}
