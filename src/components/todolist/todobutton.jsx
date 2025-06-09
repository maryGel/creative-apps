function TodoButtons(){
  return (
    <>

    <div className='flex justify-end gap-2 align-middle'>
      {/*  */}
      <div className={`relative flex items-center justify-end group`}>
        <button className= {`z-10 px-3`}>
          <input 
            type='Search' 
            placeholder='Search'
            className={`
                absolute right-0 top-1/2 -translate-y-1/2
                w-0 opacity-0 group-hover:w-40 group-hover:opacity-100
                transition-all duration-700 ease-in-out
                pl-2 pr-6 py-1 rounded-xl bg-white text-gray-700
                placeholder-gray-400 border border-gray-300
                focus:outline-none z-0
              `}
            />
            <div className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent`}>
              <img 
                src="./images/todolist/search.png" 
                alt="Search" 
                className={`
                  w-4 h-4 transition-transform duration-200 ease-in-out group-hover:scale-75
                `}
              />
            </div>
        </button>
      </div>

      <div className='flex pt-1 space-x-1'>
        <div >
          <button >
          <img 
            src="./images/todolist/filter.png" 
            alt="filter" 
            className="w-4 h-4 mr-2 transition-transform duration-200 ease-in-out cursor-pointer hover:tranform hover:scale-110"
          />
          </button>
        </div>
        <div>
          <button>
          <img 
            src="./images/todolist/plus.png" 
            alt="Add Todo" 
            className="w-4 h-4 mr-2 transition-transform duration-200 ease-in-out cursor-pointer hover:tranform hover:scale-110"
          />
          </button>
        </div>        
      </div>
      
    </div>
    </>
  );
}

export default TodoButtons;