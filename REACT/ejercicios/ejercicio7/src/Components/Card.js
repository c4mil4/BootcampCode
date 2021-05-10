import React from 'react'

export default function Card({ movies }) {

  // const removeContact = original_title => {
  //   return () => setMovies(movies.filter(movie => theMovie.original_title !== original_title))
  // }

  // return (
  //   <div>
  //     {console.log(movies)}
  //   </div>
  // )
  return (
    <div className="row">
      {movies.map(theMovie => {
        return (
            <div className="card mt-5 p-3 col-4">
              <img src={"https://image.tmdb.org/t/p/original/" + theMovie.poster_path} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{theMovie.original_title}</h5>
                <p className="card-text">{theMovie.overview}</p>
                <a href="" className="btn btn-primary">Leer más</a>
              </div>
            </div>
        );
      })}
    </div>
  )
}
