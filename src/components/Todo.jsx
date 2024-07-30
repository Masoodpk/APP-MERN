import React, { useState } from 'react'
import "./Todo.css"
function Todo() {
    const [input,setInput] = useState('');
    console.log(input, "input");
  return ( 
    <div className='container'>
        <div className='app-text'>
    <h1>TODO-APP</h1>
    <div className='list-todo'>
    <h2>List of todos</h2>
    <input value={input} onChange={(e)=>setInput(e.target.value)} type="text" role="input"></input>
    <button type='submit'>Add</button>
    </div>
   

  


</div>
    </div>
  )
}

export default Todo