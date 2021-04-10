import RecipeList from '../RecipeList/RecipeList'
import RecipeCategories from '../RecipeCategories/RecipeCategories'
import './RecipeDashboard.css'

const RecipeDashboard=({
    match,
})=>{
    return(
        <section className="recipe-dashboard-section">
            <RecipeCategories/>
            <RecipeList currentCategory={match.params.category}/>
        </section>
    )} 

export default RecipeDashboard;