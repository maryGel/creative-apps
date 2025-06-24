import { Dialog, DialogContent, Paper } from '@mui/material';


const CustomPaper = (props) => (

  // Custom Paper component for the dialog
  <Paper
    {...props}
    className='bg-white rounded-lg shadow-lg md:w-1/3'
  />
);

function OpenCreate (
  {
    addTask,
    showCreate,
  }

){

  const handleCreate = (e) => {
    e.preventDefault();
    addTask();
    //reset form
  }   
  console.log("dialogbox",showCreate)

  return (
    <>
    <Dialog 
      open = {showCreate}
      PaperComponent={CustomPaper}
    >
      <DialogContent>
        <input 
          type = "text"
          placeholder='Task'      
        />
        <input 
          type="text"
          placeholder='Description'
        />
        <button onClick={handleCreate}>
          Submit
        </button>
      </DialogContent>
    </Dialog>
    
    </>
  )
}

export default OpenCreate;