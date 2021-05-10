import { BrowserRouter, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-light bg-dark h4 p-4">

                    <ul className="navbar-nav mr-auto ">
                        <li className="nav-item ">
                            <NavLink exact to="/" className="nav-link text-white mt-2 mr-4" activeClassName="active">Inicio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/dashboard" className="nav-link text-white mt-2" activeClassName="active">Lista de Peliculas</NavLink>
                        </li>
                    </ul>
                    <form>
                        <input type="text" placeholder="Buscar" className="mr-sm-4  " />
                        <button className="mr-4" type="submit">Buscar</button>
                    </form> 

                </nav>
            </BrowserRouter>
        </div >
    )
}
