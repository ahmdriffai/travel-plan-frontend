import React from 'react';
import PlaceItem from './PlaceItem';

export default function PlaceList({ places }) {
  return (
    <div className="grid m-10 lg:grid-cols-4 sm:grid-cols-2 gap-7">
      {
        places.map((place, i) => (
          <PlaceItem key={i} place={place} />
        ))
      }
    </div>
  );
}
