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
import ButtonLink from '../Components/ButtonLink'
import List from '../Components/List'
import TaskListItem from '../Components/ListItems/TaskListItem'

export default function TasksWidget({ fullScreen }) {
  const tabs = [
    { id: 1, title: 'הכל', badge: { count: 7 } },
    { id: 2, title: 'היום', badge: { count: 3, semantic: 'success' } },
    { id: 3, title: 'עתידיות', badge: { count: 2 } },
    { id: 4, title: 'פג תוקף', badge: { count: 1, semantic: 'danger' } },
  ]
  const tasks = [
    {
      id: 1,
      type: 'שיחה',
      description: 'להתקשר ללקוחות שהשאירו פרטים',
      dateTime: new Date(2023, 6, 24),
      displayTime: false,
      assignedUser: 'אני',
      customer: 'שירי מזור',
      product: 'סימפלאן מערכת מלאה - מנוי חודשי',
      comment: 'הערה חשובה מאוד',
    },
    {
      id: 2,
      type: 'כללי',
      description: 'לכתוב תסריט לארבעה סרטונים חדשים',
      dateTime: new Date(2023, 6, 27),
      displayTime: false,
      assignedUser: 'אוראל ספיר',
      customer: null,
      product: 'מוצרי עבר CEO',
      comment: 'לשאול רשימת שאלות',
    },
    {
      id: 3,
      type: 'פיננסי',
      description: 'להעביר את התשלום לצוות הפיתוח',
      dateTime: new Date(2023, 6, 21, 8, 0),
      displayTime: true,
      assignedUser: 'אני',
      customer: 'הדר כץ',
      product: null,
      comment: null,
    },
    {
      id: 4,
      type: 'פגישה',
      description: 'לקבוע פגישה עם אוראל ספיר',
      dateTime: new Date(2023, 6, 26, 20, 0),
      displayTime: true,
      assignedUser: 'אני',
      customer: 'ירדן סמואלוב',
      product: null,
      comment: 'לא לשכוח לקחת מסמכים',
    },
    {
      id: 5,
      type: 'כללי',
      description: 'לכתוב את הבריף לפגישה של יום חמישי',
      dateTime: null,
      displayTime: false,
      assignedUser: 'עמרי ברגמן',
      customer: null,
      product: 'מוצרי עבר CEO',
      comment: 'הערה חשובה מאוד',
    },
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
          {!fullScreen && <ButtonLink level='secondary' icon='expand' to='/tasks' />}
        </WidgetContentNavigation>
        <List>
          {tasks.map(task => {
            return <TaskListItem key={task.id} task={task} />
          })}
        </List>
      </WidgetContent>
    </Widget>
  )
}
