import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeDashboard from './components/Recipes/RecipeDashboard/RecipeDashboard';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={RecipeDashboard} />
        <Route path="/recipes" exact component={RecipeDashboard} />
        <Route path="/recipes/:category" exact component={RecipeDashboard} />\
        <Route path="/recipes/details/:id" exact component={RecipeDetails} />
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
