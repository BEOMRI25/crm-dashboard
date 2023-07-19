import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import WidgetTitleIcon from '../Components/WidgetTitleIcon'
import './LeadsWidget.css'
import moneySackIcon from '../img/money-sack-icon.png'

export default function LeadsWidget() {
  return (
    <Widget id='leads'>
      <WidgetTitle>
        <WidgetTitleHeading heading='לידים לטיפול' />
        <WidgetTitleIcon icon={moneySackIcon} />
      </WidgetTitle>
    </Widget>
  )
}
