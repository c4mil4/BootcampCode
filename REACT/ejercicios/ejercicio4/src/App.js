import { useState, useEffect} from 'react';

import './App.css';
import NewTodo from "./Components/NewTodo"; 
import ToDo from "./Components/ToDo"; 

export default function App() {
  const [todos, setTodos] = useState([]); //todo guardado en este estado

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  useEffect(() => { 
    fetch(API_TODOS)
      .then(response => response.json())
      .then(data => setTodos(data.slice(0,20)));
  }, [])
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <NewTodo setTodos={setTodos}/>
      <ToDo todos={todos} setTodos={setTodos}/>
  
    </div>
  );
}
    
/* import {​​​​​ useEffect }​​​​​ from "react";

function useFetch(url, setState) {​​​​​
useEffect(() => {​​​​​
fetch(url)
.then(response => response.json())
.then(data => setState(data));
}​​​​​, []);
}​​​​​
export {​​​​​useFetch}​​​​​; */
   
/* import {​​​​​ useFetch }​​​​​ from "./hooks/useFetch";
const [todos, setTodos] = useState([]);

 const API_TODOS = "https://jsonplaceholder.typicode.com/todos";
 useFetch(API_TODOS, setTodos); */
