import Tab from './Tab'
import './Tabs.css'
export default function Tabs({ tabs, activeTab, setActiveTab }) {
  return (
    <div className='tabs'>
      {tabs.map(tab => {
        return <Tab key={tab.id} title={tab.title} active={tab.id === activeTab} onClick={() => setActiveTab(tab.id)} />
      })}
    </div>
  )
}
