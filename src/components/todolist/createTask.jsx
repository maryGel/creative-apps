import { Dialog, DialogContent, DialogTitle, Paper } from '@mui/material';

function CreateTask( { openCreateTask, setOpenCreateTask } ) {

  const CustomPaper = (props) => (
    <Paper
      {...props}
      className='bg-white rounded-lg shadow-lg md:w-1/3'
    />
  );
  // Custom Paper component for the dialog
  
  return(
    <>
      <Dialog open = {openCreateTask} 
          PaperComponent={CustomPaper}
        >    

          <DialogTitle >
            <div className='flex w-1/2 text-xs font-semibold text-slate-600'>Create Task</div>
          </DialogTitle>
          {/* Add form elements here for creating a task */}
          <DialogContent>
            <input
              type='text'
              placeholder='Task'
              className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            />
            <textarea
              type='text'
              placeholder='Description'
              className='w-full p-2 mb-4 border border-gray-300 rounded-lg sm:text-sm focus:outline-none focus:border-blue-500'
            />
            <div className='flex justify-end gap-3'>
              <button>
                <img src='./images/todolist/check-mark.png'
                  className='w-6 h-6 transition-opacity duration-300 hover:opacity-50'
                />
              </button>
              <button
                onClick={() => setOpenCreateTask(false)}>
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