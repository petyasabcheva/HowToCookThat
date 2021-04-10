import { Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RecipeDashboard from './components/Recipes/RecipeDashboard/RecipeDashboard';
import RecipeDetails from './components/Recipes/RecipeDetails/RecipeDetails';
import CreateRecipe from './components/Recipes/CreateRecipe/CreateRecipe';
import EditRecipe from './components/Recipes/EditRecipe/EditRecipe';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import MyRecipesDashboard from './components/Recipes/MyRecipesDashboard/MyRecipesDashboard';
import { auth } from './utils/firebase';
import './utils/firebase';
import { useEffect, useState } from 'react';
import AuthContext from './contexts/AuthContext';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(setUser)
  }, []);

  const authInfo = {
    isAuthenticated: Boolean(user),
    email: user?.email,
  };

  return (
    <div className="App">
      <AuthContext.Provider value={authInfo}>
        <Header userEmail={user?.email} isAuthenticated={Boolean(user)} />
        <main className='main-section'>
          <Switch>
            <Route path="/" exact component={RecipeDashboard} />
            <Route path="/recipes" exact component={RecipeDashboard} />
            <Route path="/recipes/:category" exact component={RecipeDashboard} />
            <Route path="/my-recipes" exact component={MyRecipesDashboard} />
            <Route path="/recipes/details/:id" exact component={RecipeDetails} />
            <Route path="/recipe/create" exact component={CreateRecipe} />
            <Route path="/recipe/edit/:id" exact component={EditRecipe} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/logout" render={props => {
              auth.signOut();
              return <Redirect to="/" />
            }} />
          </Switch>
        </main>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
