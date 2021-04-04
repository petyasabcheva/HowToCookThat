import './Header.css'
import {NavLink} from 'react-router-dom';


const Header = () => {

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <div className="navigation-logo">
                    <img src="soup.svg" alt="" />
                    <p>How to cook that?!</p>
                </div>
                <ul className="site-navigation-list">
                    <li><NavLink to=''>Recipes</NavLink></li>
                    <li><NavLink to=''>My recipes</NavLink></li>
                    <li><NavLink to=''>Blog</NavLink></li>
                    <li><NavLink to=''>Sign in</NavLink></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;