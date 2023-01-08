import React from 'react';
import { useParams } from 'react-router-dom';

export default function Ingredient() {
  const params = useParams();
  
  return (
    <div>Ingredient { params.id }</div>
  )
}
