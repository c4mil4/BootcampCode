import { createContext, useState } from "react";
import { UseFetch } from "./Hooks/UseFetch";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import App1 from './Pages/App1';
import App2 from './Pages/App2';
import App3 from './Pages/App3';
import App4 from './Pages/App4';

export const GlobalContext = createContext();

function App() { /* estado apartado3 */

  const initialState = [
    { name: "federico", lastName: "garcia lorca", address: "calle x", city: "granada", postalCode: 27009, phoneNumber: 20894585222 },
    { name: "Miguel", lastName: "Hernandez", address: "calle y", city: "madrid", postalCode: 272021, phoneNumber: 20154585222 },
    { name: "Rafael", lastName: "Alberdi", address: "calle u", city: "cadiz", postalCode: 11203, phoneNumber: 20125685222 },
  ];

  const [contacts, setContacts] = useState(initialState);
  
  const [todos, setTodos] = useState([]);

  const API_TODOS = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json";

  UseFetch(API_TODOS, setTodos, 20);

  return (
    <div className="App">

      <BrowserRouter>

        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink to="/" className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio1</NavLink>
          <NavLink to="/App2" className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">Ejercicio2</NavLink>
          <NavLink to="/App3" className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">ejercicio3</NavLink>
          <NavLink to="/App4/" className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">Ejercicio4</NavLink>
        </nav>

        <GlobalContext.Provider value={{contacts, setContacts, todos, setTodos}}> {/* englobamos con context apartado 2 */}
          <Switch>
            <Route exact path="/App1" component={App1} />
            <Route path="/App2" component={App2} />
            <Route path="/App3" component={App3} />
            <Route path="/App4" component={App4} />
          </Switch>
        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );

}

export default App;