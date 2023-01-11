import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function User() {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const url = `http://127.0.0.1:8000/api/users/${id}/`;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      setItem(result)
      fetch('http://127.0.0.1:8000/api/recipes/')
      .then(response=>response.json())
      .then(result=>{
        for (let i of result){
          if (i.author === url) {
            setRecipes(recipes=>[...recipes, i])
          }
        }
      })
    })
  }, [id]);

  if (item) {
    let subList = [];
    let size = recipes.length / 2;
    for (let i = 0; i<size; i++){
      subList.push(recipes[i])
    };
    // Помогите мне пожалуйста, я не понимаю почему массив 
    // рецептов наполняется дважды и мне приходится писать 
    // страшные костыли вроде 5 строк кода выше 
    return (
      <div>
        <h2>{item.username}</h2>
        <div>
          {subList.map(subListItem => (
            <Link to={'/recipe/' + subListItem.id} 
            key={subListItem.id}>
              /{subListItem.title.slice(0,20)}/
            </Link>
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
