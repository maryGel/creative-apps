import { useState, useEffect} from 'react';
import dataTodoApp from './dataTodo';


function useTasks(){

  const [ tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : dataTodoApp;
  })

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, {
      ...newTask,
      id: tasks.length + 1,
      status: "In-Progress",
      complete: false
    }]);
  };

  const updateTask = (id, updates) => {
    setTasks(tasks.map(task => 
      task.id === id? { ...task, ...updates } : task
    ))
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return { tasks, addTask, updateTask, deleteTask};
}

export default useTasks;