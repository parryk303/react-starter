import React from 'react';
import Movie from './movie.jsx';
import CSS from '../main.css';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
    }

    searchHandler(e) {
        e.preventDefault();
        const query = document.querySelector('#searchBar').value;
        document.querySelector('#searchBar').value = '';

        const matches = [];
        for (let i = 0; i < this.state.movies.length; i++) {
            const title = this.state.movies[i].title.toLowerCase();
            if (title.includes(query.toLowerCase())) {
                matches.push(this.state.movies[i]);
            }
        }
        if (matches.length === 0) {
            alert('Sorry... it appears there are no movies by that name here');
        } else {
            this.setState({movies: matches})
        }
    }

    inputHandler(e) {
        let title = document.querySelector('#inputBar').value;
        let newMovie = [{title: title}];
        document.querySelector('#inputBar').value = '';

        this.setState((state) => {
            return {movies: state.movies.concat(newMovie)}
        })
    }

    render() {
        return (
          <div id='page'>
            <AddMovie inputHandler={this.inputHandler}/>
            <Search searchHandler={this.searchHandler}/>
            <div className='container'>
                {this.state.movies.map((movie, idx) => {
                    return <Movie movie={movie.title} key={idx}/>
                })}
            </div>
          </div>
        )
    }
}

export default App;