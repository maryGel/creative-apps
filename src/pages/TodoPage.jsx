import { useState  } from 'react';
import FilterTodo from '../components/todolist/filterTodo.jsx';
import TodoTable from '../components/todolist/todoTable.jsx';
import TodoButtons from '../components/todolist/todobutton.jsx';
import useTasks from '../components/todolist/useTasks.jsx'


function TodoPage(){

  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  
  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className='items-center justify-center p-4 bg-gray-100'>
     
      <div className='flex justify-end mb-4'>
        <TodoButtons
          openFilter = {openFilter}
          setOpenFilter = {setOpenFilter}
          addTask = { addTask }
        />
      </div>
    
    {openFilter && <FilterTodo />}
    <TodoTable
    tasks = {tasks}
    updateTask = {updateTask}
    deleteTask = { deleteTask } 
    />
    
    </div>
  );
}

export default TodoPage;
// This file is a placeholder for the TodoPage component.