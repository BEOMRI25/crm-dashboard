import Glow from './Glow'
import './Widget.css'

export default function Widget({ children, id }) {
  return (
    <div className='widget' id={id}>
      <Glow />
      {children}
    </div>
  )
}
