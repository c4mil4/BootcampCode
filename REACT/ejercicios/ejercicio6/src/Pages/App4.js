import { createContact, useEffect } from 'react';
import { UseFetch } from "../Hooks/UseFetch";
import '../App.css';
import NewTodo from "../Components/NewTodo";

/* const URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"

  fetch(URL)
    .then(response => response.json())
    .then(data => console.log(data))
 */

export default function App() {
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  UseFetch(API_TODOS, setTodos)
  // UseFetch(LIST_URL, setContacts);

  return (
    <div className="container pt-5">
      <h1>Todo List</h1>
      <ToDo setodos={todos} setTodos={setTodos} />
      <NewTodo />

    </div>
  );
}