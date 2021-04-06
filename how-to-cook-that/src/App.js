import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeDashboard from './components/Recipes/RecipeDashboard/RecipeDashboard';
import RecipeDetails from './components/Recipes/RecipeDetails/RecipeDetails';
import CreateRecipe from './components/Recipes/CreateRecipe/CreateRecipe';
import EditRecipe from './components/Recipes/EditRecipe/EditRecipe';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={RecipeDashboard} />
        <Route path="/recipes" exact component={RecipeDashboard} />
        <Route path="/recipes/:category" exact component={RecipeDashboard} />
        <Route path="/recipes/details/:id" exact component={RecipeDetails} />
        <Route path="/recipe/create" exact component={CreateRecipe} />
        <Route path="/recipe/edit/:id" exact component={EditRecipe} />
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
