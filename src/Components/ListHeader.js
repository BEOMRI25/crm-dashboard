import './ListHeader.css'

export default function ListHeader({ title, isSortable, onClick }) {
  return (
    <div className={`list-header ${isSortable ? 'sortable' : ''}`}>
      {isSortable && (
        <svg width='11' height='11' viewBox='0 0 11 11' fill='none'>
          <path d='M3.65723 1.24609V9.75378L0.814988 6.91155' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.65723 9.75391V1.24622L10.4995 4.08845' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )}
      <span>{title}</span>
    </div>
  )
}
