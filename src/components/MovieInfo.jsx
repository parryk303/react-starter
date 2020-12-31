import React from 'react';

let MovieInfo = function({movie, watchHandler}) {
  let [overview, rating, releaseDate] = movie.info;
  return (
    <div id='movieInfo'>
      <b>Description:</b> {overview} <br></br>
      <b>Release Date: </b> {releaseDate} <br></br>
      <b>Rating</b>: {rating} <br></br>
      <b>Watched: </b>
      <input type='radio' className={movie.watched ? 'filledCir' : 'openCir'} checked={movie.watched} onChange={() => watchHandler(movie)}
      />
    </div>
  )
}

export default MovieInfo;