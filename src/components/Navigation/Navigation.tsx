import WebLogo from '../../assets/images/logo.svg';
import '../../assets/styles/Navigation.modulemin.css';

export default function Navigation() {
    return (
        <nav className='b-navigation'>
            <div className='b-navigation__logo'>
                <img src={WebLogo} alt="Website Logo" />
            </div>
            <ul className='b-navigation__list'>
                <li className='b-navigation__item'><a href="#">About</a></li>
                <li className='b-navigation__item'><a href="#">Careers</a></li>
                <li className='b-navigation__item'><a href="#">Events</a></li>
                <li className='b-navigation__item'><a href="#">Products</a></li>
                <li className='b-navigation__item'><a href="#">Support</a></li>
            </ul>
            <button>Button</button>
        </nav>
    );
}
