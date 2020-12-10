import React from 'react';
import Movie from './movie.jsx';

const WatchedTabs = ({active, movies, watchHandler}) => {
  if (movies.length == 0) {
    return <div className='container'>Add a movie title</div>;
} else {
    if (active === 'All Movies') {
        return (
        <div className='containerDefault'>
            {movies.map((movie, idx) => {
                if (movie.show) {
                    return <Movie movie={movie} watchHandler={watchHandler} key={idx}/>
                }
            })
            }
        </div>)
    } else if (active === 'Watched') {
        return (
        <div className='containerWatched'>
            {movies.map((movie, idx) => {
                if (movie.watched && movie.show) {
                    return <Movie movie={movie} watchHandler={watchHandler} key={idx}/>
                }
            })}
        </div>
        )
    } else if (active === 'Not Watched') {
        return (
            <div className='containerNotWatched'>
                {movies.map((movie, idx) => {
                    if (!movie.watched && movie.show) {
                        return <Movie movie={movie} watchHandler={watchHandler} key={idx}/>
                    }
                })}
            </div>
        )
    }
}
}

export default WatchedTabs;