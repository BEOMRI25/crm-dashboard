import List from '../List'
import RecentViewsListItem from '../ListItems/RecentViewsListItem'

export default function RecentViewsList({ recentViews }) {
  return (
    <List>
      {recentViews.map(recentView => {
        return <RecentViewsListItem key={recentView.id} recentView={recentView} />
      })}
    </List>
  )
}
