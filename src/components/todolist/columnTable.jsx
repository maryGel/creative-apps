export const columnTable = [
  // {
  //   accessorKey: 'id',
  //   header: 'ID',
  //   enableResizing: true,
  //   size: 10,
  // },
  {
    accessorKey: 'task',
    header: 'Task',
    enableResizing: true,
    size: 400,
  },
  {
    accessorKey: 'description',
    header: 'Description',
    enableResizing: true,
    size: 900,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    enableResizing: true,
    size: 50,
    cell: ({ row }) => {
      const status = row.getValue('status');
      return (
        <div class name={`flex items-center  `}       
        >
          <span className={`flex px-3 py-2 text-xs font-semibold rounded-lg justify-center 
            ${status === 'Completed' ? 'bg-green-100 text-green-800' : 
              status === 'In-Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {status}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'duedate',
    header: 'Due Date',
    enableResizing: true,
    size: 50,
    cell: ({row}) => {
      const dueDate = row.getValue('duedate');
      return (
        <div className='text-xs font-semibold text-gray-600'>
          {dueDate}
        </div>
      );
    }
  }
  // {
  //   accessorKey: 'complete',
  //   header: 'Completed',
  // },
]