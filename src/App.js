import { Route, Routes } from 'react-router-dom'
import WidgetContainer from './Components/WidgetContainer'
import HomePage from './Pages/HomePage'
import TasksPage from './Pages/TasksPage'
import CalendarPage from './Pages/CalendarPage'
import CustomerPage from './Pages/CustomerPage'
import ProductPage from './Pages/ProductPage'

export default function App() {
  return (
    <WidgetContainer>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tasks' element={<TasksPage />} />
        <Route path='/calendar' element={<CalendarPage />} />
        <Route path='/customer' element={<CustomerPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Routes>
    </WidgetContainer>
  )
}
