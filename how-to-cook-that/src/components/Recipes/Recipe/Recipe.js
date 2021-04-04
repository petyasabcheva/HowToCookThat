import './Recipe.css'
import {Link} from 'react-router-dom';

const Recipe = (
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

export default Recipe;