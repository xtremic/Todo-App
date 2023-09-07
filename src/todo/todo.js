
import {memo} from 'react'






function Todo({todos, addTodo, removeTodo, inputdome, removeAll, checkBox , count }) {
    console.log("child render")

    return(

        <>
        <h1>To-do List</h1>
        <p id='error'>Keep Task length brief</p>
        <div id='todo-btn'>
        {inputdome}
        <div id='btn-house'>
            <button onClick={addTodo} className='add' id='add' >Add</button>
            {/* <button onClick={removeAll} className='add'>Clear All</button> */}
            <span id='complete'>Completed:  {count}</span>
            <audio id='aud' >
                <source src='https://cdn.pixabay.com/audio/2021/08/09/audio_61f5e6ef48.mp3' type='audio/mpeg'/>
            </audio>

        </div>
        </div>

        <div id='todo-control'>
        {todos.map((todo,index)=>{
    
        return  <div key={index} className='todo-info' draggable>
        {checkBox} 
        <p id='word'>{todo}</p>
    <button onClick={removeTodo} id='remove-btn' className='fa fa-trash'></button>
    </div>
       
    })}
        
        </div>
       

       
        </>

    )
}




  
  
   
  


export default memo(Todo)