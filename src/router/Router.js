import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Booking from '../pages/booking/Booking';
import DetailsBooking from '../pages/detailsBooking/DetailsBooking';

const RoutesAda = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking/>} />
        <Route path="/detailsbooking" element={<DetailsBooking/>} />
      </Routes>
    );
  };
  
  export default RoutesAda;

