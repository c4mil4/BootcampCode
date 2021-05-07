import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import './App.css';
import App1 from './Pages/App1';
import App2 from './Pages/App2';
import App3 from './Pages/App3';
import App4 from './Pages/App4';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar px-5 py-3 bg-dark">
          <NavLink to="/"       className="text-decoration-none text-light font-weight-bold" activeClassName="text-success">Ejercicio1</NavLink>
          <NavLink to="/App2"   className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">Ejercicio2</NavLink>
          <NavLink to="/App3"   className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">ejercicio3</NavLink>
          <NavLink to="/App4/"  className="text-decoration-none text-light font-weight-bold" activeClassName="active text-warning">Ejercicio4</NavLink>
        </nav>

        <Switch>
          <Route exact path="/App1" component={App1} />
          <Route path="/App2"       component={App2} />
          <Route path="/App3"       component={App3} />
          <Route path="/App4"       component={App4} />
        </Switch>
      </BrowserRouter>
    </div>
  )

}

export default App;