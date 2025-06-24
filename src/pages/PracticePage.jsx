import { useState, useRef } from 'react';
// import OpenCreate from '../components/practicepage/addtask';
import datapractice from '../components/practicepage/datapractice';

function PracticePage(){

  const [tasks,setTasks]  = useState(datapractice);
  // const [showCreate, setShowCreate] = useState(false);
  const [plusTask, setPlusTask] = useState(''); //input task
  const [addDescription, setAddDescription] = useState(''); //input description
  const [editTask, setEditTask] = useState(null) //edit the task
  const taskRef = useRef(null);
  console.log(tasks)

  const addTask = (newTask) => {
    setTasks(oldTasks => [...oldTasks, {
      ...newTask,
      id: oldTasks.length  + 1,
      complete: false,     
    }])
  }

  const updateMyTask = (id, updates) => { 
    setTasks(oldTasks => {
      const updatedTasks = oldTasks.map(task => {
        if(task.id === id ){
          return {
            ...task,
            ...updates,
          };
        }
        return task;
      });
      return updatedTasks;
    });
  };


  const handleEdit = (id) => {
    const editedTask = tasks.find(task => task.id === id);
    console.log("edit",editedTask.id);

    if(editedTask) {
      setPlusTask(editedTask.task);
      setAddDescription(editedTask.description);
      setEditTask(id);
    }
  }

  console.log(editTask)


  // add task
  const handleCreate = (e) => {
    e.preventDefault();

   if(editTask) {
    const updates = {
      task: plusTask,
      description: addDescription
    };
    updateMyTask(editTask, updates)
   } else {
    addTask({task: plusTask, description: addDescription}); 
   }
   
    

    //reset form
    setPlusTask('');
    setAddDescription('');
  }   

  return (

    <div>
      <p className='p-3 text-lg font-semibold tracking-wide'>Practice</p>
      {/* button */}
      <div className='gap-4 p-4'>
        <button 
          className='p-2 text-base text-white bg-slate-700'
          onClick={handleCreate}
        >Create
        </button>
      
        {/* Input  */}
        <input 
          className='p-2 m-5 text-base font-semibold border w-30 border-spacing-2'
          type='text'
          placeholder='Task'
          value={plusTask}
          onChange={(e) => setPlusTask(e.target.value)}
          ref={taskRef}
        />
        <input 
          className='p-2 m-5 text-base font-semibold border border-spacing-2'
          type='text'
          placeholder='Description'
          value={addDescription}
          onChange={(e) => setAddDescription(e.target.value)}
          ref={taskRef}
        />
      </div>
    

      
      {/* Table*/}
      {tasks.map((task) => {
        return(       

          <div key={task.id} >
            <ul className='grid grid-cols-4 gap-5 p-2 m-4 text-lg border border-slate-600'>
              <li><a>{task.task}</a></li>
              <li><a>{task.description}</a></li>
              {/* <li><a>{task.duedate}</a></li> */}
              <button
                onClick={() =>handleEdit(task.id)}
              ><img src="/public/images/todolist/draw.png"/></button>
            </ul>
          </div>
        )
      })}
    {/* <OpenCreate
      tasks={tasks}
      addTask={addTask}
      showCreate={showCreate}
      setShowCrate={setShowCreate}

    /> */}
    </div>
  )

}

export default PracticePage;