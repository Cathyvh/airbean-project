
import './style.css';

import About from './comps/About'
import Status from './comps/Status'
import Profile from './comps/Profile'
import LoginForm from './comps/Login'
import Menu from './comps/Menu'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Products from "./comps/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Menu />
        <Switch>
          <Route exact path="/">
            <LoginForm />
          </Route>
          <Route path="/menu">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/status" >
            <Status />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
