import Excel from './Excel'
import Plus from './Plus'
import './ButtonIcon.css'

function getIconComponent(iconName) {
  switch (iconName) {
    case 'plus':
      return <Plus />
    case 'excel':
      return <Excel />
  }
}

export default function ButtonIcon({ iconName }) {
  const icon = getIconComponent(iconName)
  return <>{icon}</>
}
