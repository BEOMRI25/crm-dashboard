import { Link } from "react-router-dom";
import Widget from "../Components/Widget";
import WidgetTitle from "../Components/WidgetTitle";
import './TasksWidget.css'

export default function TasksWidget() {
    return (
        <Widget id='tasks'>
            <WidgetTitle title='משימות' />
            <Link to='/tasks'>Go To Tasks</Link>
            <Link to='/'>Go Home</Link>
        </Widget>
    )
}