import './RecipeCategories.css'
import {NavLink} from 'react-router-dom'

const RecipeCategories = () => {

    return (
        <nav className="recipe-categories-menu">
            <ul>
                <li><NavLink>Soups</NavLink></li>
                <li><NavLink>Salads</NavLink></li>
                <li><NavLink>Mains/</NavLink></li>
                <li><NavLink>Deserts/</NavLink></li>
            </ul>
        </nav>

    )
}

export default RecipeCategories;