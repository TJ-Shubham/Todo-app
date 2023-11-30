import crossIcon from "/icon-cross.svg"


function TodoItem({todo}) {
  const {todoText} = todo
  return (
    <li className="w-full flex items-center justify-between bg-light-gray p-3 px-5 border-b border-b-light-graylish-blue dark:border-dark-graylish-blue-third" >
      <div className="w-full flex items-center gap-2" >
        <button className="flex items-center justify-center aspect-square h-5 rounded-full border border-light-graylish-blue hover:border-bright-blue dark:border-dark-graylish-blue-fourth md:h-6" ></button>
        <p className="text-light-dark-graylish-blue dark:text-dark-blue md:text-lg">{todoText}</p>

      </div>
      
      <button>
        <img src={crossIcon} alt="cross icon" />
      </button>
    </li>
    
  )
}

export default TodoItem