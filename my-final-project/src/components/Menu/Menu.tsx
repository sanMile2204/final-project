import './Menu.css';
import logo from '../../assets/Logo.png';
import { NavLink } from 'react-router-dom';

export default function Menu({onClick}: {onClick: () => void}) {

    return (
        <header>
            <nav>
                <div className='main-logo'>
                    <NavLink to="/overview"><img src={logo} alt="logo"></img></NavLink>
                </div>
                <ul>
                    <li><NavLink to="/overview">Overview</NavLink></li>
                    <li><NavLink to="/contacts">Contacts</NavLink></li>
                    <li><NavLink to="/favorites">Favorites</NavLink></li>
                    <li className="add-button"><button onClick={onClick}>+ NEW</button></li>
                </ul>
            </nav>
        </header>
    );
}