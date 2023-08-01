import { Link } from 'react-router-dom'
import Button from '../Components/Button'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle/WidgetTitle'
import WidgetTitleActions from '../Components/WidgetTitle/WidgetTitleActions'
import WidgetTitleHeading from '../Components/WidgetTitle/WidgetTitleHeading'
import './CalendarWidget.css'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitle/WidgetTitleNavigation'
import calendarIcon from '../img/calendar-icon.png'
import WidgetTitleIcon from '../Components/WidgetTitle/WidgetTitleIcon'
import BackButton from '../Components/BackButton'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContent/WidgetContentNavigation'
import Tabs from '../Components/Tabs'
import Tab from '../Components/Tab'
import { useState } from 'react'
import ButtonLink from '../Components/ButtonLink'

export default function CalendarWidget({ fullScreen }) {
  const tabs = [
    { id: 1, title: 'יומי' },
    { id: 2, title: 'שבועי' },
    { id: 3, title: 'חודשי' },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].title)
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
        <WidgetContentNavigation>
          <Tabs>
            {tabs.map(tab => {
              return <Tab key={tab.id} title={tab.title} active={tab.title === activeTab} onClick={() => setActiveTab(tab.title)} />
            })}
          </Tabs>
          {!fullScreen && <ButtonLink level='secondary' icon='expand' to='/calendar' />}
        </WidgetContentNavigation>
      </WidgetContent>
    </Widget>
  )
}
