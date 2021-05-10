import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Index from "../Pages/Index";
import Details from "../Pages/Details";
//import Error from "../Pages/Error";

export default function Router() {
    return (
        <div className="flex-grow-1">
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route path="/details/:movieID" component={Details} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}