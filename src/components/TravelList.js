import React from 'react';
import ListTravelApi from '../data/list-travel-api';
import TravelItem from './TravelItem';

export default function TravelList() {
  const [listTravel, setListTravel] = React.useState([]);

  React.useState(() => {
    ListTravelApi.getListTravel()
      .then((data) => {
        setListTravel(data.data.listTravel);
      });
  });

  if (listTravel.length === 0) {
    return (
      <p>List tidak ada</p>
    );
  }

  return (
    <div className="flex w-ful mt-2 justify-start items-start flex-wrap">
      {
        listTravel.map((list) => (
          <TravelItem place={list.place} />
        ))
      }
    </div>
  );
}
