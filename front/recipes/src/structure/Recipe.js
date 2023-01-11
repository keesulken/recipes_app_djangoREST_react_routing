import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const {id} = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/recipes/${id}`)
    .then(response => response.json())
    .then(result => setItem(result))
  }, [id]);

  if (item) {
    return (
      <div>
        <h2>{ item.title }</h2>
        <div>
          <p>{ item.content }</p>
        </div>
      </div>
    )
  } else {
    return (
      <h1>Page not found</h1>
    )
  }
}