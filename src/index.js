import ReactDOM from 'react-dom/client'
import  {useState, useCallback, } from 'react'
import {useEffect} from 'react'
import { useRef } from 'react'
import Todo from './todo/todo'
import './pages/App.css'
















function TodoAppV2() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  const  [input, setInput] =  useState("")

  

  const handleI = (e)=>{
    setInput(e.target.value)
   document.getElementById('add').removeAttribute('disabled')
   document.getElementById('add').style.cursor = "pointer" 
   

  }

  const handlekeydown = (e) => {
    if(e.key === "Enter"){
     
      addTodo()
    }else if(e.key === "Delete"){
      console.log('Project by Andeson Robinson: WARNING')
    }
  }

  const handeleCheck =  (e)=>{
    if(e.target.checked){
      var parent = e.target.parentElement
        deleteElem()
        
        setCount((count) => count + 1)
        todos.slice(todos.length)

     var aud = document.getElementById('aud')
     aud.play()

        
      
    }

   


    
 
  

    function deleteElem() {
      setTimeout(() => {
        parent.style.transform = 'scale(0)'
        setTimeout(() => {
          parent.remove()
        }, 600)

      }, 500)
    }
  }

  

  

const disabled = ()=>{
  
  if(input === "" || input === " "){
    setTimeout(() => {
      document.getElementById('add').setAttribute('disabled','true')
   document.getElementById('add').style.cursor = "not-allowed" 

    }, 400);

  }
}


disabled()


 

 

  


  

   const inputdome = <input type='text' value={input} placeholder='Add a task' onChange={handleI} onKeyDown={handlekeydown} id='input'/>
   const checkBox = <input type='checkbox'  onChange={handeleCheck} id='check'/>
  

 

 


  const addTodo = useCallback(()=>{

   const err = ()=>{
   
    if((input.length <= 200) && (input !== "")){
  
     setTimeout(() => {
      var todoInfo = document.getElementsByClassName('todo-info');
       
       for(var i=0; i<todoInfo.length; i++){
        todoInfo[i].style.transform = "scale(1)"
       }

       
     }, 100);

     

      setTodos((t)=> [...t, input])
      var todoControl = document.getElementById('todo-control')
      const scroll = ()=>{
      setTimeout(() => {
        todoControl.lastChild.scrollIntoView({
          behavior:'smooth',
          start: 'start'
        })
        
      }, 100);
      }
      scroll()
     
    return true

    }else{
      
      return false
    }

  }
  err() === true? document.getElementById('error').innerHTML = "" : err()

  
    
    setInput("")
    


  }, [todos.slice(1)]);



  
  
    
  
  const rm = (e)=>{
    
    var parent = e.target.parentElement
    
    setTimeout(() => {
      parent.style.transform = 'scale(0)'
      setTimeout(() => {
        
        parent.remove()
      }, 600)

    }, 400)
   
  

  }

  const rma = ()=>{
    var todoControl = document.getElementById('todo-control')

    if(todos.length <= 0){
      console.log('please')

    }else{
      removeAll()

    }


  }
  const removeTodo = useCallback(()=>{

    setTodos((t)=>t.slice(1))
  }, [todos]);

  
  
  const removeAll = useCallback(()=>{
    setTodos((t)=>t.slice(todos.length))
    

    
  }, [todos]);






  return(
    <>
      <Todo todos ={todos} addTodo={addTodo} removeTodo ={rm} inputdome={inputdome} removeAll={rma} checkBox={checkBox}  count = {count}/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<TodoAppV2/>  );


