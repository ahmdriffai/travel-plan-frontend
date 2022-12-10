import React from 'react';
import { MdTravelExplore } from 'react-icons/md';
import MenuItem from './MenuItem';

export default function MenuList() {
  const menus = [
    { name: 'Wisata Pertanian', icon: <MdTravelExplore size={40} /> },
    { name: 'Penginapan', icon: <MdTravelExplore size={40} /> },
    { name: 'Wisata Sejarah', icon: <MdTravelExplore size={40} /> },
  ];
  return (
    <div>
      <h2 className="mt-5 ml-4 font-bold text-lg">Menu</h2>
      <div className="flex w-ful mt-2 justify-start items-start flex-wrap">
        {
          // eslint-disable-next-line react/no-array-index-key
          menus.map((menu, i) => (<MenuItem icon={menu.icon} name={menu.name} key={i} />))
        }
      </div>
    </div>
  );
}
