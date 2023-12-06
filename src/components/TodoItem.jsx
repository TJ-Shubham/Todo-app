import { useTodo } from "../contexts/TodosProvider"
import crossIcon from "/icon-cross.svg"
import checkIcon from "/icon-check.svg"
import { useState } from "react";
import UpdateTodo from "./UpdateTodo";

function TodoItem({todo}) {
  const {dispatch} = useTodo();
  const [isEditing, setIsEditing] = useState(false);

  function handleToggleComplete(){
    dispatch({
      type:"TOGGLE",
      payload:{id:todo.id},
    })
  }

  function handleRemove(){
    dispatch({
      type:"DELETE",
      payload:{id:todo.id},
    })
  }

  function handleUpdate(newTask) {
    dispatch({
      type: "UPDATE",
      payload: {id: todo.id, todoTask: newTask},
    })
    setIsEditing(prevIsEditing => !prevIsEditing)
  }

  function handleEditStart() {
    setIsEditing(prevIsEditing => !prevIsEditing)
  }
  
  return (
    <li className="w-full flex items-center justify-between bg-light-gray p-3 px-5 border-b border-b-light-graylish-blue  dark:border-dark-graylish-blue-third dark:bg-dark-saturated-blue" >
      <div className="w-full flex items-center gap-2" >
        <button
          type="button"
          onClick={handleToggleComplete} 
          className={`flex items-center justify-center aspect-square h-5 rounded-full border border-light-graylish-blue hover:border-bright-blue dark:hover:border-bright-blue dark:border-dark-graylish-blue-fourth md:h-6 ${todo.isComplete ? 'bg-button-gradient' : ''}` } >
            {todo.isComplete &&  <img src={checkIcon} alt="check"  className="h-2" />}
        </button>   
        {!todo.isComplete && isEditing && <UpdateTodo onEdit={handleUpdate}>{todo.todoTask}</UpdateTodo>}
        {!todo.isComplete && !isEditing && <span onClick={handleEditStart} className="cursor-pointer text-light-dark-graylish-blue dark:text-gray-300" >{todo.todoTask}</span>}
        {todo.isComplete && <p className={`text-light-dark-graylish-blue dark:text-gray-300 md:text-lg cursor-pointer ${todo.isComplete && 'text-light-graylish-blue line-through dark:text-dark-graylish-blue-secondary'}`}>{todo.todoTask}</p>}
      </div>    
      {!todo.isComplete && (
        <button onClick={handleRemove}>
          <img src={crossIcon} alt="cross icon" />
        </button>
      )}
    </li>
    
  )
}

export default TodoItem