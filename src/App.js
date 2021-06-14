
import './style.css';
import Menu from './comps/menuComp'
import About from './comps/aboutComp'
import Status from './comps/statusComp'
import Profile from './comps/profileComp'
import LoginForm from './comps/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './comps/CartComp';
import Products from "./comps/ProductList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Cart />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <LoginForm />
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
