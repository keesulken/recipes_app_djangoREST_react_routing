import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function User() {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [recipes, setRecipes] = useState([])
  const url = `http://127.0.0.1:8000/api/categories/${id}/`

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      setItem(result)
      fetch('http://127.0.0.1:8000/api/recipes/')
      .then(response=>response.json())
      .then(result=>{
        for (let i of result){
          if (i.category === url) {
            setRecipes([i])
            // тут спасает, что я знаю, что элемент будет один
            // и я понимаю, что будь их больше, код бы уже не 
            // работал как надо, но опять же, как и в других
            // элементах, не могу понять, почему цикл пробегается
            // несколько раз и в итоговом массиве по 2 
            // экземпляра каждого элемента
          }
        }
      })
    })
  }, [id]);

  if (item) {
    return (
      <div>
        <div>Category {item.name}</div>
        <div>
          {recipes.map(recipe=>(
            <div key={recipe.id}>
              <Link to={'/recipe/'+recipe.id}>{recipe.title.slice(0,20)}</Link>
            </div>
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <h1>Page not found</h1>
    )
  }
}