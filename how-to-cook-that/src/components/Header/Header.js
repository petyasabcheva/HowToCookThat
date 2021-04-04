import './Header.css'
import { Link,NavLink } from 'react-router-dom';


const Header = () => {

    return (
        <header className="site-header">
            <nav className="site-navigation">
                <Link to={`/`} className="navigation-logo"> 
                    <img src="/soup.svg" alt="" />
                    <p>How to cook that?!</p>
                </Link>
                <ul className="site-navigation-list">
                    <li><NavLink to=''>Recipes</NavLink></li>
                    <li><NavLink to=''>My recipes</NavLink></li>
                    <li><NavLink to=''>Add recipe</NavLink></li>
                    <li><NavLink to=''>Blog</NavLink></li>
                    <li><NavLink to=''>Sign in</NavLink></li>
                </ul>
            </nav>
        </header>

    )
}

export default Header;