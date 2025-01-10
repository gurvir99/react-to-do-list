import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList() {

  let tasks = [
    'Watch The Substance',
    'Clean room',
    'Study'
  ]

  return (
    <ul className='main'>
      {tasks.map((task, taskIndex) => {
        return (
          <TodoCard key={taskIndex}>
            <p>{task}</p>
          </TodoCard>
      )
      })}
    </ul>
  )
}
