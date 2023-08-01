import { getTypeSubclass } from '../../utilities'
import './tag.css'
import './TypeTag.css'

export default function TypeTag({ type }) {
  return <div className={`tag type ${getTypeSubclass(type)}`}>{type}</div>
}
