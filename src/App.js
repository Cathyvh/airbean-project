
import './style.css';
import Menu from './comps/Menu'
import About from './comps/About'
import Status from './comps/Status'
import Profile from './comps/Profile'
import LoginForm from './comps/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './comps/Cart';
import Products from "./comps/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Cart />
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
