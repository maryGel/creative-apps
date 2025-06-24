import React from 'react';
import { 
  useReactTable, 
  flexRender,
  getCoreRowModel, 
} from '@tanstack/react-table';

import './todo.css';

// components
import {columnTable} from './columnTable';
import MobileView from './mobileView';


function TodoTable({ 
    dataTodo, 
    updateTask, 
    deleteTask, 
    setOpenCreateTask, 
    setTask, 
    setDescription, 
    setDueDate, 
    setEditTask, 
    search  
  }){

  // Load data 
  const finalColumns = React.useMemo(() => columnTable, []);

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

  const handleComplete = (id) => {
    updateTask(id, { complete: true });
  };
  
  const handleDelete = (id) => {
    deleteTask(id);
    alert('Task has been deleted!')
  }

  //edit the task
  const handleEdit = (id) => {
    const taskToEdit = dataTodo.find(task => task.id === id);
    if (taskToEdit) {
      console.log("EDITING TASK:", taskToEdit); // Debug log
      setOpenCreateTask(true);
      setTask(taskToEdit.task);
      setDescription(taskToEdit.description);
      setDueDate(taskToEdit.duedate);
      setEditTask(id);
    } 
  };

  // search
  const filteredRows = table.getRowModel().rows.filter((row) => {

    if (!search.trim()) return true;

    //adjust fields
    const task = row.original.task?.toLowerCase() || '';
    const description = row.original.description?.toLowerCase() || '';
    const status = row.original.status?.toLowerCase() || '';

      return (
        task.includes(search.toLowerCase()) ||
        description.includes(search.toLowerCase()) ||
        status.includes(search.toLowerCase())
        );
  });

    return (
    <>
      {/* Laptop view */}
      <div className='hidden w-full overflow-auto text-xs rounded-lg shadow table-auto md:block'>
        <table className= {`table-auto w-full text-left text-gray-500`}>
            <thead className={`bg-gray-50  `}>
              {table.getHeaderGroups().map((headerGroup) => {
                return (
                  <tr key = {headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <th 
                          key={header.id}
                          colSpan={header.colSpan}
                          className={`p-3 font-semibold tracking-wide text-left relative border border-gray-200`}
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
                    <th className={`p-3 font-semibold tracking-wide text-left border border-gray-200 w-12`} scope="col">Status</th>  
                    <th className={`p-3 font-semibold tracking-wide text-left border border-gray-200 w-5`} scope="col">Action</th>         
                    <th className={`p-3 font-semibold tracking-wide text-left border border-gray-200 w-5`} scope="col">Complete</th>                   
                 </tr>
                );
              })}
            </thead>
            <tbody>
              {/* Mapping the table content*/}
                {filteredRows.map((rowElement) => {
                   return (
                <tr key={rowElement.id} >
                    {rowElement.getVisibleCells().map((cell) => {
                    return (
                      <td 
                        key={cell.id} 
                        className={`py-1 px-3 text-xs text-gray-700 border border-gray-200`}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );                    
                  }
                  )}
                  
                  {/* Status */}
                  <td className = {`p-1 text-xs  text-gray-700 border border-gray-200`} >
                    <button 
                        className={`css-status-sm  rounded-md p-1.5 text-center uppercase tracking-wider w-20
                        ${rowElement.original.status === 'Completed' ? "text-green-800 bg-green-100" :
                          rowElement.original.status === 'Upcoming' ? "text-yellow-800 bg-yellow-100" :
                          rowElement.original.status === 'Due Today' ? "text-yellow-900 bg-yellow-200" :
                          "text-red-800 bg-red-100"
                          }`}
                    >
                    {rowElement.original.status}
                    </button>
                  </td>

                  {/* Actions */}
                  <td className = {`p-2 text-xs space-x-3 text-center text-gray-700 border border-gray-200`} >
                    {/* Edit */}
                      <button 
                        className='w-4 h-4 transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-110'
                        onClick={()=> handleEdit(rowElement.original?.id)}
                      >
                        <img src='./images/todolist/draw.png' alt="edit" />
                      </button>
                    {/* Delete button */}
                      <button 
                        className='w-4 h-4 transition-transform duration-300 opacity-50 hover:opacity-100 hover:scale-110'
                        onClick={()=> handleDelete(rowElement.original.id)}

                      >
                        <img src='./images/todolist/delete.png' alt="edit" />
                      </button>
                  </td>
                  
                  {/* Complete (star icon) button */}
                  <td className ={`m-auto text-center border  border-gray-200`} >
                    <button onClick={() => handleComplete(rowElement.original.id)}>
                      <img 
                        className={`w-5 h-5 hover:opacity-100 hover:scale-110 transition-transform duration-300
                          ${rowElement.original.complete ? "opacity-100" : "opacity-30"}
                          `} 
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
      <MobileView 
      dataTodo={dataTodo}
      handleComplete = {handleComplete}
      />
    </>
  );
}

export default TodoTable;