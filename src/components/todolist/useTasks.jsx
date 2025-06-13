import { useState, useEffect} from 'react';
import dataTodoApp from './dataTodo';


export const useTasks = () => {

  const [ tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    return saved ? JSON.parse(saved) : dataTodoApp;
  })

  {console.log(tasks)}

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    console.log("Parent received:", newTask); // Debug
    setTasks(prevTasks => [...prevTasks, {
      ...newTask, // 🔹 Preserves all fields (including status)
      id: prevTasks.length + 1,
      complete: false,
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

// export default useTasks;