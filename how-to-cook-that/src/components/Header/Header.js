import './Header.css'
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const Header = () => {

    const { isAuthenticated, email } = useContext(AuthContext);
    const showNavbarClickHandler=()=>{
        let navbarElement = document.getElementsByClassName("site-nav-hidden-list-wrapper")[0];
        if (navbarElement.style.display == "") {
            navbarElement.style.display = "none";
        }
    
        if (navbarElement.style.display == "none") {
            navbarElement.style.display = "flex";
        } else {
            navbarElement.style.display = "none";
        }
    }
    return (
        <header className="site-header">
            <nav className="site-navigation">
                <Link to={`/`} className="navigation-logo">
                    <img src="/soup.svg" alt="" />
                    <p>How to cook that?!</p>
                </Link>
                <section className="green-nav-wrapper">
                    <div className="site-nav-list-wrapper">
                        <ul className="site-navigation-list">
                            <li><NavLink activeClassName="header-nav-link-selected" to='/recipes'>Recipes</NavLink></li>
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/my-recipes'>My recipes</NavLink></li>
                                : ''}
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/recipe/create'>Add recipe</NavLink></li>
                                : <li><NavLink to='/login'>Add recipe</NavLink></li>}
                            <li><NavLink activeClassName="header-nav-link-selected" exact to='/articles'>Blog</NavLink></li>
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/articles/create'>Add Article</NavLink></li>
                                : <li><NavLink to='/login'>Add Article</NavLink></li>}
                        </ul>
                        <ul className="login-partial-list">
                            {isAuthenticated
                                ? <li><NavLink to='/logout'>Log out</NavLink></li>
                                : <li><NavLink activeClassName="header-nav-link-selected" to='/login'>Sign in</NavLink></li>}
                        </ul>
                    </div>
                    <div className="menu-hidden">
                        <a className="icon" onClick={showNavbarClickHandler} >
                            <i className="fa fa-bars"></i>
                        </a>
                    </div>
                    <div className="site-nav-hidden-list-wrapper">
                        <ul className="site-navigation-hidden-list">
                            <li><NavLink activeClassName="header-nav-link-selected" to='/recipes'>Recipes</NavLink></li>
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/my-recipes'>My recipes</NavLink></li>
                                : ''}
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/recipe/create'>Add recipe</NavLink></li>
                                : <li><NavLink to='/login'>Add recipe</NavLink></li>}
                            <li><NavLink activeClassName="header-nav-link-selected" exact to='/articles'>Blog</NavLink></li>
                            {isAuthenticated
                                ? <li><NavLink activeClassName="header-nav-link-selected" to='/articles/create'>Add Article</NavLink></li>
                                : <li><NavLink to='/login'>Add Article</NavLink></li>}
                        </ul>
                        <ul className="login-partial-list">
                            {isAuthenticated
                                ? <li><NavLink to='/logout'>Log out</NavLink></li>
                                : <li><NavLink activeClassName="header-nav-link-selected" to='/login'>Sign in</NavLink></li>}
                        </ul>
                    </div>
                </section>

            </nav>
        </header>

    )
}

export default Header;