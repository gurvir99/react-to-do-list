import React from 'react'

export default function TodoCard(props) {

    const {children, handleDeleteTask, index, handleEditTask} = props

    return (
       <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {handleEditTask(index)}}>
                    <i className="fa-solid fa-file-pen"></i>
               </button>
               <button onClick={() => {handleDeleteTask(index)}}>
                    <i className="fa-solid fa-xmark"></i>
               </button>
            </div>
        </li>
    )
}
