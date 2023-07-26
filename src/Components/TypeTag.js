import { getTypeSubclass } from '../utilities'
import './TypeTag.css'

export default function TypeTag({ type }) {
  return <div className={`type-tag ${getTypeSubclass(type)}`}>{type}</div>
}
