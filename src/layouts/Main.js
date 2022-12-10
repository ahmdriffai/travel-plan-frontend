import React from 'react';
import Footer from '../components/Footer';
import Navabr from '../components/Navbar';

export default function Main({ auth, children }) {
  return (
    <>
      <Navabr auth={auth} />
      <div className="main px-20 min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
