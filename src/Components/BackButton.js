import { useNavigate } from 'react-router-dom'
import './BackButton.css'

export default function BackButton() {
  const navigate = useNavigate()
  function handleClick() {
    navigate(-1)
  }
  return (
    <button className='back-button' onClick={handleClick}>
      <svg viewBox='0 0 12 12' fill='none'>
        <path d='M4.88779 0.739121C4.49726 0.348597 3.8641 0.348597 3.47357 0.739121L2.14421 2.06848C1.75369 2.45901 1.75369 3.09217 2.14421 3.4827L4.66151 6L2.14421 8.5173C1.75369 8.90782 1.75369 9.54099 2.14421 9.93151L3.47357 11.2609C3.8641 11.6514 4.49726 11.6514 4.88779 11.2609L10.1487 6L4.88779 0.739121Z' fill='currentColor' />
      </svg>
      חזרה
    </button>
  )
}
