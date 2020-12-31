import React from 'react';

const AddMovie = function({inputHandler}) {

    return (
        <div id="inputField">
            <input id="inputBar" type="text" placeholder="Add a movie here"></input>
            <button id="inputButton" onClick={inputHandler}>Add Movie</button>
        </div>
    );
}

export default AddMovie