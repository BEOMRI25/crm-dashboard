import Divider from '../Components/Divider'
import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent'
import WidgetTitle from '../Components/WidgetTitle'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import WidgetTitleIcon from '../Components/WidgetTitleIcon'
import megaphoneIcon from '../img/megaphone-icon.png'

export default function InspirationWidget() {
  return (
    <Widget id='inspiration'>
      <WidgetTitle>
        <WidgetTitleHeading heading='השראה יומית' />
        <WidgetTitleIcon icon={megaphoneIcon} />
      </WidgetTitle>
      <WidgetContent>
        <Divider />
      </WidgetContent>
    </Widget>
  )
}
