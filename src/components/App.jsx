import React from 'react';
import Movie from './Movie.jsx'
import CSS from '../main.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      movies: [
        {title: 'Mean Girls'},
        {title: 'Hackers'},
        {title: 'The Grey'},
        {title: 'Sunshine'},
        {title: 'Ex Machina'}
      ]
    }
  }
  render() {
    return (
      <div className='container'>
        {this.state.movies.map((movie, index) => {
          return <Movie movie={movie.title} key={index}/>
        })}
      </div>
    )
  }
}

export default App;