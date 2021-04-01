import {Route, Switch} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello</h1>

      <Switch>
        <Route path="" component="" />
      </Switch>
     <Footer/>
    </div>
  );
}

export default App;
