import Card from "../Components/Card";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from 'react';

function App() {

    const [listMovies, setMovie] = useState({});
    const id = useParams()

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=936e38dc02b5e64c225317b06e83b80f&language=en-US&page=1')
            .then(response => response.json())
            // .then(data => setMovie(data));
            .then(data => console.log(data))

        return () => setMovie({});
    }, [id]);


    //  const list = this.state.listCard.map((item) => <Card key={item.key} obj={item} />);
    //     return (
    //         <div className="row">
    //             {list}
    //         </div>
    //     );

    const items = listMovies.map((theMovie) =>
        <Card obj={theMovie} />)
    return (
        <div>
            {items}
            {/* <Card
                title={movie}
                paragraph=""
                href="#"
                linkText="Mas información"
                imgUrl="https://i.stack.imgur.com/y90pT.jpg"
            /> */}



        </div>
    );
}

export default App;