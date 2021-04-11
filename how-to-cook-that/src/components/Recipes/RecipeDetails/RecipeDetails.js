import { useEffect, useState, useContext } from 'react';
import AuthContext from '../../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import * as recipeService from '../../../services/recipeService';
import './RecipeDetails.css'


const RecipeDetails = ({
    history, match
}) => {
    let [recipe, setRecipe] = useState({});
    const { isAuthenticated, email } = useContext(AuthContext);
    let [likedByUser, setLikedByUser] = useState(false);

    useEffect(() => {
        recipeService.getOne(match.params.id)
            .then(res => setRecipe(res));
        if (isAuthenticated) {
            recipeService.checkIfLiked(match.params.id, email).then(
                res => setLikedByUser(res)
            );
        }
    }, []);

    const onDeleteClickHandler = (e) => {
        recipeService.deleteRecipe(match.params.id)
            .then(() => {
                history.push('/')
            })
    }

    const onLikeClickHandler = (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            if (!likedByUser) {
                recipeService.like(match.params.id, email)
                    .then(() => {
                        setLikedByUser(true);
                    })
            } else {
                recipeService.dislike(match.params.id, email)
                    .then(() => {
                        setLikedByUser(false);
                    })
            }
        } else {
            history.push('/login');
        }
    }


    return (
        <section className="recipe-details-wrapper">
            <h3>{recipe.name}</h3>
            <p>Preparation: {recipe.preparationTime} min | Cooking: {recipe.cookingTime} min</p>
            <p className="img"><img src={recipe.imageUrl} alt="recipePhoto" /></p>
            <p className="description">{recipe.instructions}</p>
            <div className="controll-recipe-buttons">
                {isAuthenticated && recipe.userEmail == email ?
                    <div> <Link to={`/recipe/edit/${recipe.id}`} className="button">Edit recipe</Link>
                        <button className='button' onClick={onDeleteClickHandler}>Delete this recipe</button></div>
                    : <button className="button" onClick={onLikeClickHandler}>{likedByUser ? 'Disike' : 'Like'}</button>}
            </div>
        </section>
    );
};

export default RecipeDetails;