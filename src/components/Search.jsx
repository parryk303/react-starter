import React from 'react';

const Search = function({searchHandler}) {
    return (
        <div id='search'>
            <input id='searchBar' type='text' placeholder="Search..."></input>
            <button id='searchButton' onClick={searchHandler}>Go!</button>
        </div>
    )
}

export default Search;