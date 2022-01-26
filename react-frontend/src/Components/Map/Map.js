import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import data from "../../data/locations.json"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const filteredStations = data.filter(data => (data.utilitiesIncluded == true) && data.furnitureProvided == true)
function Map() {
  console.log(data);

  return (
    <MapContainer center={[43.47221, -80.54474]} zoom={15} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredStations.map(location => (
        <Marker 
        key = {location.id}
        position={[ location.gps.latitude, location.gps.longitude]}>

          <Popup position={[ location.gps.latitude, location.gps.longitude]}>
            <div>
              <h2>{location.name}</h2>
              <h3>{"Address: " + location.address.street}</h3>
              <p>{"Bedrooms: " + location.bedrooms}</p>
              <p>{"Washrooms: " + location.washrooms}</p>
              <p>{"Other Amenities: Utility provided, Furniture provided"}</p>

            </div>

          </Popup>

        </Marker>))}
    </MapContainer>
  );
}

export default Map;