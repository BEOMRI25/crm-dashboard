import ListTitle from '../Components/ListTitle'
import RecentViewsList from '../Components/Lists/RecentViewsList'
import TrackedCustomerList from '../Components/Lists/TrackedCustomerList'
import Widget from '../Components/Widget'
import WidgetContent from '../Components/WidgetContent/WidgetContent'
import { recentViews, trackedCustomers } from '../data'
import './RecentsWidget.css'

export default function RecentsWidget() {
  return (
    <Widget id='recents'>
      <WidgetContent>
        <ListTitle>לקוחות במעקב</ListTitle>
        <ListTitle>צפיות אחרונות</ListTitle>
        <TrackedCustomerList trackedCustomers={trackedCustomers} />
        <RecentViewsList recentViews={recentViews} />
      </WidgetContent>
    </Widget>
  )
}
