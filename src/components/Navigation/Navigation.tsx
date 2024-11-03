import { useState } from 'react';
import closeIcon from '../../assets/images/icon-close.svg';
import hamburger from '../../assets/images/icon-hamburger.svg';
import '../../assets/styles/Navigation.modulemin.css';
import WebLogo from './WebLogo';

export default function Navigation() {
    const [showNav, setShowNav] = useState(false);

    return (
        <nav className='b-navigation'>
            <WebLogo/>
            <ul className={`b-navigation__list ${showNav ? "show" : ""}`}>
                <div className='b-navigation__list__header'>
                    <WebLogo/>
                    <button onClick={()=> setShowNav(!showNav)}>
                        <img src={closeIcon} alt="" />
                    </button>
                </div>
                <li className='b-navigation__item'><a href="#">About</a></li>
                <li className='b-navigation__item'><a href="#">Careers</a></li>
                <li className='b-navigation__item'><a href="#">Events</a></li>
                <li className='b-navigation__item'><a href="#">Products</a></li>
                <li className='b-navigation__item'><a href="#">Support</a></li>
            </ul>
            <button onClick={()=> setShowNav(!showNav)}>
                <img src={hamburger} alt="" />
            </button>
        </nav>
    );
}
