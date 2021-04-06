import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as recipeService from '../../../services/recipeService';
import './RecipeDetails.css'


const RecipeDetails = ({
    match
}) => {
    let [recipe, setRecipe] = useState({});

    useEffect(() => {
        recipeService.getOne(match.params.id)
            .then(res => setRecipe(res));
    },[]);


    return (
        <section className="recipe-details-wrapper">
            <h3>{recipe.name}</h3>
            <p>Preparation: {recipe.preparationTime} min | Cooking: {recipe.cookingTime} min</p>
            <p className="img"><img src={recipe.imageUrl} alt="recipePhoto"/></p>
            <p className="description">{recipe.instructions}</p>
            <div className="controll-recipe-buttons">
            <Link to="" className="button">Like recipe</Link>
            <Link to={`/recipe/edit/${recipe.id}`}  className="button">Edit recipe</Link>
            <Link to={`/recipe/delete/${recipe.id}`}  className="button">Delete recipe</Link>
            </div>
        </section>
    );
};

export default RecipeDetails;