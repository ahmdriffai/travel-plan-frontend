import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import CONFIG from '../globals/config';

export default function MapMarker({ lat, lng }) {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };
  const center = {
    lat,
    lng,
  };

  const position = {
    lat,
    lng,
  };

  const onLoad = (marker) => {
    console.log('marker: ', marker);
  };
  return (
    <LoadScript
      googleMapsApiKey={CONFIG.GOOGLE_MAP_API}
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
