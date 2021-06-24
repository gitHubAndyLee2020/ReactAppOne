import './App.css'
import Header from './Components/Header'
import TaskAdder from './Components/TaskAdder'
import { useState, useEffect } from "react"
import Display from "./Components/Display"

function App() {
  const [ToDo, setToDo] = useState({ToDoKey: []})

  useEffect(() => {
    fetch("http://localhost:3000/ToDoDataBase").then((response) => response.json()).then((data) => setToDo({ToDoKey:data}))
  }, [])


  //adds to-do item to the database
  const addToDoApp = (hourChild, minuteChild, taskChild) => {
    let tempToDo = {hour:hourChild,minute:minuteChild,task:taskChild}
    let tempToDoKey = ToDo.ToDoKey
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
      },
      body: JSON.stringify(tempToDo)
    }
    fetch("http://localhost:3000/ToDoDataBase", requestOption).then((response) => response.json()).then((data) => {
      tempToDoKey.push(data)
      setToDo({ToDoKey:tempToDoKey})
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
        <Display items={ToDo.ToDoKey}></Display>
        <TaskAdder addToDoChild={addToDoApp}></TaskAdder>
      </header>
    </div>
  )
}

export default App
