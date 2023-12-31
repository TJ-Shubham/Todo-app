import { useTodo } from "../contexts/TodosProvider"


function TodosActivity({ setFilter, filter }) {

  const{todos, dispatch} = useTodo();
  const activeTodos = todos.filter(todo => !todo.isComplete);

  function cearAllTodo(){
    dispatch({
      type:"ALLDELETED"
    })
  }

  return (
    <div className="grid gap-4 md:gap-0 md:grid-cols-6 ">
      <div className="flex items-center justify-between py-4 px-4 text-sm bg-light-gray text-light-dark-blue rounded-b-md md:rounded-bl-lg dark:bg-dark-saturated-blue md:col-span-1" >
        <p>{activeTodos.length} items left</p>
        <button className="md:hidden" onClick={cearAllTodo} >Clear Completed</button>
      </div>
      <div className="flex items-center justify-around py-4  px-4 bg-light-gray text-light-dark-blue rounded-md md:rounded-none dark:bg-dark-saturated-blue md:col-start-2 md:col-end-7 md:rounded-br-lg">
        <button className={`text-brigh-blue font-bold md:hover:text-light-dark-graylish-blue dark:md:hover:text-light-dark-graylish-blue ${filter === 'ALL' ? 'text-bright-blue' : ''}`} onClick={() => setFilter('ALL')}>All</button>
        <button className={`text-brigh-blue font-bold md:hover:text-light-dark-graylish-blue dark:md:hover:text-light-dark-graylish-blue ${filter === 'ACTIVE' ? 'text-bright-blue' : ''}`} onClick={() => setFilter('ACTIVE')} >Active</button>
        <button className={`text-brigh-blue font-bold md:hover:text-light-dark-graylish-blue dark:md:hover:text-light-dark-graylish-blue ${filter === 'COMPLETED' ? 'text-bright-blue' : ''}`} onClick={() => setFilter('COMPLETED')} >Completed</button>
        <button className="hidden md:inline-block md:hover:text-light-dark-graylish-blue dark:md:hover:text-light-dark-graylish-blue" onClick={cearAllTodo} >Clear Completed</button>
      </div>   
    </div>
  )
}

export default TodosActivity