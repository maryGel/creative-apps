import { useState  } from 'react';
import EditTodo from '../components/todolist/editTodo.jsx';
import TodoTable from '../components/todolist/todoTable.jsx';
import TodoButtons from '../components/todolist/todobutton.jsx';


function TodoPage(){

  const [openFilter, setOpenFilter] = useState(false);

  return (
    <div className='items-center justify-center p-4 bg-gray-100'>
     
      <div className='flex justify-end mb-4'>
        <TodoButtons
          openFilter = {openFilter}
          setOpenFilter = {setOpenFilter}
        />
      </div>
    
    {openFilter && <EditTodo />}
    <TodoTable />
    
    </div>
  );
}

export default TodoPage;
// This file is a placeholder for the TodoPage component.