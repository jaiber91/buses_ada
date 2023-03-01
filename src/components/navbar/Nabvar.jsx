import React from 'react';
import './Navbar.css'
import imgBus from '../../assets/img/bus.png';
import shoppingCar from '../../assets/icons/shoppingCar.png';

const Navbar = () => {
    return ( 
        <>
        <nav className='navbar'>
            <img src={imgBus} alt="logo" />
            <ul className='navbar__items'>
                <li>quienes somos</li>
                <li>cancelaciones</li>
                <li>rutas</li>
                <li>ayuda</li>
                <img src={shoppingCar} alt="shoping car" />
            </ul>


        </nav>
        
        </>
     );
}
 
export default Navbar;