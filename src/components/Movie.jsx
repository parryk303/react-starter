import React from 'react';

let Movie = function({movie, watchHandler}) {
  if (movie.watched) {
    return (
      <div className='movie'>{movie.title} <button className='watchedButtonSelected' onClick={watchHandler}>Watched</button></div>
    )
  }
    return (
        <div className='movie'>{movie.title} <button className='watchedButton' onClick={watchHandler}>Watched</button></div>
    )
}

export default Movie;