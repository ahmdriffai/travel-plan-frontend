import React from 'react';
import Footer from '../components/Footer';
import Navabr from '../components/Navbar';
import ListTravelApi from '../data/list-travel-api';

export default function Main({ auth, children }) {
  const [listTrevel, setListTravel] = React.useState([]);

  React.useState(() => {
    ListTravelApi.getListTravel()
      .then((data) => {
        setListTravel(data.data.listTravel);
      });
  });

  return (
    <>
      <Navabr auth={auth} listTravel={listTrevel} />
      <div className="main px-20 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
