import { Link } from 'react-router-dom'
import Widget from '../Components/Widget'
import WidgetTitle from '../Components/WidgetTitle'
import './TasksWidget.css'
import WidgetTitleHeading from '../Components/WidgetTitleHeading'
import WidgetTitleActions from '../Components/WidgetTitleActions'
import Button from '../Components/Button'
import SearchField from '../Components/SearchField'
import WidgetTitleNavigation from '../Components/WidgetTitleNavigation'
import BackButton from '../Components/BackButton'
import WidgetTitleIcon from '../Components/WidgetTitleIcon'
import clipBoardIcon from '../img/clipboard-icon.png'
import WidgetContent from '../Components/WidgetContent'
import WidgetContentNavigation from '../Components/WidgetContentNavigation'
import Tabs from '../Components/Tabs'
import Tab from '../Components/Tab'
import { useState } from 'react'

export default function TasksWidget({ fullScreen }) {
  return (
    <Widget id='tasks'>
      <WidgetTitle>
        {fullScreen && (
          <WidgetTitleNavigation>
            <BackButton />
          </WidgetTitleNavigation>
        )}
        <WidgetTitleHeading heading='משימות' />
        <WidgetTitleActions>
          {fullScreen && <SearchField />}
          {fullScreen && <Button level='secondary' icon='excel' />}
          <Button level='primary' icon='plus' />
        </WidgetTitleActions>
        {!fullScreen && <WidgetTitleIcon icon={clipBoardIcon} />}
      </WidgetTitle>
      <WidgetContent>
        <WidgetContentNavigation>
          <Tabs>
            <Tab title='הכל' active={true} />
            <Tab title='היום' active={false} />
            <Tab title='עתידיות' active={false} />
            <Tab title='פג תוקף' active={false} />
          </Tabs>
        </WidgetContentNavigation>
        <Link to='/tasks'>Go To Tasks</Link>
        <Link to='/'>Go Home</Link>
      </WidgetContent>
    </Widget>
  )
}
