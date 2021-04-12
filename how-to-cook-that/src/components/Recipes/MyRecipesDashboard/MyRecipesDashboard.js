import RecipeCard from '../RecipeCard/RecipeCard'
import AuthContext from '../../../contexts/AuthContext';
import {useEffect,useState,useContext} from 'react'
import * as recipeService from '../../../services/recipeService';


const MyRecipesDashboard=({
    match,
})=>{
    const { isAuthenticated, email } = useContext(AuthContext);
    let [recipes, setRecipes] = useState([]);

    useEffect(() =>{
        console.log(email);
        recipeService.getByUser(email).then(res => setRecipes(res)).catch(error => console.log(error));
    },[]);

    return(
        <section className="recipe-dashboard-section">
            <ul className="recipe-list">
                {recipes.map(x =>
                    <RecipeCard 
                        key={x.id}
                        {...x}
                    />
                )
                }
            </ul>
        </section>
    )} 

export default MyRecipesDashboard;