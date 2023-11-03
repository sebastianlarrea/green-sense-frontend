import React from 'react';
import { ConnectionState } from '../ConnectionState';
import { HiOutlineLogout } from 'react-icons/hi'

import './index.scss';

const Header = ({ isConnected, menu }) => {

    const onLogout = () => {
        localStorage.removeItem('token');
        window.location.assign('/');
    };

    return <header className='header'>
        <div className='header__main'>
            <h1 className='header__title'>Green Sense</h1>
            <ConnectionState isConnected={ isConnected } />
        </div>
        <nav className='header__nav'>
            <ul className='header__nav-menu'>
                { menu.map (({ href, caption }) => 
                    <li className='header__nav-item'>
                        <a className='header__nav-link' href={href}>{caption}</a>
                    </li>
                )}
            </ul>
        </nav>
        <button
            onClick={onLogout}
            className='header__logout'
        >
            Log out
            <HiOutlineLogout size={25} />
        </button>
    </header>
};

export default Header;