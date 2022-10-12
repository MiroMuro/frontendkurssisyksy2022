import React from 'react';
function TodoTable(props){
    
    
    return (
    <div>
         <table>
            <tbody>
                <tr><th>Description</th><th>Date</th></tr>
                {props.todos.map((item, index)=><tr key={index}>
                <td>{item.description}</td><td>{item.pvm}</td><td><button onClick={()=>props.poistaTodo(index)} >Delete</button></td></tr>)}
            </tbody>
        
        </table>
        </div>  
    );
}
    export default TodoTable;