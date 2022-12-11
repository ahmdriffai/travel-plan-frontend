import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MapMarker from '../components/MapMarker';
import PlaceApi from '../data/place-api';
import Main from '../layouts/Main';
import { GrMapLocation, GrLocation } from 'react-icons/gr';
import { FaDirections } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import ListTravelApi from '../data/list-travel-api';

export default function PlaceDetailPage({ auth }) {
  const { id } = useParams();
  const [place, setPlace] = React.useState({});
  const [currentLocLat, setCurrentLocLat] = React.useState(0);
  const [currentLocLng, setCurrentLocLng] = React.useState(0);

  const navigate = useNavigate();

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setCurrentLocLat(position.coords.latitude);
      setCurrentLocLng(position.coords.longitude);
    });
    PlaceApi.getPlaceById(id)
      .then((data) => {
        setPlace(data.data.place);
      });
  }, []);

  const onAddList = async () => {
    if (!auth.id) {
      navigate('/login');
    }

    const response = await ListTravelApi.addListTravel(place.id);
    alert(response.message);
  };

  return (
    <Main auth={auth}>
      <div className="w-3/4 mt-4">
        <div className="text-sm breadcrumbs mt-8">
          <ul>
            <li><Link to="/" className="text-primary">Home</Link></li>
            <li>Place</li>
            <li>{place.name}</li>
          </ul>
        </div>
        <div className="card lg:card-side bg-base-100 border">
          <figure><img src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title capitalize">{place.name}</h2>
            <div className="flex items-center text-sm text-gray-600">
              <GrLocation />
              <p>
                {place.location}
              </p>
            </div>
            <p>{place.description}</p>
            <div className="card-actions justify-start">
              <a className="btn btn-outline" href={`https://maps.google.com?saddr=${currentLocLat},${currentLocLng}&daddr=${place.lat},${place.lng}`} target="_blank" rel="noreferrer">
                <FaDirections className="mr-3" size={20} />
                {' '}
                Petunjuk Arah
              </a>
              <button className="btn btn-primary" onClick={onAddList}>
                <HiOutlineClipboardList className="mr-3" size={25} />
                {' '}
                Tambah List
              </button>
            </div>
          </div>
        </div>
      </div>
      <h2 className="mt-5 ml-4 font-bold text-xl my-3 flex items-center">
        <GrMapLocation size={35} className="mr-4" />
        {' '}
        Map
      </h2>
      <div className="mt-3 border w-3/4 p-5">
        <MapMarker lat={place.lat} lng={place.lng} />
      </div>
    </Main>
  );
}
