import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './structure/Home';
import Users from './structure/Users';
import Categories from './structure/Categories';
import Ingredients from './structure/Ingredients';
import User from './structure/User';
import Category from './structure/Category';
import Ingredient from './structure/Ingredient';
import Recipe from './structure/Recipe';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>Домой</Link>
        <Link to='/users'>Пользователи</Link>
        <Link to='/categories'>Категории</Link>
        <Link to='/ingredients'>Ингредиенты</Link>
      </nav>
      <Routes>
        <Route path='/users/:id' element={<User />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/categories/:id' element={<Category />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/ingredients/:id' element={<Ingredient />}/>
        <Route path='/ingredients' element={<Ingredients />}/>
        <Route path='/recipe/:id' element={<Recipe />}/>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
