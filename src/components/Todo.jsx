import React from 'react'
import "./Todo.css"
function Todo() {
  return ( 
    <div className='container'>
        <div className='app-text'>
    <h1>TODO-APP</h1>
    <div className='list-todo'>
    <h2>List of todos</h2>
    <input value="" type="text" role="input"></input>
    <button type='submit'>Add</button>
    </div>
   

  


</div>
    </div>
  )
}

export default Todo