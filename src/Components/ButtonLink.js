import { Link } from 'react-router-dom'
import ButtonIcon from '../button-icons/ButtonIcon'
import './Button.css'

export default function ButtonLink({ level, icon, isDisabled, to }) {
  return (
    <Link className={`button ${level}`} disabled={isDisabled} to={to}>
      <ButtonIcon iconName={icon} />
    </Link>
  )
}
