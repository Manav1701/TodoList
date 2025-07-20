import Style from "./Style.css";
import {useState} from 'react';
import add from './add.png'
import Edit from './Edit.svg' 

const TodoList = () =>{
  const [todoList,setTodoList] = useState([])

  const TodoRun = (event) =>{
    
    let toname = event.target.toname.value;

    if(!todoList.includes(toname)){
     setTodoList([...todoList,toname])
    }

    else {alert("Todo Already Available");}

    event.preventDefault();
  }
  return(
    <>
     <form onSubmit={TodoRun} className="form">
       <input type="text" name="toname"/>
       <button>Add</button>
     </form>
     <div className="outerDiv">
       <ul>
        <TodoListItem/>
       </ul>
     </div>
    </>
  )
}

export default TodoList; 

function TodoListItem()
{
  return(
    <>
      <li>HTML <span>&times;</span></li>
    </>
  )
}