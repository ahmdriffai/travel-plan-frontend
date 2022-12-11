import React from 'react';
import TravelList from '../components/TravelList';
import Main from '../layouts/Main';

export default function ListTravel({ auth }) {
  return (
    <Main auth={auth}>
      <div className="flex mt-10">
        <TravelList />
      </div>
    </Main>
  );
}
