import React from 'react'; 

const TodoTable = (props) => { 
    return ( 
        <div> 
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.todos.map((todo, index) => 
                    <tr key={index}><td>{todo.date}</td><td>{todo.desc}</td>
                    <td><button id={index} onClick={props.deleteTodo}>Delete</button></td></tr>)}  
            </tbody>
        </table>
        </div> 
    ); 
} 
export default TodoTable;