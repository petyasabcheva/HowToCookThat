import './RecipeCategories.css'
import {NavLink} from 'react-router-dom';
import './RecipeCategories.css'

const RecipeCategories = () => {

    return (
        <nav className="recipe-categories-menu">
            <ul>
            <li><NavLink  activeClassName="nav-link-selected" to="/recipes/all">All</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/recipes/soups">Soups</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/recipes/salads">Salads</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/recipes/mains">Mains</NavLink></li>
                <li><NavLink activeClassName="nav-link-selected" to="/recipes/deserts">Deserts</NavLink></li>
            </ul>
        </nav>

    )
}

export default RecipeCategories;