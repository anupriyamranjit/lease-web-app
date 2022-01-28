import React, { Component } from 'react';
import './App.css';
import Map from "../src/Components/Map/Map.js";
import SearchBar from './Components/SearchBar/SearchBar';
import Data from "./data/tesla-sites.json";

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='Header'>
          <SearchBar data={Data} />
        </div>
        <div className='Content'>
          <Map></Map>
        </div>
      </div>
    );
  }
}

export default App;