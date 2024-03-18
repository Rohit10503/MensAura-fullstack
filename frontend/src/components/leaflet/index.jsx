import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer,TileLayer } from 'react-leaflet';
import "./leaflet.css"




const Leaflet = () => {
    return(
        <MapContainer  center={[51.505, -0.09]} zoom={13}>
            <TileLayer
            attribution= '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
        )
    
}


export default Leaflet;
