import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuItem({ name, icon }) {
  return (
    <div className="flex flex-col w-20 items-center mr-10 ml-3">
      <Link to="/">
        <div className="text-lg p-5 text-white m-3 rounded-xl bg-primary">
          {icon}
        </div>
        <h3 className="text-sm font-bold wrap text-center">{name}</h3>
      </Link>
    </div>
  );
}
