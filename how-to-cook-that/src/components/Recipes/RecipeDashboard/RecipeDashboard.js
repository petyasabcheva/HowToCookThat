import RecipeList from '../RecipeList/RecipeList'
import RecipeCategories from '../RecipeCategories/RecipeCategories'
import './RecipeDashboard.css'

const Component=({
    match,
})=>{
    return(
        <section className="recipe-dashboard-section">
            <RecipeCategories/>
            <RecipeList currentCategory={match.params.category}/>
        </section>
    )} 

export default Component;