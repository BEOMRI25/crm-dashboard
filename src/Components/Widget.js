import './Widget.css'

export default function Widget({ children, id }) {
  return (
    <div className='widget' id={id}>
      {children}
    </div>
  )
}
