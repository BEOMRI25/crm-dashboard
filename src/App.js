import { Route, Routes } from "react-router-dom"
import WidgetContainer from "./Components/WidgetContainer"
import Home from "./Pages/Home"
import TasksWidget from "./Widgets/TasksWidget"

export default function App() {
  return (
    <WidgetContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tasks' element={<TasksWidget />} />
      </Routes>
    </WidgetContainer>
  )
}

