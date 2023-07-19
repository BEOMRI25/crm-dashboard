import { Link } from 'react-router-dom'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import './TasksWidget.css'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import Button from '../Components/Button'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitleNavigation'
import BackButton from '../Components/BackButton'
import WidgetTitleIcon from '../Components/WidgetTitleIcon'
import clipBoardIcon from '../img/clipboard-icon.png'

export default function TasksWidget({ fullScreen }) {
  return (
    <Widget id='tasks'>
      <WidgetTitle>
        {fullScreen && (
          <WidgetTitleNavigation>
            <BackButton />
          </WidgetTitleNavigation>
        )}
        <WidgetTitleHeading heading='משימות' />
        <WidgetTitleActions>
          {fullScreen && <SearchField />}
          {fullScreen && <Button level='secondary' icon='excel' />}
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
        {!fullScreen && <WidgetTitleIcon icon={clipBoardIcon} />}
      </WidgetTitle>
      <Link to='/tasks'>Go To Tasks</Link>
      <Link to='/'>Go Home</Link>
    </Widget>
  )
}
