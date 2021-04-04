import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import RecipeDashboard from './components/Recipes/RecipeDashboard/RecipeDashboard'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact component={RecipeDashboard} />
        <Route path="/recipes" exact component={RecipeDashboard} />
        <Route path="/recipes/:category" component={RecipeDashboard} />
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
