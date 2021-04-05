import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import * as recipeService from '../../../services/recipeService';


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
            <p className="img"><img src={recipe.imageUrl} /></p>
            <p className="description">{recipe.instructions}</p>
        </section>
    );
};

export default RecipeDetails;