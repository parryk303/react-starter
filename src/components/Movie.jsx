import React from 'react';
import MovieInfo from './movieInfo.jsx';

class Movie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showDetails: false
    }
    this.onClicked = this.onClicked.bind(this);
  }
  onClicked() {
    this.setState((state) => {
        return {showDetails: !state.showDetails}
    })
}

  render() {
    return (
      <div className='movie' onClick={this.onClicked}> {this.props.movie.title}
          {this.state.showDetails && <MovieInfo movie={this.props.movie} watchHandler={this.props.watchHandler}/>}
      </div>
    )
  }
}

export default Movie;
