import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';

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
  addTask
}){

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask();
  }
  
  return(
    <>
      <Dialog open = {openCreateTask} 
        onClose={() => setOpenCreateTask(false)}
        PaperComponent={CustomPaper}          
      >    
        <DialogTitle >
          <div className='flex w-1/2 text-xs font-semibold text-slate-600'>Create Task</div>
        </DialogTitle>
        {/* Add form elements here for creating a task */}
        <DialogContent onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Task'
            className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            value={task}
            onChange={(e)=>setTask(e.target.value)}
            ref={taskInputRef}

          />
          <textarea
            type='text'
            placeholder='Description'
            className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            value={description}
            onChange={(e)=> setDescription(e.target.value)}
          />
          
          <p
            className='p-1 mb-2 text-xs font-normal'
          >Type your target date to complete the task</p>

          <input
            type="date"
            className="w-full p-2 border border-gray-300 rounded-lg mb-7 sm:text-sm focus:outline-none focus:border-blue-500"
            placeholder='Target Date to complete'
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />            

          <div className='flex justify-end gap-3 text-xs md:text-base'>
            {/* Okay button */}
            <button
            type="submit"
            onClick={addTask}
            >
              <img src='./images/todolist/check-mark.png'
                className='w-6 h-6 transition-opacity duration-300 hover:opacity-50'
              />
            </button>
            {/* Close button */}
            <button
              onClick={addTask}
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