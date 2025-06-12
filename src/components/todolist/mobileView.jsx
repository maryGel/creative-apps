import React from 'react';


function MobileView({dataTodo, handleComplete }){
  return (
    <div className={`w-full grid grid-cols-1 gap-4 md:hidden`}>
    {/* Mapping the table content for mobile view */}
    {dataTodo.map ((tableData) => {
      return (
        <div key={tableData.id} className='p-4 bg-white rounded-lg shadow '>
          <div className='flex items-center justify-between mb-4'>
            <div className={`css-status-sm  p-1.5 text-center 
              uppercase tracking-wider 
              ${tableData.status === 'Completed' ? "text-green-800 bg-green-100" :
              tableData.status === 'In-Progress' ? "text-yellow-800 bg-yellow-100" :
              "text-red-800 bg-red-100"
              } `}
            > {tableData.status}  
            </div>
            <div>
              <button className="text-blue-400 uppercase hover:text-blue-600">Edit</button>
            </div>
          </div>

              {/* Task Description */}
          <div>
            <h1 className = {`my-2 text-xs font-bold text-gray-700`} >{tableData.task} </h1>
          </div>
          <div className='flex items-center justify-between mb-4'>
            <h3>
              {tableData.description} 
            </h3>            
          </div>
            
            {/* Target Date and Completion */}
          <div className='flex items-center justify-between'>
            <div>Due on: {tableData.duedate}</div>
            <div>
              <button
                onClick={() => handleComplete(tableData.id)}
              >
                <img 
                  className={`w-4 h-4 opacity-30 outline-black hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                  src='./images/todolist/star.png' alt="complete-task"
                />
              </button>
            </div>  
          </div>
        </div>
      );
      }
      )}    
    </div>
  )}

export default MobileView;