import './todo.css';


function TodoTable(){
  return (
    <>
      <table className="table-fixed css-todotable table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Example row */}
          <tr>
            <td>1</td>
            <td>Learn React</td>
            <td>In Progress</td>
            <td>
              <button className="btn btn-primary btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
        <tbody>
          {/* Example row */}
          <tr>
            <td>1</td>
            <td>Learn React</td>
            <td>In Progress</td>
            <td>
              <button className="btn btn-primary btn-sm">Edit</button>
              <button className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
          {/* More rows can be added here */}
        </tbody>
        
      </table>
    </>
  );
}

export default TodoTable;