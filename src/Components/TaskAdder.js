import { useState } from "react"

export default function TaskAdder(props) {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [task, setTask] = useState("")

    const addToDo = () => {
        props.addToDoChild(hour, minute, task)
        setHour(0)
        setMinute(0)
        setTask("")
    }

    return (
        <div className="container-taskadder">
            <p>Hour</p>
            <p>Minute</p>
            <p>Task</p>
            <input type="number" value={hour} onChange={(e) => setHour(e.target.value)} />
            <input type="number" value={minute} onChange={(e) => setMinute(e.target.value)} />
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addToDo}>+</button>
        </div>
    )
}