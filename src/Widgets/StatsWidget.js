import Tab from '../Components/Tab'
import Tabs from '../Components/Tabs'
import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContentNavigation'

export default function StatsWidget() {
  return (
    <Widget id='stats'>
      <WidgetContent>
        <WidgetContentNavigation>
          <Tabs>
            <Tab title='סה"כ מכירות' active={true}>
              <span>12,345.67 ₪</span>
            </Tab>
            <Tab title='ממוצע לקוח' active={false}>
              <span>12,345.67 ₪</span>
            </Tab>
            <Tab title='ממוצע יומי' active={false}>
              <span>12,345.67 ₪</span>
            </Tab>
          </Tabs>
        </WidgetContentNavigation>
      </WidgetContent>
    </Widget>
  )
}
