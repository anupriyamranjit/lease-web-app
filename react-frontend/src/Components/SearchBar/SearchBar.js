import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/CancelOutlined';
import "./SearchBar.css";


function SearchBar({ data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [inputEntered, setInputEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setInputEntered(searchWord);
        const filteredArray = data.filter(place => place.name.toLowerCase().includes(searchWord.toLowerCase()));
        searchWord === "" ? setFilteredData([]) : setFilteredData(filteredArray);
    }

    const clearSearch = () => {
        setFilteredData([]);
        setInputEntered("");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar >
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        LEASING APP
                    </Typography>
                    <div className='Search'>
                        <div className='SearchInput'>
                            <input
                                type='text'
                                placeholder="Enter a location..."
                                value={inputEntered}
                                onChange={handleFilter} />
                            <div className='SearchIcon'>
                                {filteredData.length === 0 ? <SearchIcon /> : <ClearIcon id="clearButton" onClick={clearSearch} />}
                            </div>
                        </div>
                        {filteredData.length !== 0 && (
                            <div className='DataResults'>
                                {filteredData.slice(0, 15).map((location) => {
                                    return <a className='DataItem'
                                        href={`https://www.google.ca/maps/search/${location.gps.latitude},${location.gps.longitude}`}
                                        target="_blank" rel="noreferrer">
                                        <p>{location.name}</p>
                                    </a>
                                })}
                            </div>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default SearchBar;