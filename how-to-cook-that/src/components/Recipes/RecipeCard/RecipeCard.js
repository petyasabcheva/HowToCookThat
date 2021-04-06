import './RecipeCard.css'
import {Link} from 'react-router-dom';

const RecipeCard = (
    { id,
        name,
        imageUrl, }
) => {
    return (
        <Link to={`/recipes/details/${id}`}>
        <li className="recipe-wrapper">
            <img src={imageUrl} alt="" />
            <h3 className="recipe-name">
                {name}
            </h3>
        </li></Link>
    )
}

export default RecipeCard;