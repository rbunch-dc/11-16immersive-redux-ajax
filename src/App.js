import React, { Component } from 'react';
import logo from './mrbase.png';
import './App.css';
import SearchBar from './containers/SearchBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <SearchBar />

      </div>
    );
  }
}

export default App;
