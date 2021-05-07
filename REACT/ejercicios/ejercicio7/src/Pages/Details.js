import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


export default function Details({ }) {

    const [listMovies, setMovie] = useState({});
    const id = useParams()

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=936e38dc02b5e64c225317b06e83b80f')
            .then(response => response.json())
            .then(data => setMovie(data));

        return () => setMovie({});
    }, [id]);

    return (
        <div>
            {listMovies.result.original_title}

        </div>
    )
}