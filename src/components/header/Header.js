import React from 'react';
import './header.scss';


const Header = () => {

    return(
    <div className='header'>
        <a href='#' className='logo'>Tracklist</a>
        <div className='login'>
            <a href='#' className='login-button solid-button'>LOGIN</a>
        </div>
    </div>
    );
}

export default Header;