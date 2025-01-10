import { useEffect, useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";


function Home() {

  //using useState function
  const [tasks, setTasks] = useState([])
  const [taskValue, setTaskValue] = useState('')

  function persistData(newList){
    localStorage.setItem('tasks', JSON.stringify({tasks: newList}))
  }

  //add new task and update tasks
  function handleAddTasks(newTask){
    const newTasks = [...tasks, newTask]
    persistData(newTasks)
    setTasks(newTasks)
  }

  function handleDeleteTask(index){

    //keep elements/tasks in tast array that have different index
    const newTasks = tasks.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newTasks)
    setTasks(newTasks)
  }

  function handleEditTask(index){
    const valueToBeEdited = tasks[index]
    setTaskValue(valueToBeEdited)
    handleDeleteTask(index)
  }

  //store data into local storage
  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTasks = localStorage.getItem('tasks')
    if(!localTasks){
      return
    }

    localTasks = JSON.parse(localTasks).tasks
    setTasks(localTasks)
  }, [])

  return (
    <main>
      <h1 className="main_title">My Agenda</h1>
      <TodoInput taskValue={taskValue} setTaskValue={setTaskValue} handleAddTasks={handleAddTasks}/>
      <TodoList handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} tasks={tasks}/>
    </main>
  )
}

export default Home;
