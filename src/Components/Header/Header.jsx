import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./navbar_logo.png";
import {FiSearch} from 'react-icons/fi'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="logos" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Tv Shows</Link>
                <Link to="/">Movies</Link>
                <Link to="/">Recently Added</Link>
                <Link to="/">My List</Link>
            </div>
            <FiSearch/>
        </div>
    )
}

export default Header 
