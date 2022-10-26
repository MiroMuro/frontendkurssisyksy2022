import React, { useState, useRef } from 'react';
import { AgGridReact} from 'ag-grid-react'
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-material.css'

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();
  const columns = [
    { field: "description", sortable: true, filter: true, headerName: "Kuvaus" },
    { field: "date",    sortable: true, filter: true, headerName: "Pvm (YY/MM/DD)" },
    { field: "priority", sortable: true, filter: true, headerName: "Prioriteetti",
      cellStyle: params => params.value === "High"? {color: 'red'}:{color: 'green'}},
      ]

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }
  const dateChanged = (date) =>{
    const [year, month, day] = date.target.value.split('-')
    todo.date = ((day)+'.'+(month)+'.'+(year))
  }
  const addTodo = (event) => {
    setTodos([...todos, todo]);
    setTodo({...todo, description:'',date: '',priority: ''})
  }
  const deleteTodo = () =>{
    if (gridRef.current.getSelectedNodes().length >0){
    setTodos(todos.filter((todo, index) =>
    index !== gridRef.current.getSelectedNodes()[0].childIndex))
  }
  else {
    alert('Select row first');
  }}

  return (
    
    <div class="ex1">
      <Stack direction="row" spacing={2} justifyContent="center" alignitems="center">
      <TextField
        label="Description"
        variant="outlined"
        name="description"
        value={todo.description}
        onChange={inputChanged} />
      <TextField
        label="Priority"
        variant="outlined"
        name="priority"
        value={todo.priority}
        onChange={inputChanged}/>
      <TextField
        id="date"
        label="Date"
        type="date"
        onChange={dateChanged}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Button onClick={addTodo} variant="contained" >Add</Button>
      <Button onClick={deleteTodo}variant="contained" color="error">Delete</Button>
      </Stack>
      <div className="ag-theme-material"
        style={{height: '700px', width: '40%', margin: 'auto'}}>
        <AgGridReact
        ref={gridRef}
        onGridReady={params => gridRef.current = params.api}
        rowSelection='single'
        columnDefs={columns}
        rowData={todos}>
        </AgGridReact>
    </div>
    </div>
  );
};

export default Todolist;