
import './style.css';
//import store from './redux'
import Menu from './comps/menuComp'
import About from './comps/aboutComp'
import Status from './comps/statusComp'
import Profile from './comps/profileComp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Coffee from './comps/coffeeComp';
import ProductListing from "./comps/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Menu/>
      
        <Switch>
            <Route exact path="/about"> 
              <About/> 
            </Route>
            <Route path="/" exact component={ProductListing} />
            <Route exact path="/profile"> 
              <Profile/> 
            </Route>
            <Route exact path="/status" > 
              <Status/> 
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
