import React from 'react'
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Index from './Pages/Index';
import Dashboard from './Pages/Dashboard';
import Record from './Pages/Record';
import Error from './Pages/Error';

export default function Router() {
    return(
        <div>
            <BrowserRouter>

                <NavLink to="/" activeClassName="active" /* style={{marginRinght: "10px"}} */>Ir a inicio</NavLink>
                <NavLink to="/dashboard" activeClassName="active" /*style= {{marginRinght: "10px"}} */> Panel de control</NavLink>
                <NavLink to="/record/5" activeClassName="active">Record</NavLink>

                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/record/:userID" component={Record}/>

                    <Route component={Error}/> 
                </Switch>
            </BrowserRouter>
            <h2>Footer Común</h2>
        </div>
    )
    
}

//activeClassName="active" (con esta propiedad se le aplica una clase a la pagina que este activa)