import React, { useState } from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { getDistance } from 'geolib'

export function Filter(props) {
    return (
        <Box width={300}>
            <p>{props.description}</p>
            <Slider 
                value={props.value.values} 
                aria-label="Default" 
                valueLabelDisplay="auto"
                disableSwap
                max={props.max}
                onChange={(e) => props.setValue({inUse: props.value.inUse, values : e.target.value})} />
        </Box>
    )

}

export function FilterComponent({ data }) {
    const [filterWaterloo, setFilterWaterloo] = useState ({inUse: true, values: [0, 10]});
    const [filterBathroom, setFilterBathroom] = useState ({inUse: true, values: [0, 5]});
    const [dataFiltered, setDataFiltered] = useState(data);

    const waterlooLocation = {
        latitude: 43.4723,
        longitude: 80.5449
    }


    // Handle Filtering Distance from Waterloo
    const handleWaterlooFilter = (place) => {
        if(!filterWaterloo.inUse){
            return true
        } 
        const distanceFromWaterloo = getDistance(place.gps, waterlooLocation)/1000
        return distanceFromWaterloo >= filterWaterloo.values[0] && distanceFromWaterloo < filterWaterloo.values[1]
    }
    // Handle Filtering Bathroom
    const handleBathroomFilter = (place) => {
        if(!filterWaterloo.inUse){
            return true
        } 
        return place?.bathroom ? place.bathroom >= filterBathroom.values[0] && place.bathroom  <= filterBathroom.values[1] : false
    }

    const filterArray = [handleWaterlooFilter, handleBathroomFilter]

    const handleFilter = () => {
        const sliced = data.slice(0,10)
        const filteredArray = sliced.filter(place => filterArray.reduce((acc, boolFunc) => { return acc && boolFunc(place)}, true) )
        setDataFiltered(filteredArray)
    }
    
    return (
        <>
        <Filter
            description={`Distance from Waterloo Campus: ${filterWaterloo.values[0]} to ${filterWaterloo.values[1]} km`}
            setValue={setFilterWaterloo}
            value={filterWaterloo}
            max={100}
           />
        <Filter
            description={`Number of Bathrooms: ${filterBathroom.values[0]} to ${filterBathroom.values[1]}`}
            setValue={setFilterBathroom}
            value={filterBathroom}
            max={5}
           />
           <Button onClick={handleFilter} variant="contained"> Search </Button>
        </>
    )

}

