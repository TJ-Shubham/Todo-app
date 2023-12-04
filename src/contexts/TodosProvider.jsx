import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../hooks/TodosReducer";

function initialState() {
  const localData = localStorage.getItem('todos');
  return localData ? JSON.parse(localData) : [];
}


const TodosContext = createContext();

function TodosProvider({children}){

    const [todos, dispatch] = useReducer(reducer, [], initialState);
    
    useEffect(function() {
        localStorage.setItem('todos', JSON.stringify(todos));
      }, [todos]);
    

    return(
        <TodosContext.Provider value={{todos, dispatch}} >
            {children}
        </TodosContext.Provider>
    )

}

function useTodo(){
    const context = useContext(TodosContext);
    if(context === undefined) throw new Error("TodoContext was used outside of the TodoProvider")
    return context;
}

export{TodosProvider, useTodo};
