import ExcelIcon from './ExcelIcon'
import PlusIcon from './PlusIcon'
import './ButtonIcon.css'
import ExpandIcon from './ExpandIcon'

function getIconComponent(iconName) {
  switch (iconName) {
    case 'plus':
      return <PlusIcon />
    case 'excel':
      return <ExcelIcon />
    case 'expand':
      return <ExpandIcon />
  }
}

export default function ButtonIcon({ iconName }) {
  const icon = getIconComponent(iconName)
  return <>{icon}</>
}
