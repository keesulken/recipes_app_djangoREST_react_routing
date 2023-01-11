import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Ingredient() {
  const {id} = useParams();
  const [item, setItem] = useState(null);
  const [recipes, setRecipes] = useState([])
  const url = `http://127.0.0.1:8000/api/ingredients/${id}/`;

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(result => {
      setItem(result)
      fetch('http://127.0.0.1:8000/api/recipes/')
      .then(response=>response.json())
      .then(result=>{
        for (let i of result){
          console.log(i.ingredients)
          for (let j of i.ingredients) {
            if (j === url) {
              console.log(i)
              setRecipes(recipes=>[...recipes, i])
            }
          }
        }
      })
    })
  }, [id]);

  if (item) {
    console.log(recipes)
    return (
      <div>{item.name}</div>
    )
  } else {
    return (
      <h1>Page not found</h1>
    )
  }
}
