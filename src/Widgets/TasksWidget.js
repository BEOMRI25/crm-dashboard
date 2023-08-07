import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle/WidgetTitle'
import './TasksWidget.css'
import WidgetTitleHeading from '../Components/WidgetTitle/WidgetTitleHeading'
import WidgetTitleActions from '../Components/WidgetTitle/WidgetTitleActions'
import Button from '../Components/Button'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitle/WidgetTitleNavigation'
import BackButton from '../Components/BackButton'
import WidgetTitleIcon from '../Components/WidgetTitle/WidgetTitleIcon'
import clipBoardIcon from '../img/clipboard-icon.png'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContent/WidgetContentNavigation'
import Tabs from '../Components/Tabs'
import Tab from '../Components/Tab'
import { useMemo, useState } from 'react'
import ButtonLink from '../Components/ButtonLink'
import List from '../Components/List'
import TaskListItem from '../Components/ListItems/TaskListItem'
import { tasks as tasksData } from '../data'
import { areDatesEqual, isFutureDate, isPastDate } from '../utilities'
import TaskListHeaders from '../Components/ListHeaders/TaskListHeaders'

export default function TasksWidget({ fullScreen }) {
  const [activeTab, setActiveTab] = useState(() => {
    let initialValue = 'הכל'
    const activeTabFromStorage = sessionStorage.getItem('tasksActiveTab')
    if (activeTabFromStorage) initialValue = activeTabFromStorage
    return initialValue
  })
  const [sortedBy, setSortedBy] = useState('type')
  const [tasks, setTasks] = useState(tasksData)
  const allTasks = useMemo(() => {
    return [...tasks.filter(task => task.dateTime !== null && task.dateTime < new Date()).sort((a, b) => a.dateTime - b.dateTime), ...tasks.filter(task => task.dateTime === null), ...tasks.filter(task => task.dateTime !== null && task.dateTime > new Date()).sort((a, b) => a.dateTime - b.dateTime)]
  }, [tasks])
  const todayTasks = useMemo(() => {
    return tasks.filter(task => areDatesEqual(task.dateTime, new Date())).sort((a, b) => a.dateTime - b.dateTime)
  }, [tasks])
  const futureTasks = useMemo(() => {
    return tasks.filter(task => isFutureDate(task.dateTime)).sort((a, b) => a.dateTime - b.dateTime)
  }, [tasks])
  const pastTasks = useMemo(() => {
    return tasks.filter(task => isPastDate(task.dateTime)).sort((a, b) => a.dateTime - b.dateTime)
  }, [tasks])
  const tabs = [
    { id: 1, title: 'הכל', badge: { count: allTasks.length } },
    { id: 2, title: 'היום', badge: { count: todayTasks.length, semantic: 'success' } },
    { id: 3, title: 'עתידיות', badge: { count: futureTasks.length } },
    { id: 4, title: 'פג תוקף', badge: { count: pastTasks.length, semantic: 'danger' } },
  ]
  const tasksToDisplay = useMemo(() => {
    let returnValue = []
    switch (activeTab) {
      case 'הכל':
        returnValue = allTasks
        break
      case 'היום':
        returnValue = todayTasks
        break
      case 'עתידיות':
        returnValue = futureTasks
        break
      case 'פג תוקף':
        returnValue = pastTasks
        break
    }
    if (sortedBy) {
      returnValue.sort((a, b) => a[sortedBy].localeCompare(b[sortedBy]))
    }
    return returnValue
  }, [tasks, sortedBy, activeTab])
  function quickTaskCreation(e) {
    e.currentTarget.disabled = true
  }
  function taskCreation() {
    console.log('task creation')
  }
  const handleAddTaskButton = fullScreen ? taskCreation : quickTaskCreation
  return (
    <Widget id={`tasks${fullScreen ? '-full-screen' : ''}`}>
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
          <Button level='primary' icon='plus' onClick={handleAddTaskButton} />
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
        {fullScreen && <TaskListHeaders />}
        <List>
          {tasksToDisplay.map(task => {
            return <TaskListItem key={task.id} task={task} fullScreen={fullScreen} />
          })}
        </List>
      </WidgetContent>
    </Widget>
  )
}
