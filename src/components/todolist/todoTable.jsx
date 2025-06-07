import './todo.css';


function TodoTable(){
  return (
    <>
      {/* Laptop view */}
      <div className='hidden w-full overflow-auto text-xs rounded-lg shadow md:block'>
        <table className= {`w-full text-left text-gray-500`}>
            <thead className={`bg-gray-50 border-b-2 border-gray-200 `}>
              <tr>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">#</th>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">Task</th>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">Status</th>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">Actions</th>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">Target Date</th>
                <th  className={`p-3 font-semibold tracking-wide text-left`} scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td className = {`p-2 text-xs text-gray-700`} >1</td>
                <td className = {`p-2 text-xs text-gray-700`} >see what solutions we have when it comes to making tailwindcss </td>
                <td className = {`p-2 text-gray-700`} >
                  <span className={`css-status p-1.5 text-nowrap text-center uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg `}>In-Progress</span>
                </td>
                <td className = {`p-2 text-xs text-gray-700`} >
                  <button className="text-blue-400 hover:text-blue-600">Edit</button>
                </td>
                <td className = {`p-2 text-xs text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled/>
                </td>
                <td className ={`p-4 text-xs text-gray-700 flex justify-center align-center`} >
                  <button>
                  <img 
                    className={`w-4 h-4 opacity-30 outline-black hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                    src='./images/todolist/star.png' alt="complete-task"
                  />
                  </button>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>
            <tbody>
              {/* Example row */}
              <tr>
                <td className = {`p-2 textxs text-gray-700`} >2</td>
                <td className = {`p-2 textxs text-gray-700`} >Learn React</td>
                <td className = {`p-2 textxs text-gray-700`} >
                <span className={`css-status p-1.5 text-center uppercase tracking-wider text-red-800 bg-red-200 rounded-lg `}>Overdue</span>
                </td>
                <td className = {`p-2 text-xs text-gray-700`} >
                  <button className="text-blue-400 hover:text-blue-600">Edit</button>
                </td>
                <td className = {`p-2 text-xs text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled />
                </td>
                <td className ={`p-4 flex justify-center align-center`} >
                  <button>
                  <img 
                    className={`w-4 h-4 opacity-30 outline-black hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                    src='./images/todolist/star.png' alt="complete-task"
                  />
                  </button>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>        
        </table>
      </div>

      {/* Mobile view */}
      <div className={`w-full grid grid-cols-1 gap-4 md:hidden`}>
        <div className='p-4 bg-white rounded-lg shadow '>
          <div className='flex items-center justify-between mb-4'>
            <div className={`css-status-sm  p-1.5 text-center 
              uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg `}
              >In Progress            
            </div>
            <div>
              <button className="text-blue-400 uppercase hover:text-blue-600">Edit</button>
            </div>
          </div>
              {/* Task Description */}
          <div className='flex items-center justify-between mb-4'>
            <div>See what solutions we have when it comes to making tailwindcss</div>            
          </div>
             {/* Target Date and Completion */}
          <div className='flex items-center justify-between'>
            <div>06/30/2025</div>
            <div>
              <button>
                <img 
                  className={`w-4 h-4 opacity-30 outline-black hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                  src='./images/todolist/star.png' alt="complete-task"
                />
              </button>
            </div>
          </div>
        </div>

        <div className='p-4 bg-white rounded-lg shadow '>
          <div className='flex items-center justify-between mb-4'>
            <div className={`css-status-sm p-1.5 text-center uppercase 
              tracking-wider text-red-800 bg-red-200 rounded-lg`}
              >Overdue
            </div>
            <div>
              <button className="text-blue-400 uppercase hover:text-blue-600">Edit</button>
            </div>
          </div>
              {/* Task Description */}
          <div className='flex items-center justify-between mb-4'>
            <div>See what solutions we have when it comes to making tailwindcss</div>            
          </div>
             {/* Target Date and Completion */}
          <div className='flex items-center justify-between'>
            <div>06/30/2025</div>
            <div>
              <button>
                <img 
                  className={`w-4 h-4 opacity-30 outline-black hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                  src='./images/todolist/star.png' alt="complete-task"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoTable;