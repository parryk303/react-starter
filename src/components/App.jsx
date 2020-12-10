import React from 'react';
import Movie from './movie.jsx';
import CSS from '../main.css';
import Search from './search.jsx';
import AddMovie from './addMovie.jsx';
import WatchedTabs from './watchedTabs.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            active: 'All Movies'
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.inputHandler = this.inputHandler.bind(this);
        this.tabHandler = this.tabHandler.bind(this);
        this.watchHandler = this.watchHandler.bind(this);
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
        let newMovie = [{
            title: title,
            show: true,
            watched: false
        }];
        document.querySelector('#inputBar').value = '';
        this.setState((state) => {
            return {movies: state.movies.concat(newMovie)}
        })
    }

    tabHandler(e) {
        let tabs = document.querySelectorAll('.tabs');
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].classList.contains('selectedTab')) {
                tabs[i].classList.remove('selectedTab');
            }
        }
        e.target.classList.add("selectedTab");
        let displayedMovies = this.state.movies.map((movie) => {
            movie.show = true;
            return movie;
        })
        this.setState({movies: displayedMovies, active: e.target.innerHTML});
    }

    watchHandler(e) {
        let title = e.target.parentNode.textContent.replace('Watched', '').trim();
         let watchedMovies = this.state.movies.map((movie) => {
             if (movie.title === title) {
                 movie.watched = !movie.watched
             }
             return movie;
         })
         this.setState({movies: watchedMovies});
     }

    render() {
        return (
          <div id='page'>
            <AddMovie inputHandler={this.inputHandler} showAllHandler={this.showAllHandler}/>
            <div className="tabs" id="watchedTab" onClick={this.tabHandler}>Watched</div>
            <div className="tabs" id="notWatchedTab" onClick={this.tabHandler}>Not Watched</div>
            <div className="selectedTab" id="allTab" onClick={this.tabHandler}>All Movies</div>
            <Search searchHandler={this.searchHandler}/>
            <WatchedTabs active={this.state.active} movies={this.state.movies} watchHandler={this.watchHandler}/>
          </div>
        )
    }
}

export default App;