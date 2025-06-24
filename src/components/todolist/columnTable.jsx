export const columnTable = [

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
    accessorKey: 'duedate',
    header: 'Due Date',
    enableResizing: true,
    size: 100,
    cell: ({row}) => {
      const date = row.original.duedate;
      return date ? new Date(date).toLocaleDateString(): "No date"
    }
  }
]