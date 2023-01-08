import { Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './structure/Home';
import Users from './structure/Users';
import Categories from './structure/Categories';
import Ingredients from './structure/Ingredients';
import User from './structure/User';
import Category from './structure/Category';
import Ingredient from './structure/Ingredient';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Домой</Link>
        <Link to='/users'>Пользователи</Link>
        <Link to='/categories'>Категории</Link>
        <Link to='/ingredients'>Ингредиенты</Link>
      </nav>
      <Switch>
        <Route path='/users/:id'>
          <User />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/categories/:id'>
          <Category />
        </Route>
        <Route path='/categories'>
          <Categories />
        </Route>
        <Route path='/ingredients/:id'>
          <Ingredient />
        </Route>
        <Route path='/ingredients'>
          <Ingredients />
        </Route>
        <Route path='/recipe/:id'>
          <Recipe />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
