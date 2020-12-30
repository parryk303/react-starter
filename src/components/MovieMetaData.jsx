import React from 'react';

const MovieMetaData = (props) => {
  return (
    <div className="lines p2-a">

      <ol className="col">
        <li><span className="bold">Year:</span>{props.movie.year}</li>
        <li><span className="bold">Runtime:</span> {props.movie.runtime}</li>
        <li><span className="bold">Metascore:</span> {props.movie.metascore}</li>
        <li><span className="bold">imdbRating:</span> {props.movie.imdbRating}</li>
        <li><span className="bold">Watched:</span> {props.movie.watched}
          <span onClick={() => props.toggleWatched(props.movie)} className={`cir ${props.movie.watched ? "filledcir" : "opencir" }`}></span>
        </li>
      </ol>
      <div className="col">
        <img src="https://lh6.googleusercontent.com/proxy/hIgFSMyx4VsuoQh8h-ZfI3IiK9uFSLZ7pG67H_1RwEBDEPiWX-odcJ0PkWriAPeqwKyC6n-12UTrNmQF2ul9DAjwKMljG3zSCCTDoTVDPexFHV9l_JD5WMbmpnUJqWLqYA=s0-d"/>
      </div>
    </div>
  )
}

export default MovieMetaData;