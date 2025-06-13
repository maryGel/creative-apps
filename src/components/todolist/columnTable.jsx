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
  /*{
    accessorKey: 'status',
    header: 'Status',
    enableResizing: true,
    size: 150,
    cell: ({ row }) => {
      const task = row.original;
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Calculate effective status (including overdue)
      const effectiveStatus = 
        task.duedate < today && !task.complete
          ? 'Overdue'
          : task.status;
          {console.log(task.duedate)}
          
      return (
        <div className={`flex items-center  `}       
        >
          <span className={`flex px-3 py-2 text-xs font-semibold rounded-lg justify-center 
            ${effectiveStatus=== 'Completed' ? 'bg-green-100 text-green-800' : 
              effectiveStatus === 'In-Progress' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
            {effectiveStatus}
          </span>
        </div>
      );
    },
  },*/
  {
    accessorKey: 'duedate',
    header: 'Due Date',
    enableResizing: true,
    size: 100,
    cell: ({row}) => {
      const date = row.original.duedate;
      return date ? new Date(date).toLocaleDateString(): "No date"
    }
  }
  // {
  //   accessorKey: 'complete',
  //   header: 'Completed',
  // },
]