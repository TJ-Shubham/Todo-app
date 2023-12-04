

export default function reducer(state, action){
    console.log("Action type:", action.type)

    switch(action.type){

        case "ADD":
            if(!action.payload.todoTask) return state;
            return[
                ...state,
                {
                    id:action.payload.id,
                    todoTask: action.payload.todoTask,
                    isComplete:action.payload.isComplete,
                }
            ]

        case "UPDATE":
            if(!action.payload.todoTask) return state;
            return state.map((todo)=> todo.id === action.payload.id ? {...todo, todoTask:action.payload.todoTask}:todo);

        case "DELETE":
            return state.filter((todo)=> todo.id !== action.payload.id)

        case "TOGGLE":
            return state.map((todo)=> todo.id === action.payload.id ? {...todo, isComplete: !todo.isComplete} : todo);

        case "ALLDELETED":
            return state.filter((todo)=> !todo.isComplete);
          
        default:
            throw new Error(`Unkown action happened ${action.type}`);
    }
}

