import TodoItem from "./TodoItem"
import TodosActivity from "./TodosActivity"


const todos = [
  {
    id:1,
    todoText: "Jog around the park 3x",
    isComplete:false
  },
  {
    id:2,
    todoText: "10 minutes meditation",
    isComplete:false
  },
  {
    id:3,
    todoText: "Read for 1 hour",
    isComplete:false
  },{
    id:4,
    todoText: "Pick up groceries",
    isComplete:false
  }
]

function TodoList() {
  return (
    <div className="mt-6 shadow-xl shadow-black/10">
      <ul>
        {todos.map((todo)=>(
          // console.log(todo)
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
        
        <TodosActivity />
    </div>
  )
}

export default TodoList