import React from 'react';
import './header.scss';
import { HiDotsVertical } from "react-icons/hi";



const Header = () => {

    return(
    <div className='header'>
        <div className='left'>
             <a href='#' className='logo'>Tracklist</a>
        </div>
        <div className='right'>
            <div className='login'>
                <a href='#' className='login-button solid-button'>LOGIN</a>
            </div>
            <div className='settings-btn'>
                <HiDotsVertical className='dots' />
            </div>
        </div>
    </div>
    );
}

export default Header;