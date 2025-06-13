import React, { useState  } from 'react';
import FilterTodo from '../components/todolist/filterTodo.jsx';
import TodoTable from '../components/todolist/todoTable.jsx';
import TodoButtons from '../components/todolist/todobutton.jsx';
import {useTasks} from '../components/todolist/useTasks.jsx'


function TodoPage(){

  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  // {console.log(tasks)}

  const [openFilter, setOpenFilter] = useState(false);

  const optionStatus = ['Upcoming', 'Overdue', 'Due Today', 'Completed'];
  const [selectedStatuses, setSelectedStatuses] = useState(optionStatus);
  
  const getStatusFromDate = (due) => {
    const today = new Date();
    const dueDate = new Date(due);
    dueDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0);

    if (dueDate < today) return "Overdue";
    if (dueDate.getTime() === today.getTime()) return "Due Today";
    return "Upcoming";
  } ;
  
  const dataTodo = React.useMemo(() => {
    return tasks.map(task => {
      const isComplete = task.complete === true || task.complete === "true";
      const status = isComplete ? "Completed" : getStatusFromDate(task.duedate);
      return {...task, status};      
    });
  }, [tasks]);

  console.log(
    tasks.map(task => ({
      id: task.id,
      rawComplete: task.complete,
      type: typeof task.complete,
      evaluated: task.complete === true || task.complete === 'true'
    }))
  );
  
    
  const filteredTasks = dataTodo.filter(task => {
    return selectedStatuses.includes(task.status);
  });

  // {console.log(filteredTasks)}
  return (
    <div className='items-center justify-center p-4 bg-gray-100'>
     
      <div className='flex justify-end mb-4'>
        <TodoButtons
          openFilter = {openFilter}
          setOpenFilter = {setOpenFilter}
          addTask = { addTask }
        />
      </div>
    
    {openFilter && 
      <FilterTodo 
        selectedStatuses = {selectedStatuses}
        onStatusChange = {setSelectedStatuses}  
        optionStatus = {optionStatus}
        filteredTasks = {filteredTasks}
      />}
    <TodoTable
      updateTask = {updateTask}
      deleteTask = { deleteTask } 
      tasks = {filteredTasks}
      getStatusFromDate = {getStatusFromDate}
      dataTodo = {dataTodo}
      
    />

    </div>
  );
}

export default TodoPage;
// This file is a placeholder for the TodoPage component.