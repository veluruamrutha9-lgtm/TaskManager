import React from 'react'
import "./App.css"
import Taskform from "./Components/Taskform"
import Tasklist from "./Components/Tasklist"
import Progresstracker from "./Components/Progresstracker"
import { useEffect, useState } from "react"

export default function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });
    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const updateTask = (updatedTask, index) => {
      const newtask = [...tasks];
      newtask[index] = updatedTask;
      setTasks(newtask);
    }
    const deleteTask = (index) => {
      setTasks(tasks.filter((_, i) => i != index))
    }

    const clearTasks = () => {
      setTasks([]);
    }
  return (
    <div>
      <h1>TaskMan</h1>
      <p><i>Friendly Task Manager</i></p>
      <Taskform addTask = {addTask}/>
      <Tasklist tasks = {tasks}
      updateTask = {updateTask}
      deleteTask = {deleteTask}/>
      <Progresstracker tasks = {tasks}/>

      {tasks.length>0 && (<button className='clear-btn'
      onClick={clearTasks}>Clear All Tasks</button>)}
    </div>
  )
}