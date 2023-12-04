import { useState } from "react";
import { useTodo } from "../contexts/TodosProvider"
import TodoItem from "./TodoItem"
import TodosActivity from "./TodosActivity"


function TodoList() {

  const{todos} = useTodo();
  const [filter, setFilter] = useState('ALL');

  const filteredTodos = todos.filter(todo => {
    if (filter === 'ALL') return true;
    if (filter === 'ACTIVE') return !todo.isComplete;
    if (filter === 'COMPLETED') return todo.isComplete;
  });

  return (
    <div className="mt-6 shadow-xl shadow-black/10">
      <ul>
        {filteredTodos.map((todo)=>(
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>   
        {todos.length > 0 && <TodosActivity setFilter={setFilter} filter={filter} />}
    </div>
  )
}

export default TodoList