import React from 'react';
import { BiMapAlt } from 'react-icons/bi';

export default function ApplicationLogo() {
  return (
    <h1 className="text-xl font-bold flex">
      <span className="text-green-700 mr-2"><BiMapAlt size={25} /></span>
      Tourin Travel.
    </h1>
  );
}
