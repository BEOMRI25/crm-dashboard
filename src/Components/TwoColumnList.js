import './List.css'
import './TwoColumnList.css'

export default function TwoColumnList({ children }) {
  return <ul className='list two-columns'>{children}</ul>
}
