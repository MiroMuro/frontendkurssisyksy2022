import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Todolist from './TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
)
function App() {
  return (
    <div className="App">
        <Todolist/>
        
    </div>
  );
}

export default App;
