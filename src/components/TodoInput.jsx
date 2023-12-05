import { useState } from "react";
import { useTodo } from "../contexts/TodosProvider"

function TodoInput() {

  const {dispatch} = useTodo();
  const[todo, setTodo] = useState("");

  function addTodo(e){
    e.preventDefault();
    dispatch({
      type:"ADD",
      payload:{id: Date.now(), todoTask:todo, isComplete:false} 
    });
    setTodo("");
  }

  return (
    <div className="pt-8">
        <form action="#" onSubmit={addTodo}>
            <label htmlFor="todo-input" className="relative">
                <span className="absolute top-1/2 left-4 aspect-square w-5 -translate-y-1/2 rounded-full border border-light-graylish-blue dark:border-dark-graylish-blue-fourth md:left-6 md:w-6"></span>
                <input 
                    type="text" 
                    id="todo-input" 
                    className="w-full p-3 rounded-md bg-light-gray pl-12 text-light-dark-graylish-blue outline-none shadow-xl shadow-black/10 placeholder:text-light-graylish-blue dark:bg-dark-saturated-blue dark:text-dark-graylish-blue dark:placeholder:text-dark-graylish-blue-third  md:p-4 md:px-16"
                    placeholder="Create a new todo..."
                    value={todo}
                    onChange={(e)=>setTodo(e.target.value)}
                />
            </label>
        </form>
    </div>
  )
}

export default TodoInput