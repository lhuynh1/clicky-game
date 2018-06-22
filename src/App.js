import React, { Component } from 'react';
import DogCard from "./components/DogCard";
import dog from "./dog.json";
import './App.css';

class App extends Component {
  state = {
    dog,
    clickedDog: [],
    score: 0
  };

  clicked
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to the memory game.</h1>
          <p>Featuring Dogs in Food! Check out the awesome instagram page here: 
              <a href="https://www.instagram.com/dogs_infood/?hl=en"> @dogs_infood</a>
          </p>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
