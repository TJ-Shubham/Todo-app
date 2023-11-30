

function TodosActivity() {
  return (
    <>
      <div className="flex items-center justify-between py-4 px-4 text-sm bg-light-gray text-light-dark-blue rounded-b-md dark:bg-dark-blue" >
        <p>4 items left</p>
        <button>Clear Completed</button>
      </div>
      <div className="flex items-center justify-around mt-6 py-4 px-4 bg-light-gray text-light-dark-blue rounded-md dark:bg-dark-blue">
        <button className="text-brigh-blue">All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    
    </>
  )
}

export default TodosActivity