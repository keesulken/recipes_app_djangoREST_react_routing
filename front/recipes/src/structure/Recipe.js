import React from 'react'
import { useParams } from 'react-router-dom'

export default function Recipe() {
  const params = useParams();

  return (
    <div>Recipe { params.id }</div>
  )
}
