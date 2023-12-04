import { useTodo } from "../contexts/TodosProvider"
import crossIcon from "/icon-cross.svg"
import checkIcon from "/icon-check.svg"

function TodoItem({todo}) {
  const {dispatch} = useTodo();

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
  
  return (
    <li className="w-full flex items-center justify-between bg-light-gray p-3 px-5 border-b border-b-light-graylish-blue dark:border-dark-graylish-blue-third" >
      <div className="w-full flex items-center gap-2" >
        <button
          type="button"
          onClick={handleToggleComplete} 
          className={`flex items-center justify-center aspect-square h-5 rounded-full border border-light-graylish-blue hover:border-bright-blue dark:border-dark-graylish-blue-fourth md:h-6 ${todo.isComplete ? 'bg-button-gradient' : ''}` } >
            {todo.isComplete &&  <img src={checkIcon} alt="check"  className="h-2" />}
          </button>   
        <p className={`text-light-dark-graylish-blue dark:text-dark-blue md:text-lg cursor-pointer ${todo.isComplete && 'text-light-graylish-blue line-through dark:text-dark-graylish-blue-secondary'}`}>{todo.todoTask}</p>
      </div>    
      <button onClick={handleRemove}>
        <img src={crossIcon} alt="cross icon" />
      </button>
    </li>
    
  )
}

export default TodoItem