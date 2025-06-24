import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';
// import {useTasks} from './useTasks'


const CustomPaper = (props) => (

  // Custom Paper component for the dialog
  <Paper
    {...props}
    className='bg-white rounded-lg shadow-lg md:w-1/3'
  />
);

function CreateTask( { 
  openCreateTask, 
  setOpenCreateTask, 
  taskInputRef,
  task,
  setTask,
  description,
  setDescription,
  dueDate,
  setDueDate,
  addTask,
  editTask,
  updateTask,
  getStatusFromDate,
  setEditTask
}){

  console.log("CreateTask mounted with editTask:", editTask);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("SUBMITTING - editTask:", editTask); // Debug log
    console.log("duedate",dueDate)
    
    if (editTask) {
      const updates = {
        task,
        description,
        duedate: dueDate
        // Don't include complete here - it should remain unchanged
      };
      console.log("CALLING UPDATE WITH:", updates); // Debug log
      updateTask(editTask, updates);
    } else {
      addTask();
    }
    
    // Reset form
    handleClose();
  };

  const handleClose = () => {
    setOpenCreateTask(false);
    setEditTask(null); // or ''
    setTask('');
    setDescription('');
    setDueDate('');
  }
  
  
  
  return(
    <>
      <Dialog open = {openCreateTask} 
        PaperComponent={CustomPaper}          
      >    
        <DialogTitle >
          <div className='flex w-1/2 text-xs font-semibold text-slate-600'>Task Details</div>
        </DialogTitle>
        {/* Add form elements here for creating a task */}
        <DialogContent>
          <input
            type='text'
            placeholder='Task Title'
            className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            ref={taskInputRef}

          />
          <textarea
            type='text'
            placeholder='Type task description'
            className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />        

          <p
            className='p-1 mb-2 text-xs font-normal'
          >Target date to complete the task:</p>

          {/* Date input with overdue detection */}
          <input
            type="date"
            className="w-full p-2 font-normal text-gray-500 border border-gray-400 rounded-lg mb-7 sm:text-sm focus:outline-none focus:border-blue-500"
            placeholder='Target Date to complete'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />  
          { getStatusFromDate(dueDate) === "Overdue" &&
            <p className="mt-1 text-xs text-red-500">
            Warning: This date is in the past (status will be set to Overdue)
            </p>
          }          

          <div className='flex justify-end gap-3 text-xs md:text-base'>
            {/* Okay button */}
            <button
            onClick={handleSubmit}
            >
              <img src='./images/todolist/check-mark.png'
                className='w-6 h-6 transition-opacity duration-300 hover:opacity-50'
              />
            </button>
            {/* Close button */}
            <button
              onClick={handleClose}
            >
              <img src='./images/todolist/x-mark.png' 
                className='w-6 h-6 transition-opacity duration-300 hover:opacity-50'
              />                
            </button>
          </div>
        </DialogContent>
   
      </Dialog>
    </>
  );
}
export default CreateTask;