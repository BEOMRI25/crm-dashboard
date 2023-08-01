import { useState } from 'react'
import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContent/WidgetContentNavigation'
import Tabs from '../Components/Tabs'
import Tab from '../Components/Tab'

export default function StatsWidget() {
  const tabs = [
    { id: 1, title: 'סה״כ הכנסות' },
    { id: 2, title: 'ממוצע לקוח' },
    { id: 3, title: 'ממוצע יומי' },
  ]
  const [activeTab, setActiveTab] = useState(tabs[0].title)
  return (
    <Widget id='stats'>
      <WidgetContent>
        <WidgetContentNavigation>
          <Tabs>
            {tabs.map(tab => {
              return <Tab key={tab.id} title={tab.title} active={tab.title === activeTab} onClick={() => setActiveTab(tab.title)} />
            })}
          </Tabs>
        </WidgetContentNavigation>
      </WidgetContent>
    </Widget>
  )
}
