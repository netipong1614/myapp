import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
    
  <form>
  <label>
    Name :
    <input type="text" name="name" />
  </label>
  <label><br/>
    Password :
  <input type="password" name="password" />
  </label><br/>
  <input type="submit" value="Submit" />

 

</form>
      </div>
    );
  }
}

export default App;
