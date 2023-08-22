import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle/WidgetTitle'
import WidgetTitleHeading from '../Components/WidgetTitle/WidgetTitleHeading'
import WidgetTitleIcon from '../Components/WidgetTitle/WidgetTitleIcon'
import './LeadsWidget.css'
import moneySackIcon from '../img/money-sack-icon.png'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import { leads } from '../data'
import LeadsList from '../Components/Lists/LeadsList'

export default function LeadsWidget() {
  return (
    <Widget id='leads'>
      <WidgetTitle>
        <WidgetTitleHeading heading='לידים לטיפול' />
        <WidgetTitleIcon icon={moneySackIcon} />
      </WidgetTitle>
      <WidgetContent>
        <LeadsList leads={leads} />
      </WidgetContent>
    </Widget>
  )
}
