import React from 'react';
import ApplicationLogo from './ApplicationLogo';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import SearchBar from './SearchBar';

export default function Navabr({ auth }) {
  const isLogin = () => {
    if (auth !== null) {
      return (
        <>
          <a className="btn btn-ghost">
            <HiOutlineClipboardList size={28} />
            <span className="bg-red-600 px-1 rounded text-white absolute top-3 ml-8 text-xs">5</span>
          </a>
          <div className="flex items-stretch ml-7 ">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="font-medium cursor-pointer flex items-center justify-between hover:hover:text-purple-800 text-sm md:text-base">
                <span className="mr-2"><FiUser /></span>
                {auth.name}
              </label>
              <ul tabIndex={0} className="menu dropdown-content p-2 shadow-lg border-1 bg-base-100 rounded-box w-52 mt-4">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <span className="text-lg text-gray-500">|</span>
        <Link to="/register" className="ml-3 font-medium hover:text-purple-800">Register</Link>
        <Link to="/login" className="ml-3 font-medium hover:text-purple-800">Login</Link>
      </>
    );
  };

  return (
    <div className="navbar bg-base-100 px-9 py-0 shadow-md">
      <div className="navbar-start flex items-center">
        <Link to="/">
          <ApplicationLogo />
        </Link>
      </div>
      <div className="navbar-center">
        <SearchBar />
      </div>
      <div className="navbar-end">
        {isLogin()}
      </div>
    </div>
  );
}
