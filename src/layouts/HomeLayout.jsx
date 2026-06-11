import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/partials/Navbar';

const HomeLayout = () => {
  return (
  <main className='dynamic-x-padding'>
    <header>
      <Navbar/>
    </header>
    <main>
      <Outlet/>
    </main>
    </main>
  );
}

export default HomeLayout;