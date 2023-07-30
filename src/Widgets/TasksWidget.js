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
import { tasks } from '../data'
import { areDatesEqual, isFutureDate, isPastDate } from '../utilities'

export default function TasksWidget({ fullScreen }) {
  const [activeTab, setActiveTab] = useState(() => {
    let initialValue = 'הכל'
    const activeTabFromStorage = sessionStorage.getItem('tasksActiveTab')
    if (activeTabFromStorage) initialValue = activeTabFromStorage
    return initialValue
  })
  const allTasks = [...tasks.filter(task => task.dateTime !== null && task.dateTime < new Date()).sort((a, b) => a.dateTime - b.dateTime), ...tasks.filter(task => task.dateTime === null), ...tasks.filter(task => task.dateTime !== null && task.dateTime > new Date()).sort((a, b) => a.dateTime - b.dateTime)]
  const todayTasks = tasks.filter(task => areDatesEqual(task.dateTime, new Date())).sort((a, b) => a.dateTime - b.dateTime)
  const futureTasks = tasks.filter(task => isFutureDate(task.dateTime)).sort((a, b) => a.dateTime - b.dateTime)
  const pastTasks = tasks.filter(task => isPastDate(task.dateTime)).sort((a, b) => a.dateTime - b.dateTime)
  const tabs = [
    { id: 1, title: 'הכל', badge: { count: allTasks.length } },
    { id: 2, title: 'היום', badge: { count: todayTasks.length, semantic: 'success' } },
    { id: 3, title: 'עתידיות', badge: { count: futureTasks.length } },
    { id: 4, title: 'פג תוקף', badge: { count: pastTasks.length, semantic: 'danger' } },
  ]
  let tasksToDisplay = []
  switch (activeTab) {
    case 'הכל':
      tasksToDisplay = allTasks
      break
    case 'היום':
      tasksToDisplay = todayTasks
      break
    case 'עתידיות':
      tasksToDisplay = futureTasks
      break
    case 'פג תוקף':
      tasksToDisplay = pastTasks
      break
  }
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
              return (
                <Tab
                  key={tab.id}
                  title={tab.title}
                  badge={tab.badge}
                  active={tab.title === activeTab}
                  onClick={() => {
                    setActiveTab(tab.title)
                    sessionStorage.setItem('tasksActiveTab', tab.title)
                  }}
                />
              )
            })}
          </Tabs>
          {!fullScreen && <ButtonLink level='secondary' icon='expand' to='/tasks' />}
        </WidgetContentNavigation>
        <List>
          {tasksToDisplay.map(task => {
            return <TaskListItem key={task.id} task={task} />
          })}
        </List>
      </WidgetContent>
    </Widget>
  )
}
