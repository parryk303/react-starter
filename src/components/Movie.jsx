import React from "react";
import MovieMetaData from "./MovieMetaData.jsx";

const Movie = (props) => {
  return (
    <div className="lines">
      <div className={`${props.movie.selected ? "greenbtn" : ""} p2-a`}
        onClick={() => props.toggleSelected(props.movie)}>
        {props.movie.title}
      </div>
      <div className={props.movie.selected ? "" : "hide"}>
        <MovieMetaData movie={props.movie} toggleWatched={props.toggleWatched}/>

      </div>


    </div>
  );
};

export default Movie;

// End of sprint

// import React from 'react';

// const Movie = function({movie, watchHandler}) {
//     if (movie.watched) {
//         return (
//             <div className='movie'>{movie.title} <button className='watchedButtonSelected' onClick={watchHandler}>Watched</button></div>
//         )
//     }
//     return (
//         <div className='movie'>{movie.title} <button className='watchedButton' onClick={watchHandler}>Watched</button></div>
//     )
// }

// export default Movie;