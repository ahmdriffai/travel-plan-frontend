import React from 'react';
import { Link } from 'react-router-dom';
import PlaceItem from './PlaceItem';

export default function PlaceList({ places }) {
  return (
    <div className="grid m-10 lg:grid-cols-4 sm:grid-cols-2 gap-7">
      {
        places.map((place, i) => (
          <Link to={`/place/${place.id}`}>
            <PlaceItem key={i} place={place} />
          </Link>
        ))
      }
    </div>
  );
}
