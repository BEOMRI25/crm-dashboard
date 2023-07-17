import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import './LeadsWidget.css'

export default function LeadsWidget() {
  return (
    <Widget id='leads'>
      <WidgetTitle>
        <WidgetTitleHeading heading='לידים לטיפול' />
      </WidgetTitle>
    </Widget>
  )
}
