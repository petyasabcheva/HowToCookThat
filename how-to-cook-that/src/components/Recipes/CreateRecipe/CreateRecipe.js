import './CreateRecipe.css'
import * as recipeService from '../../../services/recipeService';
import * as categoriesService from '../../../services/categoriesService';
import { useEffect, useState } from 'react';


const CreateRecipe = ({
    history,
}) => {

    let [categories, setCategories] = useState([]);

    useEffect(() => {
        categoriesService.getAll()
        .then(res=>setCategories(res));
    }, []);

    const onCreateRecipeSubmitHandler = (e) => {
        e.preventDefault()
        let recipe={
            name:e.target.name.value,
            category:e.target.category.value,
            imageUrl:e.target.imageUrl.value,
            prepTime:e.target.prepTime.value,
            cookTime:e.target.cookTime.value,
            portions:e.target.portions.value,
            instructions:e.target.instructions.value
        }
        recipeService.create(recipe).then(()=>{
            history.push('/');
        })
    }

    return (
        <section className="create-recipe-section">
            <form onSubmit={onCreateRecipeSubmitHandler}>
                <h2>Add a new recipe</h2>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className="field">
                    <label htmlFor="category">Category</label>
                    <span className="input">
                        <select type="text" name="category">
                            {categories.map(x=>
                               <option
                               key={x.id}
                               value={x.name}>{x.name} </option> )}
                        </select>
                        {/* <span className="actions"></span> */}
                    </span>
                </div>
                <div className="field">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input type="text" name="imageUrl" id="imageUrl" />
                </div>
                <div className="field">
                    <label htmlFor="prepTime">Preparation time /min/</label>
                    <input type="number" name="prepTime" id="prepTime" />
                </div>
                <div className="field">
                    <label htmlFor="portions">Portions count</label>
                    <input type="number" name="portions" id="portions" />
                </div>
                <div className="field">
                    <label htmlFor="cookTime">Cooking time /min/</label>
                    <input type="number" name="cookTime" id="cookTime" />
                </div>
                <div className="field">
                    <label htmlFor="instructions">Instructions</label>
                    <input type="textarea" name="instructions" id="instructions" />
                </div>

                <input className="submit-button" type="submit" value="Add Recipe" />
            </form>
        </section>
    )
}

export default CreateRecipe;