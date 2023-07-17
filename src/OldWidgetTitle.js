import clipBoardIcon from './img/Icon.png'
import Button from './Components/Button'
import BackButton from './BackButton'
import SearchField from './SearchField'
import { useContext } from 'react'
import { WidgetSizeContext, widgetSizeDispatchContext } from './OldWidget'

export default function OldWidgetTitle() {
  const widgetSize = useContext(WidgetSizeContext)
  const dispatch = useContext(widgetSizeDispatchContext)
  return (
    <div className='widget-title' data-expanded={widgetSize === 'large'}>
      {widgetSize === 'large' && (
        <div className='navigation'>
          <BackButton onClick={() => dispatch({ type: 'shrink' })} />
        </div>
      )}
      <span>משימות</span>
      <div className='actions'>
        {widgetSize === 'large' && (
          <>
            <SearchField />
            <Button level='secondary' icon='excel' />
          </>
        )}
        <Button level='primary' icon='plus' />
      </div>
      {widgetSize === 'small' && <img src={clipBoardIcon} alt='' />}
    </div>
  )
}
