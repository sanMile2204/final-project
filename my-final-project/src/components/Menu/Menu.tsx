import './Menu.css';
import logo from '../../assets/Logo.png';
import { useState } from 'react';

export default function Menu({onClick}: {onClick: () => void}) {

    return (
        <header>
            <nav>
                <div className='main-logo'>
                    <a href='/'><img src={logo} alt="logo"></img></a>
                </div>
                <ul>
                    <li><a className='active' href="/overview">Overview</a></li>
                    <li><a href="/contacts">Contacts</a></li>
                    <li><a href="/favorites">Favorites</a></li>
                    <li className="add-button"><button onClick={onClick}>+ NEW</button></li>
                </ul>
            </nav>
        </header>
    );
}