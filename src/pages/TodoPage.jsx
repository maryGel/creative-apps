import React, { useState, useEffect } from 'react';
import FilterTodo from '../components/todolist/filterTodo.jsx';
import TodoTable from '../components/todolist/todoTable.jsx';
import TodoButtons from '../components/todolist/todobutton.jsx';
import {useTasks} from '../components/todolist/useTasks.jsx'


function TodoPage(){

  const { tasks, addTask, updateTask, deleteTask } = useTasks();
  // {console.log(tasks)}

  const [openFilter, setOpenFilter] = useState(false);

  const optionStatus = ['Upcoming', 'Overdue', 'Due Today', 'Completed'];
  const defaultFilter = ['Upcoming', 'Overdue', 'Due Today'];
  const [selectedStatuses, setSelectedStatuses] = useState(defaultFilter);
  
  //Computation of dynamic status
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
      const date =  task.duedate; // Handle both cases
      const status = isComplete ? "Completed" : getStatusFromDate(date);
      return {
        ...task,
        status
      };      
    });
  }, [tasks]);

  console.log(dataTodo) 
    
  const filteredTasks = dataTodo.filter(task => {
    return selectedStatuses.leght === 0 ? false : selectedStatuses.includes(task.status);
  });

  // auto refresh when the filtered option is empty
  useEffect(() => {
    if (selectedStatuses.length === 0 ) {
      setTimeout(() => {
        window.location.reload();
      },3000)
    }
  })

  console.log("Tasks IDs:", tasks.map(t => t.id));
  console.log("dataTodo IDs:", dataTodo.map(t => t.id));  

  //lifting the useState for the todoTable edit button can access;
  const [openCreateTask, setOpenCreateTask] = useState(false);
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [editTask, setEditTask] = useState(null);
  const [search, setSearch] = useState('');

  return (
    <div className='items-center justify-center p-4 bg-gray-100'>
     
      <div className='flex justify-end mb-4'>
        <TodoButtons
          setOpenFilter = {setOpenFilter}
          addTask = { addTask }
          updateTask = {updateTask}
          openCreateTask = {openCreateTask}
          setOpenCreateTask = {setOpenCreateTask}
          task = {task}
          setTask = {setTask}
          description = {description}
          setDescription = {setDescription}
          dueDate = {dueDate}
          setDueDate ={setDueDate}
          editTask = {editTask}
          setEditTask =  {setEditTask}
          setSearch = {setSearch}
          getStatusFromDate = {getStatusFromDate}
        />
      </div>
    
    {openFilter && 
      <FilterTodo 
        selectedStatuses = {selectedStatuses}
        onStatusChange = {setSelectedStatuses}  
        optionStatus = {optionStatus}
        dataTodo = {dataTodo}
        
      />}
    <TodoTable
      updateTask = {updateTask}
      deleteTask = { deleteTask } 
      dataTodo = {dataTodo && filteredTasks}
      setOpenCreateTask ={setOpenCreateTask}
      setTask = {setTask}
      setDescription = {setDescription}
      setDueDate ={setDueDate}
      setEditTask = {setEditTask}
      search = {search}
    />

    </div>
  );
}

export default TodoPage;
// This file is a placeholder for the TodoPage component.