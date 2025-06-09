import dayjs from 'dayjs';
import React from 'react';
import { 
  useReactTable, 
  flexRender,
  getCoreRowModel, 

} from '@tanstack/react-table';
import dataJSON from '../todolist/dataTodo.json';
<backend />
import './todo.css';

// components
import {columnTable} from './columnTable';


  

function TodoTable(){
  // Load data from JSON file
  const dataTodo = React.useMemo(() => dataJSON, []);
  const finalColumns = React.useMemo(() => columnTable, []);

  const now = dayjs();

  // Initialize the table with data and columns
  const table = useReactTable({
    columns: finalColumns,
    data: dataTodo,
    getCoreRowModel: getCoreRowModel(),
    columnResizeMode: 'onChange',
    enableColumnResizing: true,
    defaultColumn: {
      enableResizing: true,
    }



  });
  console.log(table.getHeaderGroups());


  return (
    <>
      {/* Laptop view */}
      <div className='hidden w-full overflow-auto text-xs rounded-lg shadow table-auto md:block'>
        <table className= {`table-auto w-full text-left text-gray-500`}>
            <thead className={`bg-gray-50 border-b-2 border-gray-200 `}>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key= {headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th 
                          key={header.id}
                          colSpan={header.colSpan}
                          className={`p-3 font-semibold tracking-wide text-left relative border border-gray-300`}
                          style={{ width: header.getSize() }}
                        >
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {header.column.getCanResize() && (
                            <div 
                              onMouseDown={header.getResizeHandler()} 
                              onTouchStart={header.getResizeHandler()} 
                              className={`absolute top-0 right-0 w-1 h-full 
                                transition-opacity bg-blue-500 opacity-0 cursor-col-resize 
                                hover:opacity-100`}
                            />
                          )}
                        </th>
                      );                      
                    }
                    )}
                    <th className={`p-3 font-semibold tracking-wide text-left border border-gray-300 w-5`} scope="col">Action</th>         
                    <th className={`p-3 font-semibold tracking-wide text-left border border-gray-300 w-5`} scope="col">Complete</th>                   
                 </tr>
                );
              })}
            </thead>
            <tbody>
              {/* Mapping the table content*/}
                {table.getRowModel().rows.map((rowElement) => {
                   return (
                <tr key={rowElement.id}>
                  {rowElement.getVisibleCells().map((cell) => {
                    return (
                      <td 
                        key={cell.id} 
                        className={`p-2 text-xs text-gray-700 border border-gray-200`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                    
                  }
                  )}
                <td className = {`p-2 text-xs text-gray-700 border border-gray-300`} >
                  <button className="text-blue-400 hover:text-blue-600 ">Edit</button>
                </td>
                  
                 <td className ={`p-4 flex justify-center align-center border`} >
                    <button>
                    <img 
                      className={`w-4 h-4 opacity-30 hover:opacity-100 hover:scale-110 transition-transform duration-300`} 
                      src='./images/todolist/star.png' alt="complete-task"
                    />
                    </button>
                  </td>   
                </tr>
                   )
                })}
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
            <div>
              <h1 className = {`my-2 text-xs font-bold text-gray-700`} >Learn React JS </h1>
            </div>
            <div className='flex items-center justify-between mb-4'>
              <h3>See what solutions we have when it comes to making tailwindcss
                  see what solutions we have when it comes to making tailwindcss
                 See what solutions we have when it comes to making tailwindcss
                 See what solutions we have when it comes to making tailwindcss  
              </h3>            
            </div>
            
             {/* Target Date and Completion */}
          <div className='flex items-center justify-between'>
            <div>Due on: {now.format('MMMM DD')}</div>
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
            <div>
              <h1 className = {`my-2 text-xs font-bold text-gray-700`} >Learn React JS </h1>
            </div>  
            <div className='flex items-center justify-between mb-4'>
              <div>See what solutions we have when it comes to making tailwindcss</div>            
            </div>

             {/* Target Date and Completion */}
          <div className='flex items-center justify-between'>
            <div>Due on: {now.format('MMMM DD')}</div>
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