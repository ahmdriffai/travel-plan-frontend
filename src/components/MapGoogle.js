import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '70%',
  height: '400px',
};

const center = {
  lat: 0,
  lng: -180,
};

const position = {
  lat: 37.772,
  lng: -122.214,
};

const onLoad = (marker) => {
  console.log('marker: ', marker);
};

export default function MapGoogle() {
  return (
    <LoadScript
      googleMapsApiKey="YOUR_API_KEY"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker
          onLoad={onLoad}
          position={position}
        />
      </GoogleMap>
    </LoadScript>
  );
}
