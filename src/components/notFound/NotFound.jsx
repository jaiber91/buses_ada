import React from 'react';
import img404 from '../../assets/img/24.svg';
import Navbar from '../navbar/Nabvar';
import Footer from '../footer/Footer';


const NotFound = () => {
    return ( 
        <>
        <Navbar />
        <img src={img404} alt="404" />
        <Footer />
        </>
     );
}
 
export default NotFound;