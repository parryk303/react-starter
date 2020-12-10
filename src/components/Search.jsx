import React from 'react';

let Search = function({searchHandler}) {
    return (
        <div id='search'>
            <input id='searchBar' type='text'></input>
            <button id='searchButton' onClick={searchHandler}>Go!</button>
        </div>
    )
}

export default Search;