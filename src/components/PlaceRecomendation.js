/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import PlaceItem from './PlaceItem';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', background: 'gray' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (

    <div
      className={className}
      style={{
        ...style, display: 'block', background: 'gray', color: 'red',
      }}
      onClick={onClick}
    />
  );
}
export default function PlaceRecomendation({ places, displayName }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-16">
      <h2 className="mt-5 ml-4 font-bold text-xl my-3">
        Rekomendasi
        {' '}
        {displayName}
        <Link to="/search" className="text-sm ml-4 font-bold text-purple-700 hover:text-purple-900">Lihat Semua</Link>
      </h2>
      <Slider {...settings} className="bg-slate-200 rounded-lg">
        {
        places.map((place) => (
          <Link to={`/place/${place.id}`}>
            <PlaceItem place={place} key={place.id} />
          </Link>
        ))
      }
      </Slider>
    </div>
  );
}
