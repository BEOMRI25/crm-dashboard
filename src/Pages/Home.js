import CalendarWidget from "../Widgets/CalendarWidget"
import ClockWidget from "../Widgets/ClockWidget"
import InspirationWidget from "../Widgets/InspirationWidget"
import LeadsWidget from "../Widgets/LeadsWidget"
import RecentsWidget from "../Widgets/RecentsWidget"
import StatsWidget from "../Widgets/StatsWidget"
import TasksWidget from "../Widgets/TasksWidget"

export default function Home() {
    return (
        <>
            <StatsWidget />
            <LeadsWidget />
            <RecentsWidget />
            <CalendarWidget />
            <TasksWidget />
            <InspirationWidget />
            <ClockWidget />
        </>
    )
}