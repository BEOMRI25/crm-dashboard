import ButtonIcon from '../button-icons/ButtonIcon'
import './Button.css'

export default function Button({ level, icon, onClick }) {
  return (
    <button className={`button ${level}`} onClick={onClick}>
      <ButtonIcon iconName={icon} />
    </button>
  )
}
