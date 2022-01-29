import React, { useState } from 'react';
import './App.css';
import Map from "../src/Components/Map/Map.js";
import SearchBar from './Components/SearchBar/SearchBar';
import Data from "./data/tesla-sites.json";
import { FilterComponent } from './Components/Filters/Filters';
import { Box } from '@mui/system';

function App() {
    return (
      <div className='App'>
        <div className='Header'>
          <SearchBar data={Data} />
        </div>
        <div className='Filter'>
          { false && <FilterComponent data={Data} /> }
        </div>
        <div className='Content'>
          <Box width={700}>
          <Map />
          </Box>
        </div>
        </div>
    );
  }

export default App;