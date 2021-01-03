import React from 'react';
const baseImgURL = 'https://image.tmdb.org/t/p/w500'

let MovieInfo = function({movie, watchHandler}) {
  let [overview, rating, releaseDate, imgPath] = movie.info;
  return (
    <div id='movieInfo'>
      <img src={baseImgURL + imgPath} id="thumbnail"></img>
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