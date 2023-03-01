import React from 'react';
import './Header.css';
import bgImages from '../../assets/img/terminal.jpg';
import Search from '../search/Search'; 

const Header = () => {
    return ( 
        <div className='header'>
            <img src={bgImages} alt="imagen de fondo" />
            <Search />
        </div>
     );
}
 
export default Header;