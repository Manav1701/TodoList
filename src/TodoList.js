import Style from "./Style.css";
import add from './add.png'
import Edit from './Edit.svg' 

const TodoList = () =>{
  const [todoList,setTodoList] = useState([])

  const TodoRun = (event) =>{
    
    let inname = event.target.inname.value;

    if(todoList.includes(inname))
     setTodoList([...todoList,inname])

    else alert("Todo Already Available")

    event.preventDefault();
  }
  return(
    <>
     <form onSubmit={TodoRun}>
       <input type="text" name="inname"/>
       <button>Add</button>
     </form>
    </>
  )
}

export default TodoList; 