import BackButton from '../../BackButton'
import Button from '../../Button'
import SearchField from '../../SearchField'
import WidgetTitle from '../WidgetTitle'
import WidgetTitleActions from '../WidgetTitleActions'
import WidgetTitleHeading from '../WidgetTitleHeading'
import WidgetTitleIcon from '../WidgetTitleIcon'
import WidgetTitleNavigation from '../WidgetTitleNavigation'
import clipBoardIcon from '../../../img/clipboard-icon.png'

export default function TasksWidgetTitle({ fullScreen }) {
  return (
    <WidgetTitle className='tasks-widget-title'>
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
  )
}
