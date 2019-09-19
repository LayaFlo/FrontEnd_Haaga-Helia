import React from 'react'; 
import ReactTable from 'react-table'; 
import 'react-table/react-table.css';

const TodoTable = (props) => { 
    const columns = [{ 
        Header: 'Date', 
        accessor: 'date' // String-based value accessors! 
    }, { 
        Header: 'Description', 
        accessor: 'desc', 
    }, {
        Cell: ({index}) => (
            <button id={index} onClick={props.deleteTodo}>Delete</button>
          )
    }]
    return ( 
        <div className="App"> 
            <ReactTable data={props.todos}    
            columns={columns} filterable={true} 
            defaultPageSize={10} /> 
        </div> 
    );
} 
export default TodoTable;