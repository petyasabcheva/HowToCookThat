import RecipeList from '../RecipeList/RecipeList'
import RecipeCategories from '../RecipeCategories/RecipeCategories'
import './RecipeDashboard.css'

const Component=()=>{
    return(
        <section className="recipe-dashboard-section">
            <RecipeCategories/>
            <RecipeList/>
        </section>
    )} 

export default Component;