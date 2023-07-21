import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContentNavigation'

export default function StatsWidget() {
  return (
    <Widget id='stats'>
      <WidgetContent>
        <WidgetContentNavigation />
      </WidgetContent>
    </Widget>
  )
}
