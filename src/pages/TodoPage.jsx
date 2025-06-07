import TodoTable from '../components/todolist/todotable.jsx';
import TodoButtons from '../components/todolist/todobutton.jsx';

function TodoPage(){
  return (
    <div className='items-center justify-center p-4 bg-gray-100'>
      <div className='flex justify-end mb-4'>
        <TodoButtons />
      </div>
    <TodoTable />
    </div>
  );
}

export default TodoPage;
// This file is a placeholder for the TodoPage component.