import ButtonIcon from '../button-icons/ButtonIcon'
import './Button.css'

export default function Button({ level, icon, isDisabled }) {
  return (
    <button className={`button ${level}`} disabled={isDisabled}>
      <ButtonIcon iconName={icon} />
    </button>
  )
}
