import React from 'react';
import Filter from '../components/Filter';
import PlaceList from '../components/PlaceList';
import Spiner from '../components/Spiner';
import PlaceApi from '../data/place-api';
import Main from '../layouts/Main';

export default function Search({ auth }) {
  const [searcing, setSearcing] = React.useState(true);
  const [places, setPlaces] = React.useState([]);
  const [category, setCategory] = React.useState('');

  React.useEffect(() => {
    setSearcing(true);
    PlaceApi.getAllPlaces({
      category,
    }).then((data) => {
      setSearcing(false);
      setPlaces(data.data.places);
    });
  }, [category]);

  const categoryChangeHandler = (event) => {
    setCategory(event.currentTarget.value);
  };

  const onSearcing = () => {
    if (searcing) {
      return (
        <div className="min-h-screen bg-slate-100 m-10 w-full flex justify-center">
          <Spiner />
        </div>
      );
    }

    return (
      <PlaceList places={places} />
    );
  };

  return (
    <Main auth={auth}>
      <div className="flex mt-6 gap-6">
        <Filter value={category} categoryChange={categoryChangeHandler} />
        {onSearcing()}
      </div>
    </Main>
  );
}
