import CreateTask from './createTask';
import { useRef } from 'react';


function TodoButtons( { 
    addTask, 
    setOpenFilter, 
    openCreateTask, 
    setOpenCreateTask,
    task,
    setTask,
    description,
    setDescription,
    dueDate,
    setDueDate,
    editTask,
    setEditTask,
    dataTodo,
    updateTask,
    setSearch,
    getStatusFromDate
  }){


  const taskInputRef = useRef(null);


  const handleAddTask = () => {
    addTask({task, description, duedate: dueDate });
  }

  return (
    <>
    <div className='flex justify-end gap-2 align-middle'>
      {/* Todobuttons */}
      <div className={`relative flex items-center justify-end group`}>
        <button className= {`z-10 px-3`}>
          <input 
            type='Search' 
            placeholder='Search'
            onChange={(e) => setSearch(e.target.value)}
            className={`
                absolute right-0 top-1/2 -translate-y-1/2
                w-0 opacity-0 group-hover:w-60 md:group-hover:w-80 md:group-hover:h-10 group-hover:opacity-100
                transition-all duration-700 ease-in-out
                pl-2 pr-6 py-1 rounded-3xl bg-white text-gray-700
                placeholder-gray-400 border border-gray-300
                focus:outline-none z-0 md:px-4 md:text-base
              `}
            />
            <div className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-transparent md:w-5 `}>
              <img  
                src="./images/todolist/search.png" 
                alt="Search" 
                className={`
                  w-4 h-4 transition-transform duration-200 ease-in-out group-hover:scale-75 md:group-hover:scale-90 md:w-5 md:h-5
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
            className="w-4 h-4 mr-2 transition-transform duration-200 ease-in-out cursor-pointer md:w-5 md:h-5 hover:tranform hover:scale-110"
            onClick={ () => setOpenFilter(prev => !prev)}
          />
          </button>
        </div>
        <div>
          <button>
          <img 
            src="./images/todolist/plus.png" 
            alt="Add Todo" 
            className="w-4 h-4 mr-2 transition-transform duration-200 ease-in-out cursor-pointer md:w-5 md:h-5 hover:tranform hover:scale-110"
            onClick={() => setOpenCreateTask(true)}                    
          />
          </button>
        </div>      
      </div>     
    </div> 
      <CreateTask
        openCreateTask={openCreateTask}
        setOpenCreateTask={setOpenCreateTask}
        taskInputRef={taskInputRef}
        task = {task}
        setTask={setTask}
        description={description}
        setDescription={setDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTask={handleAddTask}
        editTask={editTask}
        setEditTask={setEditTask}
        dataTodo={dataTodo}
        updateTask={updateTask}
        getStatusFromDate = {getStatusFromDate}
      />  
    </>
  );
}

export default TodoButtons;