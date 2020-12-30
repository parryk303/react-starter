import React from "react";
import MovieList from "./MovieList.jsx";
import FormInput from "./FormInput.jsx";
import "../main.css";

let movies = [{
  title: "Mean Girls",
  year: 2000,
  runtime: 100,
  metascore: 4,
  imdbRating: 5,
  watched: true,
  selected: false
},
{
  title:"Nice Girls",
  year: 2005,
  runtime: 200,
  metascore: 1,
  imdbRating: 5,
  watched: true,
  selected: true
}]

class App extends React.Component {
  constructor(props) {
    super(props);
    let filtered = movies.filter(movie => movie.watched)
    this.state = {
      searchResults: filtered,
      allMovies: movies,
      showWatched: true
    };

    this.filterMovie = this.filterMovie.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.toggleWatched = this.toggleWatched.bind(this);
    this.updateWatchBtns = this.updateWatchBtns.bind(this);
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
  }

  filterMovie(search="") {
    let results = this.state.allMovies.filter(movie =>{
      return movie.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 && movie.watched === this.state.showWatched});
    this.setState({searchResults: results});
  }

  addMovie(movie) {
    this.setState({
      allMovies: [...this.state.allMovies, {title: movie, watched: true}]
    }, ()=> {this.filterMovie()});
  }

  toggleWatched(selectedMovie) {
    let newState = this.state.allMovies.map(movie => {
      if (movie === selectedMovie) {
        return {...movie, watched: !movie.watched};
      }
      return movie;
    });

    this.setState({allMovies: newState}, () => this.filterMovie());

  }

  updateWatchBtns(shouldShow) {
    this.setState({showWatched:shouldShow}, () => this.filterMovie());
  }

  toggleSelected(selectedMovie) {
    let newState = this.state.allMovies.map(movie => {
      if (movie === selectedMovie) {
        return {...movie, selected: !movie.selected};
      }
      return movie;
    });
    this.setState({allMovies: newState},() => this.filterMovie());

  }

  render(){
    return(
    <div>
      <div className="navbar"><h1>Kyle's Movie List</h1></div>
      <div className="m-rl">
        <FormInput
          placeholderText="Add movie title here"
          btnClass="greenbtn"
          btnText="Add"
          fn={this.addMovie}
        />
        <span>
          <button
            onClick={() => this.updateWatchBtns(true)}
            className={`p1-a ${this.state.showWatched ? "greenbtn" : ""}`}>Watched</button>
          <button
            onClick={() => this.updateWatchBtns(false)}
            className={`p1-a ${!this.state.showWatched ? "redbtn" : ""}`}>To Watch</button>
        </span>
        <span className="inline">
          <FormInput
            placeholderText="Search..."
            btnText="Go!"
            fn={this.filterMovie}
          />
        </span>
        <MovieList
          movies={this.state.searchResults}
          updateWatchBtns={this.updateWatchBtns}
          showWatched={this.state.showWatched}
          toggleWatched={this.toggleWatched}
          toggleSelected={this.toggleSelected}/>
      </div>
    </div>
  )};
}

export default App;

// End of sprint

// import React from 'react';
// import Movie from './movie.jsx';
// import CSS from '../main.css';
// import Search from './search.jsx';
// import AddMovie from './addMovie.jsx';
// import WatchedTabs from './watchedTabs.jsx';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: [],
//             active: 'All Movies'
//         }
//         this.searchHandler = this.searchHandler.bind(this);
//         this.inputHandler = this.inputHandler.bind(this);
//         this.tabHandler = this.tabHandler.bind(this);
//         this.watchHandler = this.watchHandler.bind(this);
//     }

//     searchHandler(e) {
//         e.preventDefault();
//         const query = document.querySelector('#searchBar').value;
//         document.querySelector('#searchBar').value = '';
//         const matches = [];
//         for (let i = 0; i < this.state.movies.length; i++) {
//             const title = this.state.movies[i].title.toLowerCase();
//             if (title.includes(query.toLowerCase())) {
//                 matches.push(this.state.movies[i]);
//             }
//         }
//         if (matches.length === 0) {
//             alert('Sorry... it appears there are no movies by that name here');
//         } else {
//             this.setState({movies: matches})
//         }
//     }

//     inputHandler(e) {
//         let title = document.querySelector('#inputBar').value;
//         let newMovie = [{
//             title: title,
//             show: true,
//             watched: false
//         }];
//         document.querySelector('#inputBar').value = '';
//         this.setState((state) => {
//             return {movies: state.movies.concat(newMovie)}
//         })
//     }

//     tabHandler(e) {
//         let tabs = document.querySelectorAll('.tabs');
//         for (let i = 0; i < tabs.length; i++) {
//             if (tabs[i].classList.contains('selectedTab')) {
//                 tabs[i].classList.remove('selectedTab');
//             }
//         }
//         e.target.classList.add("selectedTab");
//         let displayedMovies = this.state.movies.map((movie) => {
//             movie.show = true;
//             return movie;
//         })
//         this.setState({movies: displayedMovies, active: e.target.innerHTML});
//     }

//     watchHandler(e) {
//         let title = e.target.parentNode.textContent.replace('Watched', '').trim();
//          let watchedMovies = this.state.movies.map((movie) => {
//              if (movie.title === title) {
//                  movie.watched = !movie.watched
//              }
//              return movie;
//          })
//          this.setState({movies: watchedMovies});
//      }

//     render() {
//         return (
//           <div id='page'>
//             <AddMovie inputHandler={this.inputHandler} showAllHandler={this.showAllHandler}/>
//             <div className="tabs" id="watchedTab" onClick={this.tabHandler}>Watched</div>
//             <div className="tabs" id="notWatchedTab" onClick={this.tabHandler}>Not Watched</div>
//             <div className="selectedTab" id="allTab" onClick={this.tabHandler}>All Movies</div>
//             <Search searchHandler={this.searchHandler}/>
//             <WatchedTabs active={this.state.active} movies={this.state.movies} watchHandler={this.watchHandler}/>
//           </div>
//         )
//     }
// }

// export default App;