import React from 'react';

export default function PlaceItem({ place }) {
  return (
    <div className="bg-base-100 shadow-xl my-5 cursor-pointer">
      <figure className="rounded"><img src="https://placeimg.com/400/225/arch" alt={place.name} /></figure>
      <div className="p-4">
        <small className="text-xs">{place.rating}</small>
        <h2 className="card-title">
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
        <div className="card-actions justify-end">
          {
            place.categories.map((category) => (
              <div className="badge badge-outline">{category.name}</div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
