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
import WidgetContent from '../Components/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContentNavigation'
import Tabs from '../Components/Tabs'
import Tab from '../Components/Tab'
import { useState } from 'react'

export default function TasksWidget({ fullScreen }) {
  const tabs = [
    { id: 1, title: 'הכל', badge: { count: 7 } },
    { id: 2, title: 'היום', badge: { count: 3, semantic: 'success' } },
    { id: 3, title: 'עתידיות', badge: { count: 2 } },
    { id: 4, title: 'פג תוקף', badge: { count: 1, semantic: 'danger' } },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].title)
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
      <WidgetContent>
        <WidgetContentNavigation>
          <Tabs>
            {tabs.map(tab => {
              return <Tab key={tab.id} title={tab.title} badge={tab.badge} active={tab.title === activeTab} onClick={() => setActiveTab(tab.title)} />
            })}
          </Tabs>
        </WidgetContentNavigation>
        <Link to='/tasks'>Go To Tasks</Link>
        <Link to='/'>Go Home</Link>
      </WidgetContent>
    </Widget>
  )
}
