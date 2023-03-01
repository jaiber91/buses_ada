import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import DetailsBooking from '../pages/detailsBooking/DetailsBooking';
import NotFound from '../components/notFound/NotFound';

const RoutesAda = () => {
    return (
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Cancellations" element={<Booking/>} />
        <Route path="/detailsbooking" element={<DetailsBooking/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  
  export default RoutesAda;

