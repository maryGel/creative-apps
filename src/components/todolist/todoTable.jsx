import './todo.css';


function TodoTable(){
  return (
    <>
      <div className='hidden overflow-auto rounded-lg shadow md:block'>
        <table className= {`table-auto w-full`}>
            <thead className={`bg-gray-50 border-b-2 border-gray-200 `}>
              <tr>
                <th  className={`p-3 w-2 text-sm font-semibold tracking-wide text-left`} scope="col">#</th>
                <th  className={`p-3 w-5 text-sm font-semibold tracking-wide text-left`} scope="col">Date Created</th>
                <th  className={`p-3 w-100 text-sm font-semibold tracking-wide text-left`} scope="col">Task</th>
                <th  className={`p-3 text-sm font-semibold tracking-wide text-left`} scope="col">Status</th>
                <th  className={`p-3 text-sm font-semibold tracking-wide text-left`} scope="col">Actions</th>
                <th  className={`p-3 w-5 text-sm font-semibold tracking-wide text-left`} scope="col">Target Date</th>
                <th  className={`p-3 w-5 text-sm font-semibold tracking-wide text-left`} scope="col">Completed</th>
              </tr>
            </thead>
            <tbody>
              {/* Example row */}
              <tr>
                <td className = {`p-2 text-sm text-gray-700`} >1</td>
                <td className = {`p-1 text-sm text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled />
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >see what solutions we have when it comes to making tailwindcss </td>
                <td className = {`p-2 text-sm text-gray-700`} >
                  <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg `}>In Progress</span>
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled/>
                </td>
                <td className ={`p-4 text-sm text-gray-700 flex justify-center align-center`} >
                  <button>
                    <img 
                      className={`w-4 h-4 hover:scale-110 transition-transform duration-300 hover:bg-yellow-200`} 
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
                <td className = {`p-2 text-sm text-gray-700`} >1</td>
                <td className = {`p-1 text-sm text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled/>
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >Learn React</td>
                <td className = {`p-2 text-sm text-gray-700`} >
                <span className={`p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg `}>Overdue</span>
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >
                  <button className="btn btn-primary btn-sm">Edit</button>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
                <td className = {`p-2 text-sm text-gray-700`} >
                  <input type="date" className="w-full p-1 border rounded" disabled />
                </td>
                <td className ={`p-4 text-sm text-gray-700 flex justify-center align-center`} >
                  <button>
                    <img 
                      className={`w-4 h-4 hover:scale-110 transition-transform duration-300 hover:bg-yellow-200`} 
                      src='./images/todolist/star.png' alt="complete-task"
                    />
                  </button>
                </td>
              </tr>
              {/* More rows can be added here */}
            </tbody>        
        </table>
      </div>

      <div className={`w-full grid grid-cols-1 gap-4 md:hidden`}>
        <div className='p-4 bg-white rounded-lg shadow '>
          <div>
            <div>1</div>
            <div>06/07/2025</div>
            <div>see what solutions we have when it comes to making tailwindcss</div>
            <div>In Progress</div>
          </div>

          <div>
            <button className="btn btn-primary btn-sm">Edit</button>
            <button className="btn btn-danger btn-sm">Delete</button>
          </div>
          <div>06/30/2025</div>
          <div>
            <button>
              <img 
                className={`w-4 h-4 hover:scale-110 transition-transform duration-300 hover:bg-yellow-200`} 
                src='./images/todolist/star.png' alt="complete-task"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoTable;