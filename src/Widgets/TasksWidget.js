import Widget from '../Components/Widget'
import './TasksWidget.css'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContent/WidgetContentNavigation'
import { useMemo, useState } from 'react'
import ButtonLink from '../Components/ButtonLink'
import { tasks as tasksData } from '../data'
import { areDatesEqual, isFutureDate, isPastDate, sortBy } from '../utilities'
import TaskListHeaders from '../Components/ListHeaders/TaskListHeaders'
import TasksTabs from '../Components/TasksTabs'
import TasksWidgetTitle from '../Components/WidgetTitle/WidgetTitles/TasksWidgetTitle'
import TasksList from '../Components/Lists/TasksList'

export default function TasksWidget({ fullScreen }) {
  const [activeTab, setActiveTab] = useState(() => {
    let initialValue = 'הכל'
    const activeTabFromStorage = sessionStorage.getItem('tasksActiveTab')
    if (activeTabFromStorage) initialValue = activeTabFromStorage
    return initialValue
  })
  const [sortedBy, setSortedBy] = useState()
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
      returnValue.sort(sortBy(sortedBy, true))
    }
    return returnValue
  }, [tasks, sortedBy, activeTab])
  return (
    <Widget id={`tasks${fullScreen ? '-full-screen' : ''}`}>
      <TasksWidgetTitle fullScreen={fullScreen} />
      <WidgetContent>
        <WidgetContentNavigation>
          <TasksTabs tabs={tabs} setActiveTab={setActiveTab} activeTab={activeTab} />
          {!fullScreen && <ButtonLink level='secondary' icon='expand' to='/tasks' />}
        </WidgetContentNavigation>
        {fullScreen && <TaskListHeaders setSortedBy={setSortedBy} />}
        <TasksList tasksToDisplay={tasksToDisplay} fullScreen={fullScreen} />
      </WidgetContent>
    </Widget>
  )
}
