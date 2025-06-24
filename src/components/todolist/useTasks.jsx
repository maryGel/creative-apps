import { useState, useEffect} from 'react';
import dataTodoApp from './dataTodo';


export const useTasks = () => {

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('tasks');
    const initialTasks = saved ? JSON.parse(saved) : dataTodoApp;
    return initialTasks || [];    
  });  

  useEffect (() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    console.log("Parent received:", newTask); 
    setTasks(prevTasks => [...prevTasks, {
      ...newTask, 
      id: prevTasks.length + 1,
      complete: false,
    }]);
  }; 

  const updateTask = (id, updates) => {
    // console.log("UPDATE DATA - ID:", id, "UPDATES:", updates); // Debug log
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(task => {
        if (task.id === id) {
          // console.log("MERGING:", task, "WITH:", updates); // Debug log
          return { 
            ...task, 
            ...updates,
          };
        }
        return task;
      });
      console.log("UPDATED TASKS:", updatedTasks); // Debug log
      return updatedTasks;
    });
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return {tasks, addTask, updateTask, deleteTask};
}

// export default useTasks;