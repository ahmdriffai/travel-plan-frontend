import React from 'react';
import {
  useJsApiLoader, GoogleMap, Marker, DirectionsRenderer,
} from '@react-google-maps/api';
import CONFIG from '../globals/config';

export default function MapDirection({ lat, lng }) {
  const containerStyle = {
    width: '70%',
    height: '400px',
  };

  const center = {
    lat,
    lng,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: CONFIG.GOOGLE_MAP_API,
    libraries: ['places'],
  });

  if (!isLoaded) {
    return <p>Loading</p>;
  }

  return (
    <GoogleMap center={center} zoom={15} mapContainerStyle={containerStyle}>
      <Marker position={center} />
      <DirectionsRenderer />
    </GoogleMap>
  );
}
