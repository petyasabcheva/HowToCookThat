import './RecipeCategories.css'
import {NavLink} from 'react-router-dom';
import './RecipeCategories.css'

const RecipeCategories = () => {

    return (
        <nav className="recipe-categories-menu">
            <ul>
                <li><NavLink to="/recipes/soups">Soups</NavLink></li>
                <li><NavLink to="/recipes/salads">Salads</NavLink></li>
                <li><NavLink to="/recipes/mains">Mains</NavLink></li>
                <li><NavLink to="/recipes/deserts">Deserts</NavLink></li>
            </ul>
        </nav>

    )
}

export default RecipeCategories;