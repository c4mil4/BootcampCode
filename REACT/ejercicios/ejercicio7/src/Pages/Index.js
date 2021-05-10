import Card from "../Components/Card"
import { useEffect, useState } from "react";


export default function Index() {

    const [movies, setMovies] = useState([]);

    const initialState = useEffect(() => {
        fetch(' https://api.themoviedb.org/3/movie/upcoming?api_key=936e38dc02b5e64c225317b06e83b80f&language=es-US&page=1')
            .then(response => response.json())
            .then(data => setMovies(data.results));
    }, []);

    return (
        <div className="container">
            <div className="row">

                <Card movies={movies} />
            </div>
        </div>

    )

}