import React from 'react';
import Movie from './movie.jsx';
import CSS from '../main.css';
import Search from './search.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [
                {title: 'Mean Girls'},
                {title: 'Hackers'},
                {title: 'The Grey'},
                {title: 'Sunshine'},
                {title: 'Ex Machina'},
            ]
        }
        this.searchHandler = this.searchHandler.bind(this);
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

    render() {
        return (
          <div id='page'>
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