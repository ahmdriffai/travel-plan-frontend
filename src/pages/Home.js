import React from 'react';
import Hero from '../components/Hero';
import Main from '../layouts/Main';
import MenuList from '../components/MenuList';
import PlaceApi from '../data/place-api';
import PlaceRecomendation from '../components/PlaceRecomendation';

export default function Home({ auth }) {
  const [wisata, setWisata] = React.useState([]);

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log('Latitude is :', position.coords.latitude);
      console.log('Longitude is :', position.coords.longitude);
    });

    PlaceApi.gatAllByCategory({
      category: 'wisata',
    })
      .then((data) => {
        setWisata(data.data.places);
      });
  }, []);

  return (
    <Main auth={auth}>
      <Hero />
      <MenuList />
      <PlaceRecomendation places={wisata} displayName="Wisata" />
      <PlaceRecomendation places={wisata} displayName="Penginapan" />
    </Main>
  );
}
