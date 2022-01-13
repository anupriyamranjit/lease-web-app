import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import teslaData from "../../data/tesla-sites.json"

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


const filteredStations = teslaData.filter(tesla => tesla.address.country === "Italy")
function Map() {
  console.log(teslaData);

  return (
    <MapContainer center={[42.58544, 13.257684]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {filteredStations.map(tesla => (
        <Marker 
        key = {tesla.id}
        position={[ tesla.gps.latitude, tesla.gps.longitude]}>

          <Popup position={[ tesla.gps.latitude, tesla.gps.longitude]}>
            <div>
              <h2>{"Name:" + tesla.name}</h2>
              <p>{"Status:" + tesla.status}</p>
            </div>

          </Popup>

        </Marker>))}
    </MapContainer>
  );
}

export default Map;