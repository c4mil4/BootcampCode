import { useState } from 'react';
import UseFetch from "../Hooks/UseFetch";

import '../App.css';
import NewTodo from "../Components/NewTodo";
import ToDo from "../Components/ToDo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://jsonplaceholder.typicode.com/todos";

  UseFetch(API_TODOS, setTodos)
  // UseFetch(LIST_URL, setContacts);

  return (
    <div className="container pt-5">
      <h1>Todo List</h1>
      <NewTodo  setTodos={setTodos} />
      <ToDo todos={todos} setTodos={setTodos}/>

    </div>
  );
}