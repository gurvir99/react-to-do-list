import React from 'react'

export default function TodoCard(props) {
    const {children} = props
    return (
       <li className='todoItem'>
            {children}
            <div className='actionsContainer'>
               <i className="fa-solid fa-file-pen"></i>
               <i className="fa-solid fa-xmark"></i>
            </div>
        </li>
    )
}
