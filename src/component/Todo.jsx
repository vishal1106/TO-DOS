import React, { useState } from 'react'
// import { Input,InputGroup,InputRightElement, Stack} from '@chakra-ui/react'
import styles from"./showtodo.module.css"


const Todo = () => {
 const [todos,setTodos]=useState([])
 const [newtodo,setNewtodo]=useState("")
 const [checkeds, setCheckeds] = useState([]);
 
 
 const todoinput=(e)=>{
  setNewtodo(e.target.value)
 }
 const todohandle=()=>{
  setTodos([
    ...todos,{
      id:Date.now(),value:newtodo, iscompleted:false
    }
  ])
 }
 const handleCheck=(e)=>{
   var updatedtodo=[...checkeds]
   var newupdatedtodo=[...todos]
   if(e.target.checked){
    updatedtodo=[...checkeds,e.target.value];
    newupdatedtodo.splice(todos.indexOf(e.target.value),1)
   }
   
   
   
   setCheckeds(updatedtodo);
    setTodos(newupdatedtodo)
 }
 

 { console.log("new ysss",todos)}
 
 
 
 
  return (
    <div>
    <div className={styles.todo}>
    <input type="text" placeholder='Add a to-do' onChange={todoinput} />
    <button onClick={todohandle}>Add</button>

    {  todos.map((tod) =>(
    <div className={styles.list}>
      <input value={tod.value} type="checkbox" onChange={handleCheck} />
      <span>{tod.value}</span></div>
    ))};
    <h5>SHOW COMPLETED TO-DOS</h5>
    {
      checkeds.map((el)=>{
        return <div className={styles.lists}>
            <input value={el} type="checkbox"  checked />
          
          <span><p>{el}</p></span></div>
      })
    }
    </div>
    <div>

    </div>
    </div>
  )
}

export default Todo