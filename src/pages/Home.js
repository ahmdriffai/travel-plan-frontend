import React from 'react';
import Hero from '../components/Hero';
import Main from '../layouts/Main';
import MenuList from '../components/MenuList';
import PlaceApi from '../data/place-api';
import PlaceRecomendation from '../components/PlaceRecomendation';

export default function Home({ auth }) {
  const [wisata, setWisata] = React.useState([]);
  const [penginapan, setPenginapan] = React.useState([]);

  React.useEffect(() => {
    PlaceApi.gatAllByCategory({
      category: 'wisata',
    })
      .then((data) => {
        setWisata(data.data.places);
      });
    PlaceApi.gatAllByCategory({
      category: 'wisata',
    })
      .then((data) => {
        setPenginapan(data.data.places);
      });
  }, []);

  return (
    <Main auth={auth}>
      <Hero />
      <MenuList />
      <PlaceRecomendation places={wisata} displayName="Wisata" />
      <PlaceRecomendation places={penginapan} displayName="Penginapan" />
    </Main>
  );
}
