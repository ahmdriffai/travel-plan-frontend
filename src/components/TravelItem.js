import React from 'react';
import { FaDirections } from 'react-icons/fa';

export default function TravelItem({ place }) {
  const [currentLocLat, setCurrentLocLat] = React.useState(0);
  const [currentLocLng, setCurrentLocLng] = React.useState(0);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocLat(position.coords.latitude);
      setCurrentLocLng(position.coords.longitude);
    });
  }, []);

  return (
    <div className="bg-base-100 shadow-xl my-5 cursor-pointer mx-5">
      <figure className="rounded"><img src="https://placeimg.com/400/225/arch" alt={place.name} /></figure>
      <div className="p-4">
        <h2 className="card-title capitalize">
          {place.name}
        </h2>
        <h2 className="card-title">
          Rp
          {' '}
          {place.price}
        </h2>
        <p className="text-sm">
          {place.location}
        </p>

        <a className="btn btn-outline" href={`https://maps.google.com?saddr=${currentLocLat},${currentLocLng}&daddr=${place.lat},${place.lng}`} target="_blank" rel="noreferrer">
          <FaDirections className="mr-3" size={20} />
          {' '}
          Petunjuk Arah
        </a>
      </div>
    </div>
  );
}
