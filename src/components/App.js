import React from 'react';
import CSS from '../main.css';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
    <div id='page'>
      <h1>Kyle's Movie List</h1>
        <div>
          <a>Mean Girls</a>
          <a>Hackers</a>
          <a>The Grey</a>
          <a>Sunshine</a>
          <a>Ex Machina</a>
        </div>
    </div>
  )}
}

export default App;
