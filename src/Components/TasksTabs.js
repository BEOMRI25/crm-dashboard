import Tab from './Tab'
import Tabs from './Tabs'

export default function TasksTabs({ tabs, setActiveTab, activeTab }) {
  return (
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
  )
}
