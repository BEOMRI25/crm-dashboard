import ButtonIcon from '../button-icons/ButtonIcon'
import './Button.css'

export default function Button({ level, icon }) {
  return (
    <button className={`button ${level}`}>
      <ButtonIcon iconName={icon} />
    </button>
  )
}
