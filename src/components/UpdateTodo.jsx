import { useState } from "react";



function UpdateTodo({children, onEdit}) {

    const [editValue, setEditValue] = useState(children);

    function handleChange(e){
        setEditValue(e.target.value);
    }

    function handleKeyDown(e){
        if (e.key === 'Enter') {
            onEdit(editValue);
        }
    }

    return (
        <input 
            type="text" 
            className="w-full p-1 bg-light-gray text-light-dark-graylish-blue dark:bg-dark-saturated-blue dark:text-light-gray outline-none" 
            value={editValue} 
            onChange={handleChange} 
            onKeyDown={handleKeyDown}  
            onBlur={handleKeyDown}  // this add because we want to activate remove button again
            autoFocus 
        />
    )
}

export default UpdateTodo;